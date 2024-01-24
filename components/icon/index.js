import { ORUI, ORUIElement } from "../base/index.js";
export class Icon extends ORUIElement {
    constructor() {
        super();
    }
    init() {
        this.import_css('/components/icon/index.css');
        const image = (ORUI.createElement("img", { class: 'orui-icon-image' }));
        this.image = image;
        this.shadowRoot.appendChild(image);
        this.init_events();
    }
    update(name, oldValue, newValue) {
        if (name == 'path') {
            this.innerHTML = "";
            this.init();
        }
        super.update(name, oldValue, newValue);
    }
    render() {
        if (this.image['path'] != this.path && this.is_init) {
            this.shadowRoot.innerHTML = "";
            this.init();
        }
        this.image.src = this.path;
        this.image['path'] = this.path;
        if (this.width) {
            this.image.style.width = this.width;
        }
        if (this.height) {
            this.image.style.height = this.height;
        }
        if (!this.icon_visible) {
            this.image.style.display = 'none';
        }
        else {
            this.image.style.display = 'block';
        }
        if (this.color) {
            this.style.setProperty('--icon-color', this.color);
        }
        this.image.onload = async function (ev) {
            // @ts-ignore
            window.SVGInject(this);
        };
    }
    init_events() {
        this.image.onclick = (ev) => {
            ev.preventDefault();
            ev.stopPropagation();
            const event = new CustomEvent('click', {
                detail: {
                    target: this.image
                }
            });
            this.dispatchEvent(event);
        };
    }
}
Icon.properties = {
    path: {
        type: String,
        default: ""
    },
    width: {
        type: String,
        default: "1rem"
    },
    height: {
        type: String,
        default: "1rem"
    },
    icon_visible: {
        type: Boolean,
        default: true
    },
    color: {
        type: String,
        default: ""
    }
};
customElements.define('orui-icon', Icon);
