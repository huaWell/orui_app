import {ORUI, ORUIElement} from "../base/index.js";

export class Divider extends ORUIElement{
    static properties = {
        content_direction:{
            type: ["left","center","right"],
            default: "center"
        },
        custom_style: {
            type: String,
            default: ""
        },
        direction: {
            type: ["horizontal" , "vertical"],
            default: "horizontal"
        },
        no_content: {
            type: Boolean,
            default: false
        }
    }
    content_direction: string;
    custom_style: string;
    direction: string;
    no_content: boolean;
    protected divider: HTMLElement

    init() {
        this.import_css('/components/divider/index.css')
        const divider = (<div></div>)
        const content = (<div class="orui-divider-content"></div>)
        const slot = (<slot></slot>)
        content.appendChild(slot)
        divider['content'] = content
        divider.appendChild(content)
        this.divider = divider
        this.shadowRoot.appendChild(divider)
    }

    render() {
        this.divider.className = 'orui-divider'
        const direction_className = `orui-divider-${this.direction}`
        if(!this.divider.classList.contains(direction_className)){
            this.divider.classList.add(direction_className)
        }
        if(this.direction == 'vertical'){
            this.style.width = 'auto'
        }else {
            this.style.width = '100%'
        }
        const content_direction_className = `orui-divider-${this.content_direction}`
        if(!this.divider.classList.contains(content_direction_className)){
            this.divider.classList.add(content_direction_className)
        }
        if(this.no_content){
            this.divider['content'].style.padding = '0'
        }else if(this.direction !== 'vertical') {
            this.divider['content'].style.padding = "0 1rem"
        }
    }
}

customElements.define('orui-divider',Divider)