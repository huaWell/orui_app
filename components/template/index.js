import { ORUIElement } from "../base/index.js";
import test from "./test.js";
export const create_template = (name, html) => {
    class MyTemplate extends ORUIElement {
        init() {
            const dom = this.string_to_dom(html);
            this.import_css('/components/template/index.css');
            this.shadowRoot.append(dom);
        }
    }
    customElements.define(`orui-template-${name}`, MyTemplate);
};
create_template('test', test);
