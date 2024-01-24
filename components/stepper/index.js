import { ORUIElement } from "../base/index.js";
import { addDecimalsWithPrecision } from "../utils/index.js";
export class Stepper extends ORUIElement {
    init() {
        this.left_icon_path = this.left_icon_path || '/components/images/minus.svg';
        this.right_icon_path = this.right_icon_path || '/components/images/add.svg';
        this.import_css('/components/stepper/index.css');
        this.create();
        this.deal_btn_status();
    }
    create() {
        const container = document.createElement('div');
        container.className = 'orui-stepper';
        const left_btn = document.createElement('button');
        left_btn.className = 'orui-button';
        this.left_btn = left_btn;
        this.create_icon(left_btn, '/components/images/minus.svg');
        const center_content = document.createElement('div');
        center_content.className = 'orui-stepper-input-container';
        this.create_input(center_content);
        const right_btn = document.createElement('button');
        this.right_btn = right_btn;
        this.create_icon(right_btn, '/components/images/add.svg');
        right_btn.className = 'orui-button';
        container.appendChild(left_btn);
        container.appendChild(center_content);
        container.appendChild(right_btn);
        this.container = container;
        this.shadowRoot.appendChild(container);
        this.init_events();
    }
    create_icon(container, path, color = 'var(--orui-color-primary)') {
        const span = document.createElement('span');
        const icon = document.createElement('orui-icon');
        icon['path'] = path;
        icon['color'] = color;
        span.appendChild(icon);
        container['icon'] = icon;
        container.appendChild(span);
    }
    create_input(container) {
        const input_container = document.createElement('div');
        input_container.className = 'orui-stepper-input';
        const input = document.createElement('input');
        this.input = input;
        input.value = addDecimalsWithPrecision(this.value.toString(), '0', this.digits);
        this.set_value(addDecimalsWithPrecision(this.value.toString(), '0', this.digits));
        input.className = 'orui-stepper-input-element';
        input_container.appendChild(input);
        container.appendChild(input_container);
    }
    init_events() {
        this.left_btn.onclick = (ev) => {
            const num2 = this.digits > 0 ? (Number(-this.step).toFixed(this.digits)).toString() : (-this.step).toString();
            this.set_value(addDecimalsWithPrecision(this.input.value, num2, this.digits));
            this.deal_btn_status();
            this.input.value = this.value.toString();
            const event = new CustomEvent('decrease', {
                detail: {
                    value: this.value
                }
            });
            this.dispatchEvent(event);
        };
        this.right_btn.onclick = (ev) => {
            this.set_value(addDecimalsWithPrecision(this.input.value, this.step.toString(), this.digits));
            this.deal_btn_status();
            this.input.value = this.value.toString();
            const event = new CustomEvent('increase', {
                detail: {
                    value: this.value
                }
            });
            this.dispatchEvent(event);
        };
        this.input.onchange = (ev) => {
            this.set_value(addDecimalsWithPrecision(this.input.value, '0', this.digits));
            this.deal_btn_status();
            const event = new CustomEvent('change', {
                detail: {
                    value: this.value
                }
            });
            this.dispatchEvent(event);
        };
        this.input.onblur = (ev) => {
            // this.set_value(addDecimalsWithPrecision(this.input.value,'0',this.digits))
            this.deal_btn_status();
            const event = new CustomEvent('blur', {
                detail: {
                    value: this.value
                }
            });
            this.dispatchEvent(event);
        };
        this.input.onfocus = (ev) => {
            this.deal_btn_status();
            const event = new CustomEvent('focus', {
                detail: {
                    value: this.value
                }
            });
            this.dispatchEvent(event);
        };
    }
    deal_btn_status() {
        if (this.min != undefined && this.value <= this.min) {
            this.set_value(addDecimalsWithPrecision(this.min.toString(), '0', this.digits));
            this.set_btn_disabled(this.left_btn, true);
            this.set_btn_disabled(this.right_btn, false);
        }
        else if (this.max != undefined && this.value >= this.max) {
            this.set_value(addDecimalsWithPrecision(this.max.toString(), '0', this.digits));
            this.set_btn_disabled(this.left_btn, false);
            this.set_btn_disabled(this.right_btn, true);
        }
        else {
            this.set_btn_disabled(this.left_btn, false);
            this.set_btn_disabled(this.right_btn, false);
        }
    }
    set_btn_disabled(btn, disabled = true) {
        if (disabled) {
            btn.classList.add('orui-stepper-disabled');
            btn['icon'].color = 'var(--orui-color-weak)';
        }
        else {
            btn.classList.remove('orui-stepper-disabled');
            if (btn['icon'].color != 'var(--orui-color-primary)') {
                btn['icon'].color = 'var(--orui-color-primary)';
            }
        }
        btn['disabled'] = disabled;
    }
    set_value(value) {
        if (this.allow_empty && this.input.value == "") {
            this.value = "";
        }
        else {
            this.value = value;
            this.input.value = this.value;
        }
    }
    get_data() {
        return this.value;
    }
    update(name, oldValue, newValue) {
        if (name == 'value') {
            this.value = this.allow_empty && newValue == "" ? "" : addDecimalsWithPrecision(newValue, '0', this.digits);
            this.input.value = this.value;
        }
        else {
            super.update(name, oldValue, newValue);
        }
    }
    render() {
        if (this.disabled) {
            this.container.classList.add('orui-stepper-disabled');
            this.left_btn['icon'].color = 'var(--orui-color-weak)';
            this.right_btn['icon'].color = 'var(--orui-color-weak)';
        }
        this.deal_btn_status();
    }
}
Stepper.properties = {
    value: {
        type: String,
        default: '0',
    },
    step: {
        type: String,
        default: '1'
    },
    min: {
        type: Number,
        default: -Infinity
    },
    max: {
        type: Number,
        default: Infinity
    },
    digits: {
        type: Number,
        default: -1
    },
    disabled: {
        type: Boolean,
        default: false
    },
    allow_empty: {
        type: Boolean,
        default: false
    }
};
customElements.define('orui-stepper', Stepper);
