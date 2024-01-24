import {PickerView} from "../pickerView/index.js";
interface CascaderPickerViewDataType  {
    data: Array<{
        name: string;
        display_name: string;
        children?: CascaderPickerViewDataType;
    }>,
    name: string,
}

export class CascaderPickerView extends PickerView{
    static properties = {
        ...PickerView.properties,
        data: {
            type: Object,
            default: {}
        }
    }
    data: CascaderPickerViewDataType | any
    map_columns: Object;
    lazy_load: Function;
    item_height: number
    init() {
        super.init();
        this.import_css('/components/cascadePickerView/index.css')
    }

    render() {
        this.scrollBars = []
        this.map_columns = {}
        if (this.custom_style) {
            this.set_custom_style(this.custom_style)
        }
        this.style.setProperty('--item-height',(this.item_height/16) + 'rem')
        this.container.innerHTML = ""
        this.create_mask()
        if(JSON.stringify(this.data) != "{}"){
            this.create_cascader(this.data)
        }
    }
    get_max_depth(data: CascaderPickerViewDataType, currentDepth = 1): number {
        if (!data || !data.data || data.data.length === 0) {
            return currentDepth;
        }

        let maxDepth = currentDepth;
        for (const item of data.data) {
            if (item.children) {
                const childrenDepth = this.get_max_depth(item.children, currentDepth + 1);
                maxDepth = Math.max(maxDepth, childrenDepth);
            }
        }
        return maxDepth;
    }
    create_cascader(data,value?){
        const depth = this.get_max_depth(data)
        let _cascader_number = 1
        const _value = value?value : this.value
        let scroll_bar
        if(!this.map_columns[data.name]){
            const {column,scrollBar} = this.create_column(data,_value)
            scroll_bar = scrollBar
            this.map_columns[data.name] = column
        }else {
            const scrollBar = this.create_scrollBar(data,_value)
            scroll_bar = scrollBar
            this.map_columns[data.name].appendChild(scrollBar)
        }
        const _data = data.data
        if(!this.lazy_load){
            _data && _data.forEach((item) => {
                if(this.value[data.name]  && this.value[data.name] == item['name'] && item.children && JSON.stringify(item.children) != "{}"){
                    this.create_cascader(item.children)
                }else if(!this.value[data.name] && _cascader_number < depth){
                    _cascader_number++
                    this.create_cascader(item.children)
                }
            })
        }

        scroll_bar.set_ui({
            itemHeight:this.item_height,
            data: _data,
        })
    }

    init_event(scrollBar){
        scrollBar.addEventListener('change', async (ev) => {
            ev.preventDefault()
            const _data = scrollBar.data.find((_item) => _item.name == scrollBar.value)
            const event = new CustomEvent('change',{
                detail:{
                    value: scrollBar.value,
                    data: _data,
                },
                bubbles: true,
            })
            if(_data){
                this.dispatchEvent(event)
            }

            if(!this.lazy_load){
                this.update_cascader(ev,scrollBar,"")
            }else {
                const res = await this.lazy_load(scrollBar.value,_data)
                _data.children = res
                const child_data = res
                if(child_data && child_data.data && child_data.data.length > 0 && !scrollBar['has_next_cascader']){
                    this.create_cascader(child_data,child_data.value)
                    scrollBar['has_next_cascader'] = true
                }else if(scrollBar['has_next_cascader']){
                    this.update_cascader(ev,scrollBar,child_data.value)
                }
            }
        },true)
    }


    update_cascader(ev,parentScrollBar,value?) {
        const name = ev.detail.value
        const children_data = parentScrollBar.data.find((_item) => _item.name == name)?.children
        const child_scrollBar = children_data && this.scrollBars.find((scrollBar) => scrollBar['name'] == children_data.name)
        child_scrollBar && child_scrollBar.set_ui({
            data:children_data.data,
            value: value,
            event_trigger: false
        })
    }
}
customElements.define('orui-cascader-picker-view',CascaderPickerView)