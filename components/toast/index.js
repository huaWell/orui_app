import { ORUI, ORUIElement } from "../base/index.js";
export class Toast extends ORUIElement {
    constructor() {
        super();
        this.position_value = {
            'top': '20%',
            'center': '50%',
            'bottom': '80%'
        };
        const toast = document.body.querySelector('orui-toast');
        if (toast) {
            document.body.removeChild(toast);
        }
        else {
            document.body.appendChild(this);
        }
    }
    init() {
        const html = (ORUI.createElement(ORUI.createFragment, null,
            ORUI.createElement("orui-mask", { visible: "false" }),
            ORUI.createElement("div", { class: "orui-toast-content" },
                ORUI.createElement("div", { class: "orui-toast-main" },
                    ORUI.createElement("div", { style: "display: none", class: "orui-toast-icon" }),
                    ORUI.createElement("div", { class: "orui-auto-center" },
                        ORUI.createElement("div", { class: "orui-center-content" }))))));
        const mask = html.querySelector('orui-mask');
        this.mask = mask;
        this.text = html.querySelector('.orui-center-content');
        this._content = html.querySelector('.orui-toast-main');
        this._content['_parent'] = html.querySelector('.orui-toast-content');
        this.icon = html.querySelector('.orui-toast-icon');
        this.import_css('/components/toast/index.css');
        this.shadowRoot.appendChild(html);
    }
    render() {
        this.text.innerHTML = this.content;
        this._content['_parent'].style.top = this.position_value[this.position];
        if (this.icon_path) {
            if (!this.icon['_icon']) {
                const frag = ORUI.createElement("orui-icon", { className: "orui-toast-icon" });
                this.icon['_icon'] = frag;
            }
            this.icon.style.display = 'inline-block';
            this._content.classList.add('orui-content-main-icon');
            if (this.icon['_icon']['path'] != this.icon_path) {
                this.icon.appendChild(this.icon['_icon']);
                this.icon['_icon'].set_ui({
                    path: this.icon_path,
                    width: '3rem',
                    height: '3rem',
                    color: ' var(--orui-color-white)'
                });
            }
            else if (this.icon.innerHTML == "") {
                this.icon.appendChild(this.icon['_icon']);
            }
        }
        else if (this.custom_icon) {
            // this.icon.innerHTML = ""
            this.icon.style.display = 'inline-block';
            this.icon.innerHTML = this.custom_icon;
        }
        else {
            this.icon.innerHTML = "";
            this.icon.style.display = 'none';
        }
        this.style.display = this.visible ? 'block' : 'none';
        this.style.pointerEvents = this.clickable ? 'none' : 'all';
    }
    close() {
        this.style.display = 'none';
        this.visible = false;
        if (this.afterClose) {
            this.afterClose(this);
        }
    }
    reset_params() {
        const entries = Object.entries(Toast.properties);
        for (const [key, value] of entries) {
            this[key] = value['default'];
        }
        this._content.className = "orui-toast-main";
        if (this.timeoutID) {
            clearTimeout(this.timeoutID);
            this.timeoutID = null;
        }
        this.afterClose = this._params?.after_close;
    }
    show(params) {
        if (JSON.stringify(this._params) != JSON.stringify(params)) {
            this._params = params;
            this.reset_params();
            this.set_ui(params);
        }
        else if (params.visible) {
            this.visible = true;
            this.style.display = 'inline-block';
        }
        if (this.timeoutID) {
            clearTimeout(this.timeoutID);
            this.timeoutID = null;
        }
        if (this.duration > 0) {
            this.timeoutID = setTimeout(() => {
                this.close();
                this.timeoutID = null;
            }, this.duration);
        }
    }
}
Toast.properties = {
    body_style: {
        type: String,
        default: "",
        is_update: false
    },
    position: {
        type: ['top', 'center', 'bottom'],
        default: 'center',
        is_update: false
    },
    icon_path: {
        type: String,
        default: "",
        is_update: false
    },
    content: {
        type: String,
        default: "",
        is_update: false
    },
    visible: {
        type: Boolean,
        default: false,
        is_update: false
    },
    clickable: {
        type: Boolean,
        default: true,
        is_update: false
    },
    duration: {
        type: Number,
        default: 2000,
        is_update: false
    },
    custom_icon: {
        type: String,
        default: ''
    }
};
customElements.define('orui-toast', Toast);
export const toast = new Toast();
