import {ORUI, ORUIElement} from "../base/index.js";
interface selector_option {
    name:string,
    display_name:string,
    description?:string,
    selected:boolean | number;
    disabled:boolean | number
}

interface selector_custom_style_option {
    "--color"?:string,
    "--checked-bg-color"?:string,
    "--text-color"?:string,
    "--checked-text-color"?:string,
    "--border-radius"?:string,
    "--padding"?:string,
    "--border"?:string,
    "--gap"?:string,
    "--active-border-color"?:string
}
export class Selector extends ORUIElement{
    static properties = {
        columns:{
            type:Number,
            default:0
        },
        selectable:{
            type: Boolean,
            default: true,
            is_update: false
        },
        disabled: {
            type: Boolean,
            default: false,
            is_update: false
        },
        label_field: {
            type: String,
            default: 'display_name',
            is_update: false
        },
        value_field:{
            type: String,
            default: 'name',
            is_update: false
        },
        disabled_filed: {
            type: String,
            default: 'disabled',
            is_update: false
        },
        selected_filed: {
            type: String,
            default: 'selected',
            is_update: false
        },
        description_filed: {
            type: String,
            default: 'description',
            is_update: false
        },
        clearable: {
            type: Boolean,
            default: true,
            is_update: false
        },
        show_checked_wrap: {
            type: Boolean,
            default: true,
        },
        custom_style: {
            type: String,
            default: ""
        }
    }
    options:Array<selector_option> = []
    columns:number | string;
    container:HTMLElement;
    selectable:boolean | string;
    default_value:string;
    disabled:boolean | string | number;
    data:string | {};
    label_field:string;
    value_field:string;
    disabled_filed:string;
    selected_filed:string;
    description_filed:string;
    clearable:string | number | boolean
    custom_style:string;
    show_checked_wrap:string | number | boolean;
    init() {
        this.options = this.options || []
        this.import_css('/components/selector/index.css')
    }

    create(){
        const options_container = <div class='orui-selector-options-container'/>
        if(this.columns){
            this.style.setProperty('--columns',this.columns.toString())
           options_container.classList.add('orui-grid')
        }
        const option_items = []
        this.options.forEach((option,index) => {
            const option_item = <div class='orui-selector-option-item'/>
            option_item['option'] = option
            option_item.innerHTML = option[this.label_field]
            option_item['selected'] = option[this.selected_filed] == undefined? false : true
            option_item['name'] = option[this.value_field]
            if(option[this.selected_filed] || this.default_value == option.name){
                option_item['selected'] = true
                this.set_option_active(option.name,option_item,true)
            }
            if(this.selectable && option[this.disabled_filed]){
                option_item.classList.add('orui-selector-option-item-disabled')
            }
            if(option[this.description_filed]){
                this.create_option_item_description(option_item,option[this.description_filed])
            }
            option_item.addEventListener('click',(ev) => {
                this.set_option_item_status(ev,option_item)
            })
            options_container.appendChild(option_item)
            option_items.push(option_item)
        })


        if(!this.container){
            const container = <div class='orui-selector-container'/>
            this.container = container
            this.shadowRoot.appendChild(container)
        }
        this.container['options_items'] = option_items
        if(this.disabled){
            options_container.classList.add('orui-option-disabled')
        }
        if(this.default_value){
            this.set_value(this.default_value)
        }

        this.container.appendChild(options_container)
    }
    set_value(name){
        if(!this.selectable){
            this.data = name
        }else {
            this.data = this.get_selectable_active_option_item()
        }
    }
    create_option_item_description(option_item,content){
        const description_ctr = <div class='orui-selector-item-description'/>
        description_ctr.innerHTML = content
        option_item.appendChild(description_ctr)
        option_item['description_ctr'] = description_ctr
    }

    get_selectable_active_option_item(){
        const items = this.container['options_items']
        const res = {}
        for(let i = 0; i < items.length; i++){
            res[items[i]['name']] = items[i]['selected']
        }
        return res
    }

    set_option_item_status(ev,option_item){
        if(!this.clearable && !this.selectable){
            option_item['selected'] = true
        }else {
            option_item['selected'] = !option_item['selected']
        }

        if(!this.selectable && this.data != option_item.name){
            this.set_option_active(this.data,null,false)
        }
        this.set_value(option_item['name'])
        this.set_option_active(this.data,option_item,option_item['selected'])
        const event = new CustomEvent('change',{
            detail:{
                data:this.data,
                option:option_item['option']
            }
        })
        this.dispatchEvent(event)
    }
    set_option_active(name,option_item,active = true){
        if(!option_item){
            const items = this.container['options_items']
            for(let i = 0; i < items.length; i++){
                if(items[i].name == name){
                    option_item = items[i]
                    option_item['selected'] = active
                    break
                }
            }
        }
        if(active && option_item){
            option_item.classList.add('orui-selector-option-item-active')
            if(!option_item['checked_wrap'] && this.show_checked_wrap){
                this.create_check_wrap(option_item)
            }else if(option_item['checked_wrap']) {
                option_item.appendChild(option_item['checked_wrap'])
            }
        }else if(option_item) {
            if(option_item.contains(option_item['checked_wrap'])){
                option_item.removeChild(option_item['checked_wrap'])
            }
            option_item.classList.remove('orui-selector-option-item-active')
        }
    }

    create_check_wrap(option_item){
        const wrap = <div class='orui-check-wrap'></div>
        const icon = <orui-icon path='/components/images/check.svg' color='var(--orui-color-fill-content)'/>
        option_item['checked_wrap'] = wrap
        wrap.appendChild(icon)
        option_item.appendChild(wrap)
        return wrap
    }

    set_custom_style(){
        if(this.custom_style){
            this.style.cssText = this.custom_style
        }
        // const keys = Object.keys(this.custom_style)
        // keys.forEach((key) => {
        //     this.style.setProperty(key,this.custom_style[key])
        // })
    }

    get_data(){
        return this.data
    }

    render() {
        if(this.container){
            this.container.innerHTML = ""
        }
        if(this.custom_style){
            this.set_custom_style()
        }
        this.create()
    }
}

customElements.define('orui-selector',Selector)