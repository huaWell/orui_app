import { ORUI, ORUIElement } from "../base/index.js";
export class Popup extends ORUIElement {
    init() {
        this.import_css('/components/popup/index.css');
        const html = (ORUI.createElement(ORUI.createFragment, null,
            ORUI.createElement("orui-mask", null),
            ORUI.createElement("orui-grid", { className: "content", gap: "0" },
                ORUI.createElement("orui-row", { grow: "0", className: "operation_bar" },
                    ORUI.createElement("orui-col", null,
                        ORUI.createElement("orui-space", { align: "center", style: "width: 100%;height: 100%;" },
                            ORUI.createElement("slot", { name: "operation_bar_left" }))),
                    ORUI.createElement("orui-col", null,
                        ORUI.createElement("orui-space", { align: "center", justify: "end", style: "width: 100%;height: 100%;" },
                            ORUI.createElement("slot", { name: "operation_bar_right" })))),
                ORUI.createElement("orui-row", null,
                    ORUI.createElement("div", { class: "content_body" },
                        ORUI.createElement("slot", null))))));
        this.shadowRoot.append(html);
        this.content = this.shadowRoot.querySelector('.content');
        this._mask = this.shadowRoot.querySelector('orui-mask');
        this.operation_bar = this.shadowRoot.querySelector('.operation_bar');
        this.init_events();
    }
    init_events() {
        this._mask.addEventListener('click', () => {
            if (this.close_on_mask_click) {
                this.visible = false;
            }
        });
        this.content.addEventListener('transitionend', () => {
            if (!this.visible) {
                this.style.display = '';
            }
        });
    }
    update(name) {
        const handler = {
            visible: 'render_visible',
            mask: 'render_mask',
            body_style: 'render_body_style',
            show_operation_bar: 'render_operation_bar',
        };
        handler[name] && this[handler[name]]();
    }
    render_visible() {
        if (this.visible) {
            this.content.className = `content content_${this.position}_init`;
            this.style.display = 'block';
            this._mask.style.opacity = '0';
            requestAnimationFrame(() => {
                this.content.classList.add(`content_${this.position}_show`);
                this._mask.style.opacity = '';
            });
        }
        else {
            this.content.classList.remove(`content_${this.position}_show`);
            this._mask.style.opacity = '0';
            if (this.is_init) {
                const event = new CustomEvent('close');
                this.dispatchEvent(event);
            }
        }
    }
    render_mask() {
        this._mask.visible = this.mask;
        if (this.mask) {
            this.style.width = '';
            this.style.height = '';
        }
        else {
            this.style.width = '0';
            this.style.height = '0';
        }
    }
    render_body_style() {
        this.content.style.cssText = this.body_style;
    }
    render_operation_bar() {
        this.operation_bar.style.display = this.show_operation_bar ? '' : 'none';
    }
    render() {
        this.render_visible();
        this.render_mask();
        this.render_body_style();
        this.render_operation_bar();
    }
}
Popup.properties = {
    mask: {
        type: Boolean,
        default: true
    },
    visible: {
        type: Boolean,
        default: false
    },
    position: {
        type: ['top', 'bottom', 'right', 'left', 'center'],
        default: 'bottom',
        is_update: false
    },
    body_style: {
        type: String,
        default: ''
    },
    close_on_mask_click: {
        type: Boolean,
        default: true,
        is_update: false
    },
    show_operation_bar: {
        type: Boolean,
        default: false
    }
};
customElements.define("orui-popup", Popup);
