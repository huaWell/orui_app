import { ORUIElement,ORUI } from "../base/index.js";

export class Mask extends ORUIElement {
    static properties = {
        visible: {
            type: Boolean,
            default: true
        },
        color: {
            type: String,
            default: 'black'
        },

    };
    visible: boolean;
    color: string;

    init() {
        const html = (
            <slot/>
        );
        this.import_css('/components/mask/index.css');
        this.shadowRoot.append(html);
    }

    render() {
        this.style.display = this.visible ? '' : 'none';
        this.style.background = this.color;
    }
}

customElements.define("orui-mask", Mask);
