import { ORUIElement, ORUI } from "../base/index.js";
export class NavBar extends ORUIElement {
    init() {
        const html = (ORUI.createElement("div", { class: "orui-nav-bar" },
            ORUI.createElement("div", { class: "orui-nav-bar-left" },
                ORUI.createElement("slot", { name: "left" })),
            ORUI.createElement("div", { class: "orui-nav-bar-center" },
                ORUI.createElement("slot", { name: "center" })),
            ORUI.createElement("div", { class: "orui-nav-bar-right" },
                ORUI.createElement("slot", { name: "right" }))));
        this.shadowRoot.appendChild(html);
        this.nav_bar_left = this.shadowRoot.querySelector('.orui-nav-bar-left');
        this.nav_bar_center = this.shadowRoot.querySelector('.orui-nav-bar-center');
        this.nav_bar_right = this.shadowRoot.querySelector('.nav_bar_right');
        this.import_css('/components/navBar/index.css');
    }
    render() {
        let left_back = this.left_back;
        if (!left_back) {
            const left_slot = this.nav_bar_left.querySelector('slot');
            left_back = (ORUI.createElement("div", { class: 'orui-nav-bar-back', onClick: this.left_back_event.bind(this) }));
            this.left_back = left_back;
            this.nav_bar_left.insertBefore(left_back, left_slot);
        }
        if (this.custom_style) {
            this.style.cssText = this.custom_style;
        }
        if (this.show_back_arrow) {
            if (!left_back['left_icon']) {
                const left_icon_container = (ORUI.createElement("span", { class: 'orui-left-back-arrow' }));
                const left_icon = (ORUI.createElement("orui-icon", null));
                left_back['left_icon'] = left_icon;
                left_back['left_icon_container'] = left_icon_container;
                left_icon_container.appendChild(left_icon);
                left_back.insertBefore(left_icon_container, left_back.firstChild);
            }
            left_back['left_icon'].set_ui({
                path: this.back_arrow,
                color: 'var(--orui-color-text)',
                width: 24 / 16 + 'rem',
                height: 24 / 16 + 'rem'
            });
        }
        else if (!this.show_back_arrow && left_back['left_icon']) {
            left_back.removeChild(left_back['left_icon_container']);
            left_back['left_icon'] = null;
        }
        if (this.back) {
            if (!left_back['left_back_text']) {
                const left_back_text = (ORUI.createElement("span", { class: 'orui-left-back' }));
                left_back['left_back_text'] = left_back_text;
                left_back.appendChild(left_back_text);
            }
            left_back['left_back_text'].innerHTML = this.back;
        }
        if (this.title) {
            if (!this.nav_bar_center['title_ctr']) {
                const title = (ORUI.createElement("div", { class: 'orui-nav-bar-title' }));
                this.nav_bar_center['title_ctr'] = title;
                this.nav_bar_center.insertBefore(title, this.nav_bar_center.firstChild);
            }
            this.nav_bar_center['title_ctr'].innerHTML = this.title;
        }
    }
    left_back_event(ev) {
        const event = new CustomEvent('back', {
            detail: {
                event: ev
            }
        });
        this.dispatchEvent(event);
    }
}
NavBar.properties = {
    back: {
        type: String,
        default: ""
    },
    back_arrow: {
        type: String,
        default: "/components/images/left.svg"
    },
    show_back_arrow: {
        type: Boolean,
        default: true
    },
    title: {
        type: String,
        default: ""
    },
};
customElements.define('orui-nav-bar', NavBar);
