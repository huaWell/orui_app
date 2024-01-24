import { ORUIElement, ORUI } from "../base/index.js";
export class Mask extends ORUIElement {
    init() {
        const html = (ORUI.createElement("slot", null));
        this.import_css('/components/mask/index.css');
        this.shadowRoot.append(html);
    }
    render() {
        this.style.display = this.visible ? '' : 'none';
        this.style.background = this.color;
    }
}
Mask.properties = {
    visible: {
        type: Boolean,
        default: true
    },
    color: {
        type: String,
        default: 'black'
    },
};
customElements.define("orui-mask", Mask);
