import {ORUIElement,ORUI} from "../base/index.js";

export class Title extends ORUIElement{
    static properties = {
        text:{
            type: String,
            default: ""
        }
    }
    text: string;
    title_ctr:HTMLElement;
    constructor() {
        super();
    }

    init() {
        this.import_css('/components/title/index.css')
        const title = <div class='orui-title'/>
        this.title_ctr = title
        const slot = <slot/>;
        this.shadowRoot.append(title, slot)
    }

    render(){
        this.title_ctr.innerHTML = this.text
    }
}

customElements.define('orui-title',Title)