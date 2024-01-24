import {ORUI, ORUIElement} from "../base/index.js";

interface PickerViewDataOption {
    name: string,
    display_name: string,
    children?: Array<PickerViewDataOption>
}

export class PickerView extends ORUIElement{
    static properties = {
        item_height: {
            type: Number,
            default: 34
        },
        value: {
            type: Object,
            default: {},
            get: function() {
                const value = {}
                this.scrollBars && this.scrollBars.forEach((item) => {
                    const _data = item.data.find((i) => i.name == item['value'])
                    value[item['name']] = {..._data}
                })
                return value
            }
        },
        data: {
            type: Array,
            default: []
        }
    }
    data: Array<PickerViewDataOption>;
    custom_style: string;
    container: HTMLElement;
    item_height: number | string;
    value: Object;
    scrollBars: Array<ORUIElement>
    init() {
        this.data = this.data || []
        this.import_css('/components/pickerView/index.css')
        this.create()
    }
    render() {
        this.scrollBars = []
        // @ts-ignore
        this.style.setProperty('--item-height',(this.item_height / 16) + 'rem')
        if(this.custom_style){
            this.set_custom_style(this.custom_style)
        }
        this.container.innerHTML = ""
        this.data.forEach((column_data) => {
            this.create_column(column_data,this.value[column_data['name']])
        })
        this.create_mask()
    }
    create_column(column_data,value = ""){
        const data = column_data.data
        const column = <div class='orui-picker-view-column'/>
        this.container.appendChild(column)
        const _value = value?value:column_data.value
        const scrollBar = this.create_scrollBar(column_data,_value)
        column.appendChild(scrollBar)
        scrollBar.set_ui({
            itemHeight:this.item_height,
            data: data
        })
        return {scrollBar,column}
    }
    init_event(scrollBar){
        scrollBar.addEventListener('change',(ev) => {
            const event = new CustomEvent('change',{
                detail:{
                    scrollBar:scrollBar,
                    ev:ev
                }
            })
            this.dispatchEvent(event)
        })
    }

    create_scrollBar(column_data,value){
        const _value = value && typeof value !== 'string'?this.value[column_data.name] : value
        const scrollBar = (<orui-scroll-bar value={_value || ''} visible="true"/>)
        this.init_event(scrollBar)
        scrollBar['name'] = column_data.name
        this.scrollBars.push(scrollBar)
        return scrollBar
    }
    create_mask(){
        const mask = (
            <div class='orui-picker-view-mask'>
                <div class='orui-picker-view-mask-top'/>
                <div class='orui-picker-view-mask-middle'/>
                <div class="orui-picker-view-mask-bottom"/>
            </div>
        )
        this.container.appendChild(mask)
    }

    create(){
        const pickerView = <div class='orui-picker-view'/>
        this.container = pickerView
        this.shadowRoot.appendChild(this.container)
    }

    set_custom_style(custom_style){
        this.style.cssText = custom_style
    }
}

customElements.define('orui-picker-view',PickerView)