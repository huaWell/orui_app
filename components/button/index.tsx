import { ORUIElement,ORUI} from "../base/index.js";
import {throttle} from '../utils/index.js'
// @ts-ignore
export class Button extends ORUIElement {
    static properties = {
        color:{
            type:["default", "primary", "success", "warning", "danger"],
            default: "default"
        },
        text:{
            type: String,
            default:""
        },
        type: {
            type:["fill","outline","none"],
            default:"outline"
        },
        size:{
            type:["mini","small","normal","large"],
            default:"normal"
        },
        icon:{
            type: String,
            default: ""
        },
        disable: {
            type: Boolean,
            default: false
        },
        icon_color: {
            type: String,
            default: ""
        }
    }
    text: string;
    disable:boolean;
    icon_align:string = Button.ICON_ALIGN['left'];
    type:string; // 'fill','outline','none'
    size:string; //mini small big large
    container:HTMLElement;
    icon:string;
    icon_color: string;
    fragment:any;
    custom_style:string = "";
    name:string;
    block:string | number | string = 0; //'1' '0'
    block_width:string;
    color:string; //default primary success warning danger
    static SIZE_TYPE:Object = {
        mini:'orui-button-mini',
        small:'orui-button-small',
        normal:'orui-button-middle',
        large:'orui-button-large'
    }
    static COLOR_TYPE:Object = {
        default:'default',
        primary:'primary',
        success:'success',
        warning:'warning',
        danger:'danger'
    }
    static TYPE_TYPE:Object = {
        fill:"orui-button-fill",
        outline:"orui-button-outline",
        none:"orui-button-none"
    }
    static ICON_SIZE:Object = {
        mini:'var(--orui-size-button-icon-mini)',
        small:'var(--orui-size-button-icon-small)',
        normal:'var(--orui-size-button-icon-normal)',
        large:'var(--orui-size-button-icon-large)'
    }
    static ICON_ALIGN:Object = {
        left:'left',
        right:'right'
    }

    static ICON_COLOR:Object = {
        default:'var(--orui-color-text)',
        primary:'var(--orui-color-primary)',
        success:'var(--orui-color-success)',
        warning:'var(--orui-color-warning)',
        danger:'var(--orui-color-danger)',
        fill_primary: 'var(--orui-color-white)'
    }


    constructor() {
        super();
    }

    render() {
        this.container.className = 'orui-button'
        this.render_button()
        this.init_style()
        this.init_custom_style();
        this.init_icon_button_style();
        this.event_handler();
        // this.shadowRoot.appendChild(this.fragment)
    }
    render_button(){
        this.container.innerHTML = ""
        // this.container.appendChild(container);
        if (this.icon) {
            const icon_container = <div class="orui-button-icon"/>
            // icon_container.classList.add();
            const icon = <orui-icon path={this.icon}>/</orui-icon>
            if(this.type != 'fill'){
                icon['color'] = this.icon_color?this.icon_color: Button.ICON_COLOR[this.color]
            }else {
                icon['color'] = this.icon_color?this.icon_color: Button.ICON_COLOR['fill_primary']
            }

            icon_container.appendChild(icon)
            this.container.appendChild(icon_container);
            this.container["icon"] = icon;
            this.container["icon_container"] = icon_container;
        }
        if(!this.container["text"]){
            const text = <div/>
            this.container["text"] = text;
            try {
                if (typeof this.text !== "string") {
                    throw new Error("not a text string");
                }
                text.innerHTML = this.text;
            } catch (e) {
                text.innerHTML = this.text;
            }
            this.container.appendChild(text);
        }else {
            this.set_button_text(this.text)
        }
    }

    create() {
        let fragment = (
            <>
                <div/>
            </>
        )
        this.fragment = fragment
        this.import_css( "/components/button/index.css")
        this.container  = fragment.querySelector('div');
        this.container.classList.add("orui-button");
        this.fragment.appendChild(this.container)
        this.shadowRoot.append(this.fragment);
    }

    init() {
        this.create()
    }
    init_style() {
        this.container.classList.add(Button.SIZE_TYPE[this.size])
        this.init_button_style();
        if (this.disable) {
            this.set_disable_button();
        }
    }


    init_button_style() {
        if(this.block){
            this.style.width = this.block_width || '100%'
            this.container.classList.add('orui-button-block')
        }
        // if(this.color == 'default'){
        //     this.container.classList.add('orui-button-default')
        // }

        // else {
        //     this.container.classList.add(Button.TYPE_TYPE[this.type]);
        //     //
        // }
        this.container.classList.add(Button.TYPE_TYPE[this.type] + '-' + this.color)
    }

    init_icon_button_style() {
        if (this.container["text"]) {
            this.container["text"].style.whiteSpace='nowrap'
        }
        if (this.icon_align == Button.ICON_ALIGN['right']) {
            this.container.style.flexDirection = "row-reverse";
            this.container["text"].style.marginRight = "0rem";
            if(this.container["icon_container"]){
                this.container["icon_container"].style.marginLeft = '0.5rem'
            }

        }else if(this.icon_align == Button.ICON_ALIGN['left']){
            if(this.container["icon_container"]){
                this.container["icon_container"].style.marginRight = '0.5rem'
            }
        }
        if(this.icon){
            this.container["icon"].width = Button.ICON_SIZE[this.size]
            this.container["icon"].height = Button.ICON_SIZE[this.size]
        }
    }

    init_custom_style() {
        let style = this.custom_style;
        if (style) {
            this.style.cssText = style
        }
    }

    event_handler() {
        this.container.addEventListener("click", throttle((_ev: MouseEvent) => {
            _ev.preventDefault()
            _ev.stopPropagation()
            const event = new CustomEvent('click',{
                detail:{
                    name:this.name,
                    // params:params
                }
            })
            this.dispatchEvent(event)
        },1000))
    }

    get_container() {
        return this.container;
    }

    set_disable_button() {
        this.container.classList.add("orui-button-disable");
        // this.container.setAttribute('data-type','disabled')
        if(!this.icon) return
        const str = this.icon.substr(0, this.icon.length - 4);
        this.container["icon"].src = str + "_disable.png"
    }

    enable() {
        this.container.classList.remove("orui-button-disable");
        // this.container.setAttribute('data-type','normal')
        if(!this.icon) return
        this.container["icon"].src = this.icon;
    }

    set_button_text(_text: string) {
        this.container["text"].innerHTML = _text;
        this.container.appendChild(this.container["text"])
    }
    // update(name, oldValue, newValue) {
    //     this.render()
    // }

    hide_button() {
        this.container.style.display = "none";
    }

    show_button() {
        this.container.style.display = "block";
    }


    validate_url(_url: string) {
        let xmlHttp;
        if (window.ActiveXObject) {
            xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
        } else if (window.XMLHttpRequest) {
            xmlHttp = new XMLHttpRequest();

        }
        xmlHttp.open("Get", _url, false);
        xmlHttp.send();
        return xmlHttp.status != 404;
    }

    //   是否变透明
    change_lucency(config){
        if(config){
            //    隐藏
            this.container.classList.add('orui-button-opacity')
        }else{
            //    显示
            this.container.classList.remove('orui-button-opacity')
        }
    }
}
customElements.define("orui-button", Button);