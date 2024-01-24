import {ORUIElement} from "../base/index.js";
import {SIZE_TYPE, Space} from "../space/index.js";
import {ALIGN_TYPE, JUSTIFY_TYPE} from "../space/index.js";

export class Row extends ORUIElement {
    size: string;
    grow: number;
    justify: string;
    align: string;
    space: Space;
    static properties = {
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

    init() {
        const html = `
            <orui-space gap="0" style="width: 100%;height: 100%;">
                <slot/>
            </orui-space>
        `;
        const dom = this.string_to_dom(html);
        this.import_css('/components/row/index.css');
        this.shadowRoot.append(dom);
        this.space = this.shadowRoot.querySelector('orui-space');
    }

    update(name: string) {
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
        if(!grow){
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

customElements.define("orui-row", Row);