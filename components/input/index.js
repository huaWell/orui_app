import { ORUI, ORUIElement } from "../base/index.js";
export class Input extends ORUIElement {
    constructor() {
        super();
    }
    init() {
    }
    create() {
        const input_container = (ORUI.createElement("div", { class: 'orui-input-container' }));
        this.import_css('/components/input/index.css');
        const input_value = (ORUI.createElement("div", { class: 'orui-input-value' }));
        const input_value_inner = (ORUI.createElement("div", { class: 'orui-input-value-inner' }));
        const input_box = (ORUI.createElement("div", { class: 'orui-input-box' }));
        if (!this.is_textarea) {
            const input = (ORUI.createElement("input", { class: 'orui-input' }));
            this.input = input;
            input_box.appendChild(input);
        }
        else {
            const input = (ORUI.createElement("textarea", { class: 'orui-teatarea' }));
            if (this.rows) {
                input.rows = this.rows;
            }
            this.input = input;
            input_box.appendChild(input);
        }
        if (this.show_count) {
            this.create_limit_box(input_box);
        }
        if (this.clearable && !this.is_textarea) {
            const clear_icon = this.create_icon(input_box, this.clear_icon_path);
            clear_icon['icon_visible'] = false;
            this.clear = clear_icon;
        }
        if (this.customize_icon_path) {
            this.customize_icon = this.create_icon(input_box, this.customize_icon_path);
        }
        if (this.type == 'password') {
            const password_invisible_icon = this.create_icon(input_box, this.password_icon_invisible_path);
            const password_visible_icon = (ORUI.createElement("orui-icon", { path: this.password_icon_visible_path, style: 'display:none' }));
            this.password_icon_container = password_invisible_icon['icon_container'];
            this.password_icon_container['password_icon_visible'] = password_visible_icon;
            this.password_icon_container['password_icon_invisible'] = password_invisible_icon;
            this.password_icon_container.appendChild(password_visible_icon);
        }
        if (this.disabled) {
            this.input.disabled = this.disabled;
            input_container.classList.add('orui-input-disabled');
        }
        if (this.readonly) {
            input_container.classList.add('orui-input-readonly');
            this.input.disabled = this.readonly;
        }
        input_value_inner.appendChild(input_box);
        input_value.appendChild(input_value_inner);
        input_container.appendChild(input_value);
        this.input_container = input_container;
        this.shadowRoot.appendChild(input_container);
    }
    create_limit_box(container) {
        let padding = Input.INPUT_RIGHT_PADDING.normal;
        const limit_box = this.create_element('div');
        limit_box.className = 'orui-limit-box';
        const value_number = this.create_element('span');
        value_number.innerHTML = this.value.length.toString();
        limit_box['value_number'] = value_number;
        limit_box.appendChild(value_number);
        if (this.max_length) {
            const max_length = document.createElement('span');
            max_length.innerHTML = '/' + this.max_length;
            this.input.maxLength = parseInt(this.max_length);
            limit_box.appendChild(max_length);
            padding = Input.INPUT_RIGHT_PADDING.large;
        }
        this.limit_box = limit_box;
        this.input.style.paddingRight = padding;
        container.appendChild(this.limit_box);
    }
    create_icon(container, path) {
        const icon_container = (ORUI.createElement("div", { class: 'orui-icon-container' },
            ORUI.createElement("orui-icon", { class: "orui-input-icon", path: path })));
        const icon = icon_container.querySelector('orui-icon');
        icon['icon_container'] = icon_container;
        container.appendChild(icon_container);
        return icon;
    }
    create_element(tagName, className) {
        const tag = document.createElement(tagName);
        if (className) {
            tag.className = className;
        }
        return tag;
    }
    render() {
        this.shadowRoot.innerHTML = "";
        this.create();
        this.bind_events();
        this.set_input_attr();
    }
    set_input_attr() {
        this.input.placeholder = this.placeholder;
        this.type && !this.is_textarea && (this.input.type = this.type);
        this.input.value = this.value;
        this.input.style.textAlign = this.align;
    }
    bind_events() {
        const _this = this;
        this.input_container.onclick = (ev) => {
            ev.stopPropagation();
            ev.preventDefault();
            const event = new CustomEvent('click', {
                detail: {
                    value: this.input.value,
                    input: this.input
                }
            });
            _this.dispatchEvent(event);
        };
        this.input.onfocus = (ev) => {
            ev.stopPropagation();
            ev.preventDefault();
            this.update_limit_number();
            this.update_clear_visible();
            const event = new CustomEvent('focus', {
                detail: {
                    value: this.input.value,
                    input: this.input
                }
            });
            this.dispatchEvent(event);
        };
        this.input.oninput = () => {
            this.update_limit_number();
            this.update_clear_visible();
            const event = new CustomEvent('input', {
                detail: {
                    value: this.input.value
                }
            });
            this.dispatchEvent(event);
        };
        this.input.onchange = () => {
            const event = new CustomEvent('change', {
                detail: {
                    value: this.input.value
                }
            });
            this.dispatchEvent(event);
        };
        this.input.onblur = () => {
            const event = new CustomEvent('blur', {
                detail: {
                    value: this.input.value
                }
            });
            this.dispatchEvent(event);
        };
        if (this.password_icon_container) {
            this.password_icon_container.onclick = () => {
                this.change_password_type();
            };
        }
        if (this.clear) {
            this.clear.addEventListener('click', () => {
                this.input.value = "";
                if (this.limit_box) {
                    this.limit_box['value_number'].innerHTML = '0';
                }
                this.clear['icon_visible'] = false;
            });
        }
    }
    update_limit_number() {
        if (this.show_count) {
            if (this.input.value.length > parseInt(this.max_length)) {
                return;
            }
            this.limit_box['value_number'].innerHTML = this.input.value.length;
        }
    }
    update_clear_visible() {
        if (this.clearable && !this.is_textarea) {
            if (this.input.value != "") {
                this.clear['icon_visible'] = true;
            }
            else {
                this.clear['icon_visible'] = false;
            }
        }
    }
    change_password_type() {
        this.input.type = this.input.type == 'password' ? 'text' : 'password';
        const container = this.password_icon_container;
        container['password_icon_visible'].style.display = this.input.type == 'password' ? 'none' : 'flex';
        container['password_icon_invisible'].style.display = this.input.type == 'password' ? 'flex' : 'none';
    }
    update(name, orgValue, newValue) {
        if (name == 'value') {
            this.input.value = this.value;
            this.update_limit_number();
            return;
        }
        else {
            super.update(name, orgValue, newValue);
        }
    }
}
Input.properties = {
    value: {
        type: String,
        default: "",
        get: function () {
            if (this.input) {
                return this.input.value;
            }
            return "";
        }
    },
    type: {
        type: String,
        default: "text"
    },
    disabled: {
        type: Boolean,
        default: false
    },
    readonly: {
        type: Boolean,
        default: false
    },
    align: {
        type: ["left", "center", "right"],
        default: "left"
    },
    customize_icon_path: {
        type: String,
        default: ""
    },
    clear_icon_path: {
        type: String,
        default: '/components/images/close_circle.svg'
    },
    password_icon_visible_path: {
        type: String,
        default: '/components/images/eye.svg'
    },
    password_icon_invisible_path: {
        type: String,
        default: '/components/images/eye_invisible.svg'
    },
    show_count: {
        type: Boolean,
        default: false
    },
    clearable: {
        type: Boolean,
        default: true
    },
    is_textarea: {
        type: Boolean,
        default: false
    },
    placeholder: {
        type: String,
        default: '请输入'
    }
};
Input.INPUT_RIGHT_PADDING = {
    normal: 'var(--padding-normal)',
    large: 'var(--padding-large)',
};
customElements.define("orui-input", Input);
