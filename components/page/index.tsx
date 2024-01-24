import {ORUI, ORUIElement} from "../base/index.js";

export class Page extends ORUIElement {
    init() {
        this.import_css('/components/page/index.css');
    }

    append(...dom) {
        this.shadowRoot.append(...dom);
    }

    querySelector(selector: string) {
        return this.shadowRoot.querySelector(selector);
    }
}

customElements.define("orui-page", Page);