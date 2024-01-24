var _a;
import { formatterTime, get_control } from "../utils/index.js";
import { ORUI, ORUIElement } from "../base/index.js";
export class DatePicker extends ORUIElement {
    init() {
        const html = (ORUI.createElement("orui-row", null,
            ORUI.createElement("orui-popup", { show_operation_bar: this.show_operation_bar, close_on_mask_click: this.close_on_mask_click },
                ORUI.createElement("orui-button", { ui_name: "date_picker_close", text: this.cancel_text, type: "none", color: "primary", slot: "operation_bar_left" }),
                ORUI.createElement("orui-button", { ui_name: "date_picker_confirm", text: this.confirm_text, type: "none", color: "primary", slot: "operation_bar_right" }),
                ORUI.createElement("orui-row", { grow: '0' },
                    ORUI.createElement("orui-divider", { no_content: 'true' })),
                ORUI.createElement("orui-row", null,
                    ORUI.createElement("orui-date-picker-view", null)))));
        this.date_picker_view = html.querySelector('orui-date-picker-view ');
        this.date_picker_popup = html.querySelector('orui-popup');
        this.date_picker_close = get_control("date_picker_close", html);
        this.date_picker_confirm = get_control("date_picker_confirm", html);
        this.shadowRoot.appendChild(html);
        this.init_event();
    }
    init_event() {
        this.date_picker_view.addEventListener('change', (ev) => {
            const event = new CustomEvent('change', {
                detail: ev.detail
            });
            this.dispatchEvent(event);
        });
        this.date_picker_close.addEventListener('click', (ev) => {
            const event = new CustomEvent('cancel', {
                detail: {
                    target: this
                }
            });
            this.dispatchEvent(event);
        });
        this.date_picker_confirm.addEventListener('click', () => {
            const event = new CustomEvent('confirm', {
                detail: {
                    target: this,
                    data: this.data,
                    value: this.value
                }
            });
            this.dispatchEvent(event);
        });
        this.date_picker_popup.addEventListener('close', () => {
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
            this.date_picker_popup.visible = newValue;
            return;
        }
        super.update(name, oldValue, newValue);
    }
    render() {
        this.date_picker_view.set_ui({
            data: this.data,
            max: this.max,
            min: this.min,
            till_now: this.till_now,
            precision: this.precision,
            item_height: this.item_height,
            filter: this.filter,
            renderLabel: this.renderLabel
        });
    }
}
_a = DatePicker;
DatePicker.currentDate = new Date();
DatePicker.properties = {
    item_height: {
        type: Number,
        default: 34,
        get: function () {
            return this.date_picker_view.item_height;
        }
    },
    precision: {
        type: ['year', 'month', 'day', 'hour', 'minute', 'second', 'week', 'week-day'],
        default: 'day',
        get: function () {
            return this.date_picker_view.precision;
        }
    },
    till_now: {
        type: Boolean,
        default: false,
        get: function () {
            return this.date_picker_view.till_now;
        }
    },
    min: {
        type: String,
        default: (() => {
            const tenYearsAgo = new Date(_a.currentDate);
            tenYearsAgo.setFullYear(tenYearsAgo.getFullYear() - 10);
            return formatterTime(tenYearsAgo, 'YYYY-MM-DD HH:mm:ss');
        })(),
        get: function () {
            return this.date_picker_view.min;
        }
    },
    max: {
        type: String,
        default: (() => {
            const tenYearsAfter = new Date(_a.currentDate);
            tenYearsAfter.setFullYear(tenYearsAfter.getFullYear() + 10);
            return formatterTime(tenYearsAfter, 'YYYY-MM-DD HH:mm:ss');
        })(),
        get: function () {
            return this.date_picker_view.max;
        }
    },
    value: {
        type: String,
        default: "",
        get: function () {
            return this.date_picker_view.value;
        }
    },
    visible: {
        type: Boolean,
        default: false,
        get: function () {
            return this.date_picker_popup.visible;
        }
    },
    data: {
        type: Object,
        default: {},
        get: function () {
            return this.date_picker_view.data;
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
customElements.define('orui-date-picker', DatePicker);
