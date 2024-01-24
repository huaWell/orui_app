import { ORUIElement, ORUI } from "../base/index.js";
export class FormItem extends ORUIElement {
    get _editor() {
        return this.children[0];
    }
    ;
    init() {
        const html = (ORUI.createElement("orui-space", { style: "width: 100%;gap: var(--gap)" },
            ORUI.createElement("div", { class: "field" },
                ORUI.createElement("div", { class: "nullable" }, "*"),
                ORUI.createElement("div", { class: "label" })),
            ORUI.createElement("div", { class: "value" },
                ORUI.createElement("div", { class: "editor" },
                    ORUI.createElement("slot", null)),
                ORUI.createElement("div", { class: "message" }))));
        this.import_css('/components/formItem/index.css');
        this.shadowRoot.append(html);
        this.space = this.shadowRoot.querySelector('orui-space');
        this.label = this.shadowRoot.querySelector('.label');
        this.nullable_container = this.shadowRoot.querySelector('.nullable');
        this._message = this.shadowRoot.querySelector('.message');
        this.init_events();
    }
    render() {
        this.render_nullable();
        this.render_layout();
        this.render_visible();
        this.render_display_name();
        this.render_editor();
        this.render_value();
        this.render_format();
        this.render_readonly();
    }
    render_editor() {
        if (this.editor) {
            this.innerHTML = '';
            const editor = document.createElement(this.editor);
            this.append(editor);
            this.init_editor_events();
        }
    }
    render_value() {
        if (this._editor) {
            this._editor['value'] = this.value;
        }
    }
    render_display_name() {
        this.label.innerHTML = this.display_name;
    }
    render_visible() {
        this.style.display = this.is_visible ? '' : 'none';
    }
    render_format() {
        if (this._editor) {
            this._editor.set_ui(this.format);
        }
    }
    render_readonly() {
        if (this._editor) {
            this._editor['disabled'] = this.is_readonly;
        }
        if (this.is_readonly) {
            this.style.setProperty('--font-color', 'var(--orui-color-weak)');
            this.style.cursor = 'not-allowed';
        }
        else {
            this.style.setProperty('--font-color', '');
            this.style.cursor = '';
        }
    }
    render_layout() {
        this.space.direction = this.layout;
        if (this.layout == 'vertical') {
            this.space.align = 'start';
        }
        else {
            this.space.align = 'center';
        }
    }
    render_nullable() {
        this.nullable_container.style.display = this.is_nullable ? 'none' : '';
    }
    render_message() {
        this._message.innerHTML = this.message;
    }
    init_events() {
        this.init_editor_events();
    }
    update(name) {
        const handler = {
            editor: 'render_editor',
            value: 'render_value',
            display_name: 'render_display_name',
            is_readonly: 'render_readonly',
            is_visible: 'render_visible',
            layout: 'render_layout',
            is_nullable: 'render_nullable',
            format: 'render_format',
            message: 'render_message'
        };
        handler[name] && this[handler[name]]();
    }
    async _validate() {
        let message = '';
        //验证是否是必填项
        if (!this.is_nullable && !this.value) {
            message = `${this.display_name}不能为空`;
        }
        this.message = message;
        if (!message && this.validate) {
            try {
                const validate = this.validate.bind(this);
                await Promise.resolve(validate({
                    item: this,
                    name: this.name,
                    value: this.value
                }));
            }
            catch (e) {
                console.warn('验证失败');
            }
        }
        return !this.message;
    }
    init_editor_events() {
        this._editor?.addEventListener('change', async (e) => {
            //1.验证函数 当验证不通过时不会触发change
            if (!await this._validate())
                return;
            //2.触发自身的change方法
            const event = new CustomEvent('change', {
                detail: {
                    name: this.name,
                    value: this.value
                }
            });
            this.dispatchEvent(event);
        });
    }
}
FormItem.properties = {
    display_name: {
        type: String,
        default: ''
    },
    name: {
        type: String,
        default: ''
    },
    value: {
        type: Object,
        default: '',
        get() {
            return this._editor?.value;
        }
    },
    is_readonly: {
        type: Boolean,
        default: false
    },
    is_visible: {
        type: Boolean,
        default: true
    },
    is_nullable: {
        type: Boolean,
        default: true
    },
    editor: {
        type: String,
        default: ''
    },
    layout: {
        type: ['vertical', 'horizontal'],
        default: 'vertical'
    },
    format: {
        type: Object,
        default: {}
    },
    message: {
        type: String,
        default: ''
    }
};
customElements.define("orui-form-item", FormItem);
