import { ORUI, ORUIElement } from "../base/index.js";
export class TabBar extends ORUIElement {
    constructor() {
        super(...arguments);
        this.items = [];
    }
    init() {
        this.import_css('/components/tabBar/index.css');
        this.create();
    }
    create() {
        const tab_bar_wrap = ORUI.createElement("div", { class: 'orui-tab-bar-wrap' });
        this.wrap = tab_bar_wrap;
        this.shadowRoot.appendChild(tab_bar_wrap);
    }
    create_item() {
        this.wrap.innerHTML = "";
        this.data.forEach((_v, index) => {
            const item = ORUI.createElement("div", { class: 'orui-tab-bar-item' });
            item['name'] = _v.key;
            const icon_container = ORUI.createElement("div", { class: 'orui-icon-wrapper' });
            if (_v.icon) {
                const icon = ORUI.createElement("orui-icon", null);
                icon.set_ui({
                    path: _v.icon,
                    color: this.default_color,
                    width: 24 / 16 + 'rem',
                    height: 24 / 16 + 'rem'
                });
                item['icon'] = icon;
                icon_container.appendChild(icon);
            }
            const text = ORUI.createElement("div", { class: 'orui-icon-text' });
            if (_v.icon) {
                text.classList.add('orui-icon-text-icon');
            }
            if (_v.title) {
                text.innerHTML = _v.title;
            }
            item.appendChild(icon_container);
            item.appendChild(text);
            if ((index == 0 && !this.value) || this.value == _v.key) {
                this.set_tab_bar_active(null, item);
            }
            item.onclick = (ev) => {
                ev.stopImmediatePropagation();
                const event = new CustomEvent('click', {
                    detail: {
                        data: _v,
                        item: item
                    }
                });
                this.dispatchEvent(event);
                this.set_tab_bar_active(ev, item);
            };
            item['data'] = _v;
            this.items.push(item);
            this.wrap.appendChild(item);
        });
    }
    set_tab_bar_active(ev, item) {
        if (this.active_item == item) {
            return;
        }
        if (this.active_item) {
            this.active_item['icon'] && (this.active_item['icon'].color = this.default_color);
            this.active_item.classList.remove('orui-tab-bar-item-active');
        }
        item.classList.add('orui-tab-bar-item-active');
        this.active_item = item;
        item['icon'] && (item['icon'].color = this.active_color);
        const event = new CustomEvent('change', {
            detail: {
                data: item['data']
            }
        });
        this.dispatchEvent(event);
    }
    update(name, oldValue, newValue) {
        if (name == 'value') {
            const item = this.find_item_by_name(newValue);
            item && this.set_tab_bar_active(null, item);
            return;
        }
        super.update(name, oldValue, newValue);
    }
    render() {
        if (this.custom_style) {
            this.style.cssText = this.custom_style;
        }
        this.create_item();
    }
    find_item_by_name(name) {
        return this.items.find((item) => item['name'] == name);
    }
}
TabBar.properties = {
    data: {
        type: Array,
        default: []
    },
    value: {
        type: String,
        default: "",
        get: function () {
            return this.active_item && this.active_item['name'];
        }
    },
    default_color: {
        type: String,
        default: 'var(--orui-color-text-secondary)'
    },
    active_color: {
        type: String,
        default: 'var(--orui-color-primary)'
    },
    custom_style: {
        type: String,
        default: ""
    }
};
customElements.define('orui-tab-bar', TabBar);
