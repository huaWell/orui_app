import {ORUIElement} from "../base/index.js";

interface style_searchbar_option {
    "--background"?: string,
    "--border-radius"?: string,
    "--height"?: string,
    "--padding-left"?: string,
    "--placeholder-color"?: string
}
export class SearchBar extends ORUIElement{
    static properties = {
        clearable:{
            type:Boolean,
            default:true
        },
        placeholder:{
            type: String,
            default: '请输入'
        },
        search_icon:{
            type: String,
            default: '/components/images/search.svg'
        },
        clear_icon:{
            type: String,
            default: '/components/images/close_circle.svg'
        },
        custom_style: {
            type: String,
            default: ''
        }
    }
    container:HTMLElement;
    placeholder:string;
    fragment:DocumentFragment;
    search_icon_container:HTMLElement;
    input:HTMLInputElement;
    search_icon:string;
    clear_icon:string;
    value:string;
    clearable:boolean;
    clear_icon_container:HTMLElement;
    input_container:HTMLElement;
    custom_style:string;

    init() {
        this.create()
        this.init_events()
    }

    create(){
        const fragment = document.createDocumentFragment()
        this.fragment = fragment;

        const container = this.create_element('div','orui-search-bar-container')
        this.container = container
        const box_input_container = this.create_element('div','orui-search-bar-input-box')
        const search_icon_container = this.create_element('div','orui-seach-bar-icon-container')
        const search_icon = this.create_element('orui-icon',"")
        search_icon_container['icon'] = search_icon
        search_icon_container.appendChild(search_icon)
        

        this.search_icon_container = search_icon_container
        const search_bar_input = this.create_element('div','orui-search-bar-input')
        this.input_container = search_bar_input
        const input = this.create_element('input','orui-search-bar-input-element') as HTMLInputElement
        input.placeholder = this.placeholder
        this.input = input

        const clear_container = this.create_element('div','orui-search-bar-clear')
        if(this.clearable){
            input.style.marginRight = '1.5rem'
            const clear_icon = this.create_element('orui-icon',"")
            clear_container['icon'] = clear_icon
            clear_container.appendChild(clear_icon)
        }

        this.clear_icon_container = clear_container
        this.import_css('/components/searchBar/index.css')

        search_bar_input.appendChild(input)
        search_bar_input.appendChild(clear_container)
        box_input_container.appendChild(search_icon_container)
        box_input_container.appendChild(search_bar_input)
        this.container.appendChild(box_input_container)
        this.fragment.appendChild(this.container)
        this.shadowRoot.appendChild(fragment)
    }

    create_element(tagName:string,className:string):HTMLElement{
        const tag = document.createElement(tagName)
        if(className){
            tag.className = className
        }
        return tag
    }

    init_events(){
        const _this = this
        this.input.addEventListener('click',(ev) => {
            ev.preventDefault()
            ev.stopPropagation()
            this.input.focus()
            this.container.classList.add('orui-search-bar-focus')
            if(this.input.value != "" && this.clearable){
                this.clear_icon_container.style.display = 'flex'
            }

            const event = new CustomEvent('focus',{
                detail:{
                    value:_this.input.value
                }
            })
            this.dispatchEvent(event)
        })
        this.clear_icon_container.addEventListener(('click'),(ev) => {
            ev.preventDefault()
            ev.stopPropagation()
            _this.input.value = ""
            this.clear_icon_container.style.display = 'none'
        })

        this.input.addEventListener('input',(ev) => {
            ev.stopPropagation()
            if(this.input.value != "" && this.clearable){
                this.clear_icon_container.style.display='flex'
            }else if(this.input.value == "" && this.clearable) {
                this.clear_icon_container.style.display='none'
            }
            const event = new CustomEvent('change',{
                detail:{
                    value:_this.input.value
                }
            })
            this.dispatchEvent(event)
        })
        this.input.addEventListener('blur',(ev) => {
            ev.stopPropagation()
            const event = new CustomEvent('blur',{
                detail:{
                    value:_this.input.value
                }
            })
            this.dispatchEvent(event)
        })

        this.input.addEventListener('keydown', (ev ) => {
            ev.stopPropagation()
            //@ts-ignore
            if(ev.keyCode == "13"){
                this.input.blur()
                this.container.classList.remove('orui-search-bar-focus')
            }
            const event = new CustomEvent('enter',{
                detail:{
                    value:this.input.value
                }

            })
            this.dispatchEvent(event)
        })

        window.addEventListener('click',(ev) => {
            ev.stopPropagation()
            this.input.blur()
            this.container.classList.remove('orui-search-bar-focus')
            this.clear_icon_container.style.display = 'none'
        })
    }

    render() {
        this.search_icon_container['icon'].path = this.search_icon
        if(this.clearable){
            this.clear_icon_container['icon'].path = this.clear_icon
        }

        if(this.placeholder){
            this.input.placeholder = this.placeholder
        }
        if(this.value){
            this.input.value = this.value
        }
        this.set_custom_style()
    }

    set_custom_style(){
        if(this.custom_style){
            this.style.cssText = this.custom_style
        }
    }
}

customElements.define('orui-search-bar',SearchBar)