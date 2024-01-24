import { ORUIElement, ORUI } from "../base/index.js";
export class Title extends ORUIElement {
    constructor() {
        super();
    }
    init() {
        this.import_css('/components/title/index.css');
        const title = ORUI.createElement("div", { class: 'orui-title' });
        this.title_ctr = title;
        const slot = ORUI.createElement("slot", null);
        this.shadowRoot.append(title, slot);
    }
    render() {
        this.title_ctr.innerHTML = this.text;
    }
}
Title.properties = {
    text: {
        type: String,
        default: ""
    }
};
customElements.define('orui-title', Title);
