import { ORUI, ORUIElement } from "../base/index.js";
import { get_control } from "../utils/index.js";
export class Picker extends ORUIElement {
    constructor() {
        super(...arguments);
        this.picker_view_custom_style = "";
    }
    init() {
        const html = (ORUI.createElement("orui-row", null,
            ORUI.createElement("orui-popup", { show_operation_bar: this.show_operation_bar, close_on_mask_click: this.close_on_mask_click },
                ORUI.createElement("orui-button", { ui_name: "picker_close", text: this.cancel_text, type: "none", color: "primary", slot: "operation_bar_left" }),
                ORUI.createElement("orui-button", { ui_name: "picker_confirm", text: this.confirm_text, type: "none", color: "primary", slot: "operation_bar_right" }),
                ORUI.createElement("orui-divider", null),
                ORUI.createElement("orui-picker-view", { item_height: this.item_height }))));
        // const dom = this.string_to_dom(html)
        this.popup = html.querySelector('orui-popup');
        this.picker_view = html.querySelector('orui-picker-view');
        this._close = get_control("picker_close", html);
        this.confirm = get_control("picker_confirm", html);
        this.shadowRoot.appendChild(html);
        this.init_event();
        this.import_css('/components/picker/index.css');
    }
    init_event() {
        this.picker_view.addEventListener('change', (ev) => {
            if (this.update_arr.length == 0) {
                const event = new CustomEvent('change', {
                    detail: ev.detail
                });
                this.dispatchEvent(event);
            }
        });
        this._close.addEventListener('click', (ev) => {
            const event = new CustomEvent('cancel', {
                detail: {
                    target: this
                }
            });
            this.dispatchEvent(event);
        });
        this.confirm.addEventListener('click', (ev) => {
            const event = new CustomEvent('confirm', {
                detail: {
                    target: this,
                    data: this.data,
                    value: this.value
                }
            });
            this.dispatchEvent(event);
        });
        this.popup.addEventListener('close', () => {
            const event = new CustomEvent('close', {
                detail: {
                    target: this
                }
            });
            this.dispatchEvent(event);
        });
    }
    update(name, oldValue, newValue) {
        if (name == 'visible') {
            this.popup.visible = newValue;
            return;
        }
        super.update(name, oldValue, newValue);
    }
    render() {
        this.picker_view.set_ui({
            data: this.data,
            item_height: this.item_height,
            value: this.value,
            custom_style: this.picker_view_custom_style
        });
    }
}
Picker.properties = {
    item_height: {
        type: Number,
        default: 34,
        get: function () {
            return this.picker_view.item_height;
        }
    },
    visible: {
        type: Boolean,
        default: false,
        get: function () {
            return this.popup.visible;
        },
    },
    data: {
        type: Array,
        default: []
    },
    value: {
        type: Object,
        default: {},
        get: function () {
            return this.picker_view.value;
        }
    },
    show_operation_bar: {
        type: Boolean,
        default: true
    },
    cancel_text: {
        type: String,
        default: "取消"
    },
    confirm_text: {
        type: String,
        default: '确定'
    },
    close_on_mask_click: {
        type: Boolean,
        default: true
    }
};
customElements.define('orui-picker', Picker);
