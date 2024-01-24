import { ORUIElement, ORUI } from "../base/index.js";
import { get_control } from "../utils/index.js";
export class CascaderPicker extends ORUIElement {
    init() {
        const html = (ORUI.createElement("orui-row", null,
            ORUI.createElement("orui-popup", { show_operation_bar: this.show_operation_bar, close_on_mask_click: this.close_on_mask_click },
                ORUI.createElement("orui-button", { ui_name: "cascader_picker_close", text: this.cancel_text, type: "none", color: "primary", slot: "operation_bar_left" }),
                ORUI.createElement("orui-button", { ui_name: "cascader_picker_confirm", text: this.confirm_text, type: "none", color: "primary", slot: "operation_bar_right" }),
                ORUI.createElement("orui-row", { grow: '0' },
                    ORUI.createElement("orui-divider", { no_content: 'true' })),
                ORUI.createElement("orui-row", null,
                    ORUI.createElement("orui-cascader-picker-view", null)))));
        this.cascader_picker_view = html.querySelector('orui-cascader-picker-view');
        this.cascader_picker_popup = html.querySelector('orui-popup');
        this.cascader_picker_close = get_control("cascader_picker_close", html);
        this.cascader_picker_confirm = get_control("cascader_picker_confirm", html);
        this.shadowRoot.appendChild(html);
        this.init_event();
    }
    init_event() {
        this.cascader_picker_view.addEventListener('change', (ev) => {
            if (this.update_arr.length == 0 || this.lazy_load) {
                const event = new CustomEvent('change', {
                    detail: ev.detail
                });
                this.dispatchEvent(event);
            }
        });
        this.cascader_picker_close.addEventListener('click', () => {
            const event = new CustomEvent('cancel', {
                detail: {
                    target: this
                }
            });
            this.dispatchEvent(event);
        });
        this.cascader_picker_confirm.addEventListener('click', (_ev) => {
            const event = new CustomEvent('confirm', {
                detail: {
                    target: this,
                    data: this.data,
                    value: this.value
                }
            });
            this.dispatchEvent(event);
        });
        this.cascader_picker_popup.addEventListener('close', () => {
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
            this.cascader_picker_popup.visible = newValue;
            return;
        }
        super.update(name, oldValue, newValue);
    }
    render() {
        this.cascader_picker_view.set_ui({
            data: this.data,
            lazy_load: this.lazy_load,
            item_height: this.item_height,
            value: this.value
        });
    }
}
CascaderPicker.properties = {
    item_height: {
        type: Number,
        default: 34,
        get: function () {
            return this.cascader_picker_view.item_height;
        }
    },
    data: {
        type: Object,
        default: {},
        get: function () {
            return this.cascader_picker_view.data;
        }
    },
    visible: {
        type: Boolean,
        default: false,
        get: function () {
            return this.cascader_picker_popup.visible;
        }
    },
    value: {
        type: Object,
        default: {},
        get: function () {
            return this.cascader_picker_view.value;
        }
    },
    show_operation_bar: {
        type: Boolean,
        default: true
    },
    close_on_mask_click: {
        type: Boolean,
        default: true
    },
    cancel_text: {
        type: String,
        default: '取消'
    },
    confirm_text: {
        type: String,
        default: '确定'
    }
};
customElements.define('orui-cascader-picker', CascaderPicker);
