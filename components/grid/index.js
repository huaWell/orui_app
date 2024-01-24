import { ORUI, ORUIElement } from "../base/index.js";
import { SIZE_TYPE } from "../space/index.js";
export class Grid extends ORUIElement {
    init() {
        const html = (ORUI.createElement("orui-space", { direction: "vertical", style: "width: 100%;height: 100%" },
            ORUI.createElement("slot", null)));
        this.import_css('/components/grid/index.css');
        this.shadowRoot.append(html);
        this.space = this.shadowRoot.querySelector('orui-space');
    }
    render() {
        this.space.size = this.size;
        this.space.gap = this.gap;
    }
}
Grid.properties = {
    size: {
        type: Object.keys(SIZE_TYPE),
        default: 'middle'
    },
    gap: {
        type: String,
        default: ''
    }
};
customElements.define("orui-grid", Grid);
