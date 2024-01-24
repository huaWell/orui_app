import { ORUIElement, ORUI } from "../base/index.js";
export class Radio extends ORUIElement {
    constructor() {
        super();
        this.options_map = {};
    }
    init() {
        this.create();
    }
    /**
     * 初始化时创建各种容器
     */
    create() {
        this.import_css('/components/radio/index.css');
        const container = ORUI.createElement("div", { class: 'radio_container' });
        this.container = container;
        const group_container = ORUI.createElement("div", { class: 'radio_group_container' });
        this.group_container = group_container;
        this.container.appendChild(this.group_container);
    }
    /**
     * 渲染
     */
    render() {
        this.group_container.innerHTML = "";
        this.create_options(this.data);
        this.shadowRoot.appendChild(this.container);
    }
    /**
     * 创建单选列表
     */
    create_options(data) {
        this.options_map = {};
        if (data && data.length > 0) {
            data.forEach((option) => {
                const { name, display_name, disabled, icon } = option;
                const option_container = ORUI.createElement("div", { class: 'option_container' });
                if (this.size == 'small') {
                    option_container.classList.add('small');
                }
                else if (this.size == 'normal') {
                    option_container.classList.add('normal');
                }
                else {
                    option_container.classList.add('large');
                }
                const radio = ORUI.createElement("input", { class: 'radio' });
                let radio_btn;
                if (!icon) {
                    radio_btn = ORUI.createElement("span", null);
                }
                else {
                    radio_btn = ORUI.createElement("img", null);
                }
                radio_btn.className = 'radio_btn';
                const label = ORUI.createElement("div", { class: 'radio_label' });
                label.innerHTML = display_name;
                radio['name'] = name;
                radio.type = 'radio';
                radio_btn.addEventListener('click', (ev) => {
                    if (disabled) {
                        return;
                    }
                    this.handle_radio_checked(ev, radio);
                    const event = new CustomEvent('change', {
                        detail: {
                            target: this,
                            checked: radio.checked,
                            value: this.value
                        }
                    });
                    this.dispatchEvent(event);
                });
                this.options_map[name] = radio;
                if (disabled || this.disabled) {
                    option_container.classList.add('disabled');
                    radio.disabled = true;
                }
                option_container.appendChild(radio);
                option_container.appendChild(radio_btn);
                option_container.appendChild(label);
                this.group_container.appendChild(option_container);
            });
            this.load_value(this.value);
        }
    }
    /**
     * @param {Object} ev
     * @param {Object} radio
     * 单选框click回调事件
     */
    handle_radio_checked(ev, radio, checked) {
        if (!this.selectable) {
            this.clear_radio_checked(this.value, radio);
        }
        radio.checked = checked ? checked : !radio.checked;
    }
    /**
     * 清除单选框选中状态
     */
    clear_radio_checked(value, radio) {
        if (value && typeof value == 'string') {
            const checked_radio = this.options_map[value];
            checked_radio.checked = false;
        }
        else {
            for (const key in this.options_map) {
                const radio = this.options_map[key];
                if (value[key] != undefined) {
                    radio.checked = false;
                }
            }
        }
    }
    load_value(value) {
        if (value instanceof Object) {
            for (const key in this.options_map) {
                const radio = this.options_map[key];
                if (value[key] != undefined) {
                    radio.checked = value[key];
                }
                else {
                    radio.checked = false;
                }
            }
        }
        else if (!this.selectable) {
            this.options_map[value] && this.handle_radio_checked(this.value, this.options_map[value], true);
        }
    }
    add_option(data) {
        this.create_options(data);
    }
}
Radio.properties = {
    size: {
        type: ["small", "normal", "large"],
        default: "normal"
    },
    selectable: {
        type: Boolean,
        default: false,
        is_update: false
    },
    value: {
        type: Object,
        default: {},
        get: function () {
            if (this.selectable) {
                const res = {};
                for (const key in this.options_map) {
                    const radio = this.options_map[key];
                    res[key] = radio.checked;
                }
                return res;
            }
            else {
                for (const key in this.options_map) {
                    const radio = this.options_map[key];
                    if (radio.checked)
                        return radio.name;
                }
                return "";
            }
        }
    },
    data: {
        type: Array,
        default: [],
    },
    disabled: {
        type: Boolean,
        default: false
    }
};
customElements.define('orui-radio', Radio);
