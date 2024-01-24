import { ORUIElement } from "../base/index.js";
export class Cache extends ORUIElement {
    init() {
        this.import_css('/components/cache/index.css');
    }
    append(...dom) {
        this.shadowRoot.append(...dom);
    }
    querySelector(selector) {
        return this.shadowRoot.querySelector(selector);
    }
}
customElements.define("orui-cache", Cache);
