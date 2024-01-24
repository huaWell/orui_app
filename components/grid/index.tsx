import {ORUI, ORUIElement } from "../base/index.js";
import { Space, SIZE_TYPE } from "../space/index.js";

export class Grid extends ORUIElement {
    size: string;
    gap: string;
    space: Space;
    static properties = {
        size: {
            type: Object.keys(SIZE_TYPE),
            default: 'middle'
        },
        gap: {
            type: String,
            default: ''
        }
    };

    init() {
        const html = (
            <orui-space direction="vertical" style="width: 100%;height: 100%">
                <slot/>
            </orui-space>
        );
        this.import_css('/components/grid/index.css');
        this.shadowRoot.append(html);
        this.space = this.shadowRoot.querySelector('orui-space');
    }

    render() {
        this.space.size = this.size;
        this.space.gap = this.gap;
    }
}

customElements.define("orui-grid", Grid);
