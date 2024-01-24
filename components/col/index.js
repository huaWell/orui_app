import { ORUI, ORUIElement } from "../base/index.js";
import { SIZE_TYPE } from "../space/index.js";
import { ALIGN_TYPE, JUSTIFY_TYPE } from "../space/index.js";
export class Col extends ORUIElement {
    init() {
        const html = (ORUI.createElement("orui-space", { direction: "vertical", gap: "0", style: "width: 100%;height: 100%;" },
            ORUI.createElement("slot", null)));
        this.import_css('/components/col/index.css');
        this.shadowRoot.append(html);
        this.space = this.shadowRoot.querySelector('orui-space');
    }
    update(name) {
        const handler = {
            size: 'render_size',
            grow: 'render_grow',
            justify: 'render_justify',
            align: 'render_align'
        };
        handler[name] && this[handler[name]]();
    }
    render_size() {
        this.space.size = this.size;
    }
    render_grow() {
        const grow = this.grow;
        this.style.flex = grow.toString();
        if (!grow) {
            this.style.flexBasis = 'auto';
            this.style.flexShrink = '0';
        }
    }
    render_justify() {
        this.space.justify = this.justify;
    }
    render_align() {
        this.space.align = this.align;
    }
    render() {
        this.render_size();
        this.render_grow();
        this.render_justify();
        this.render_align();
    }
}
Col.properties = {
    size: {
        type: Object.keys(SIZE_TYPE),
        default: 'middle'
    },
    grow: {
        type: Number,
        default: 1
    },
    justify: {
        type: Object.keys(JUSTIFY_TYPE),
        default: 'start'
    },
    align: {
        type: Object.keys(ALIGN_TYPE),
        default: 'start'
    }
};
customElements.define("orui-col", Col);
