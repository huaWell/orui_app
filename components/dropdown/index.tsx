import {ORUI, ORUIElement} from "../base/index.js";

export class Dropdown extends ORUIElement{
    static properties = {
        data: {
            type: Object,
            default: {},
        },
        value: {
            type: Object,
            default: {},
            get: function () {
                const _value = {}
                this.dropDowns && this.dropDowns.forEach((dropdown) => {
                    if(dropdown['checkList']){
                        _value[dropdown['name']] = dropdown['checkList'].value[0]
                    }else {
                        _value[dropdown['name']] = this.storage_value[dropdown['name']]
                    }
                })
                return _value
            }
        },
        arrow: {
            type: String,
            default: '<orui-icon path="/components/images/down_fill.svg" width="0.5625rem" height="0.5625rem"></orui-icon>'
        },
        active_color: {
            type: String,
            default: 'var(--orui-color-primary)'
        },
        custom_style: {
            type: String,
            default: ""
        }
        // extra: {
        //     type: String,
        //     default: ''
        // },
        // active_extra: {
        //     type: String,
        //     default: '<orui-icon path="/components/images/check.svg" color="var(--orui-color-primary)"></orui-icon>'
        // },
    }
    data: Object;
    dropdownBar: HTMLElement;
    arrow: string;
    value: Object;
    dropDowns: Array<HTMLElement> = [];
    active_dropdown: HTMLElement;
    active_color: string;
    storage_value: Object;
    custom_style: string;
    _mask: ORUIElement;
    // extra: string;
    // active_extra: string

    init(){
        const template = (
            <div class="orui-dropdown-bar">
            </div>
        )
        this.shadowRoot.appendChild(template)
        this.dropdownBar = this.shadowRoot.querySelector('.orui-dropdown-bar')
        this.import_css('/components/dropdown/index.css')
    }

    render(){
        this.dropdownBar.innerHTML = ""
        this.dropDowns = []
        const keys = Object.keys(this.data)
        this.style.setProperty('--active-color',this.active_color)
        if(this.custom_style){
            this.style.cssText = this.custom_style
        }
        for(let i = 0; i < keys.length; i++){
            const options = this.data[keys[i]]
            this.create_dropdown_bar(options,keys[i])
        }

        this.storage_value = this.value
    }
    create_dropdown_bar(data,name){
        const dropdownBarContent = (<div class='orui-dropdown-bar-content'></div>)
        const title = (<div class='orui-dropdown-bar-title'></div>)
        if(!this.value[name]){
            this.value[name] = data[0].name
        }
        title.innerHTML = data.find((_item) => _item.name == this.value[name]).content
        dropdownBarContent.appendChild(title)
        const rightArrow = (<span class='orui-dropdown-arrow'></span>)
        rightArrow.innerHTML = this.arrow
        dropdownBarContent.appendChild(rightArrow)
        dropdownBarContent['data'] = data
        dropdownBarContent['name'] = name
        dropdownBarContent['arrow'] = rightArrow
        dropdownBarContent['_title'] = title
        const dropdownItemDown = (<div class= 'orui-dropdown-item-down'></div>)
        dropdownItemDown['name'] = name
        this.dropDowns.push(dropdownItemDown)
        this.init_dropDown_click_event(dropdownBarContent)

        this.dropdownBar.appendChild(dropdownBarContent)
        this.shadowRoot.appendChild(dropdownItemDown)
    }
    init_dropDown_click_event(dropdownBarContent){
        dropdownBarContent.onclick = (ev) => {
            ev.preventDefault()
            ev.stopPropagation()

            const dropdownItem = this.dropDowns.find((item) => item['name'] == dropdownBarContent['name'])
            const flag = this.active_dropdown == dropdownItem
            if(this.active_dropdown){
                this.set_dropdown_not_active()
                if(flag) return
            }
            if(dropdownItem.innerHTML == ""){
                const html = (
                    <div class="orui-dropdown-down">
                        <orui-mask></orui-mask>
                        <div class="orui-check-list-content">
                            <orui-check-list></orui-check-list>
                        </div>
                    </div>
                )
                this._mask = html.querySelector('orui-mask')
                this._mask.addEventListener('click',() => {
                    this.set_dropdown_not_active()
                })
                dropdownItem.appendChild(html)
                const checkList = dropdownItem.querySelector('orui-check-list') as ORUIElement
                dropdownItem['down'] = dropdownItem.querySelector('.orui-dropdown-down')
                dropdownItem.style.width = (this.offsetWidth + 2)/16 + 'rem'
                this.value[dropdownBarContent['name']] = this.value[dropdownBarContent['name']]
                const check_list_value = [this.value[dropdownBarContent['name']]]
                checkList.set_ui({
                    data:dropdownBarContent['data'],
                    clearable: false,
                    value: check_list_value,
                    // extra: this.extra,
                    // active_extra: this.active_extra
                })
                dropdownItem['checkList'] = checkList
                checkList.addEventListener('change',(ev) => {
                    const event = new CustomEvent('change',{
                        detail:{
                            value: checkList['value'],
                            data: checkList['data'],
                        }
                    })
                    this.dispatchEvent(event)
                    this.set_title_content(dropdownBarContent['data'],checkList['value'],dropdownBarContent)
                })
                checkList.addEventListener('click',(ev) => {
                    const event = new CustomEvent('click',{
                        detail:{
                            value: checkList['value'],
                            data: checkList['data'],
                        }
                    })
                    this.dispatchEvent(event)
                    this.set_dropdown_not_active()
                })
            }
            if(!dropdownItem['down'].style.display || dropdownItem['down'].style.display == 'none'){
                dropdownItem['down'].style.display = 'block'
            }else {
                dropdownItem['down'].style.display = 'none'
                return;
            }
            dropdownItem['down'].style.zIndex = "1001"
            // dropdownItem['down'].style.display = 'block'
            this.dropdownBar.style.zIndex = "1002"
            dropdownItem.style.width = (this.offsetWidth + 2)/16 + 'rem'
            dropdownItem['down'].classList.add('orui-dropdown-item-down-active')
            dropdownItem['down'].style.width = dropdownItem.offsetWidth/16 + 'rem'
            dropdownBarContent.classList.add('orui-dropdown-bar-active')
            this.active_dropdown = dropdownItem
            this.active_dropdown['_parent'] = dropdownBarContent
            const event = new CustomEvent('expand',{
                detail: {
                    item:dropdownItem
                }
            })
            this.dispatchEvent(event)
        }
    }

    set_dropdown_not_active(){
        this.active_dropdown['down'].classList.remove('orui-dropdown-item-down-active');
        this.active_dropdown['down'].style.display = 'none'
        this.dropdownBar.style.zIndex = "1000"
        this.active_dropdown['_parent'].classList.remove('orui-dropdown-bar-active')
        const event = new CustomEvent('close',{
            detail: {
                active:this.active_dropdown
            }
        })
        this.dispatchEvent(event)
        this.active_dropdown = null
    }

    set_title_content(data,value,dropdownBarContent){
        dropdownBarContent['_title'].innerHTML = data.find((item) => item.name == value[0]).content
    }

}

customElements.define('orui-dropdown',Dropdown)