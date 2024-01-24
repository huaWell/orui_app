import { ORUI, ORUIElement } from "../base/index.js";
export class Divider extends ORUIElement {
    init() {
        this.import_css('/components/divider/index.css');
        const divider = (ORUI.createElement("div", null));
        const content = (ORUI.createElement("div", { class: "orui-divider-content" }));
        const slot = (ORUI.createElement("slot", null));
        content.appendChild(slot);
        divider['content'] = content;
        divider.appendChild(content);
        this.divider = divider;
        this.shadowRoot.appendChild(divider);
    }
    render() {
        this.divider.className = 'orui-divider';
        const direction_className = `orui-divider-${this.direction}`;
        if (!this.divider.classList.contains(direction_className)) {
            this.divider.classList.add(direction_className);
        }
        if (this.direction == 'vertical') {
            this.style.width = 'auto';
        }
        else {
            this.style.width = '100%';
        }
        const content_direction_className = `orui-divider-${this.content_direction}`;
        if (!this.divider.classList.contains(content_direction_className)) {
            this.divider.classList.add(content_direction_className);
        }
        if (this.no_content) {
            this.divider['content'].style.padding = '0';
        }
        else if (this.direction !== 'vertical') {
            this.divider['content'].style.padding = "0 1rem";
        }
    }
}
Divider.properties = {
    content_direction: {
        type: ["left", "center", "right"],
        default: "center"
    },
    custom_style: {
        type: String,
        default: ""
    },
    direction: {
        type: ["horizontal", "vertical"],
        default: "horizontal"
    },
    no_content: {
        type: Boolean,
        default: false
    }
};
customElements.define('orui-divider', Divider);
