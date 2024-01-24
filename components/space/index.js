import { ORUIElement } from "../base/index.js";
export const JUSTIFY_TYPE = {
    start: 'flex-start',
    end: 'flex-end',
    center: 'center',
    between: 'space-between',
    around: 'space-around',
    evenly: 'space-evenly'
};
export const ALIGN_TYPE = {
    start: 'start',
    end: 'end',
    center: 'center',
    baseline: 'stretch'
};
export const DIRECTION_TYPE = {
    vertical: 'column',
    horizontal: 'row'
};
export const SIZE_TYPE = {
    large: 'var(--orui-gap-l)',
    middle: 'var(--orui-gap-m)',
    small: 'var(--orui-gap-s)'
};
export class Space extends ORUIElement {
    init() {
        const slot = document.createElement('slot');
        this.import_css('/components/space/index.css');
        this.shadowRoot.append(slot);
    }
    render() {
        let gap = SIZE_TYPE[this.size];
        gap = this.gap !== '' ? this.gap : gap;
        this.style.setProperty('--gap-size', gap);
        this.style.flexDirection = DIRECTION_TYPE[this.direction];
        this.style.alignItems = ALIGN_TYPE[this.align];
        this.style.flexWrap = this.wrap ? 'wrap' : '';
        this.style.justifyContent = JUSTIFY_TYPE[this.justify];
    }
}
Space.properties = {
    justify: {
        type: Object.keys(JUSTIFY_TYPE),
        default: 'start'
    },
    align: {
        type: Object.keys(ALIGN_TYPE),
        default: 'start'
    },
    direction: {
        type: Object.keys(DIRECTION_TYPE),
        default: 'horizontal'
    },
    size: {
        type: Object.keys(SIZE_TYPE),
        default: 'middle'
    },
    wrap: {
        type: Boolean,
        default: false
    },
    gap: {
        type: String,
        default: ''
    }
};
customElements.define("orui-space", Space);
