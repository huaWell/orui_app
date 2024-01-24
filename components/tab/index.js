import { ORUIElement, ORUI } from "../base/index.js";
export class Tabs extends ORUIElement {
    constructor() {
        super();
        this.wraps = [];
    }
    init() {
        this.import_css('/components/tab/index.css');
        const event = new CustomEvent('init');
        this.dispatchEvent(event);
        this.create();
    }
    create() {
        const { data } = this.traverse_children();
        const template = (ORUI.createElement(ORUI.createFragment, null,
            ORUI.createElement("div", { class: 'orui-tabs' },
                ORUI.createElement("div", { class: 'orui-tabs-header' },
                    ORUI.createElement("div", { class: 'orui-tabs-list' },
                        ORUI.createElement("div", { class: 'orui-tabs-line', style: `width:${this.underline_width}` }),
                        data.map((_item) => {
                            const item = (ORUI.createElement("div", { class: 'orui-tabs-wrapper', key: _item.key, onClick: this.tab_item_click.bind(this) },
                                ORUI.createElement("div", { class: 'orui-tabs-tab' }, _item.title)));
                            return item;
                        })),
                    ORUI.createElement("div", { class: 'orui-tabs-content' },
                        ORUI.createElement("slot", null))))));
        this.shadowRoot.appendChild(template);
        this.wraps = this.shadowRoot.querySelectorAll('.orui-tabs-wrapper');
        this._active_underline = this.shadowRoot.querySelector('.orui-tabs-line');
        this.head = this.shadowRoot.querySelector('.orui-tabs-list');
    }
    set_content(active_key) {
        if (this.wraps.length > 0) {
            const active_item = [].find.call(this.wraps, (item) => item['active'] == 1);
            const item_index = this.get_key_index(active_key);
            if (active_item != this.wraps[item_index]) {
                if (active_item) {
                    this.set_title_status(false, active_item);
                }
                this.set_underline_style(this.wraps[item_index]);
                this.set_title_status(true, this.wraps[item_index]);
                this.set_head_position(this.wraps[item_index], item_index);
                this.swap_content(active_key);
            }
        }
    }
    swap_content(key) {
        this.items.forEach((_item) => {
            _item.style.direction = this.direction == 'left' ? 'ltr' : 'rtl';
            if (_item['key'] == key && _item.style.display != 'block') {
                _item.style.display = 'block';
            }
            else {
                _item.style.display = 'none';
            }
        });
    }
    get_key_index(active_key) {
        for (let i = 0; i < this.wraps.length; i++) {
            if (this.wraps[i]['key'] == active_key) {
                return i;
            }
        }
    }
    set_head_position(active_item, index) {
        if (this.head.scrollWidth <= this.offsetWidth) {
            return;
        }
        let _left = active_item.offsetLeft - this.clientWidth / 2;
        if (_left <= 0) {
            _left = 0;
        }
        else {
            _left += active_item.offsetWidth / 2;
        }
        if (_left + active_item.offsetWidth > this.clientWidth && index == this.wraps.length - 1) {
            _left = active_item.offsetLeft - this.clientWidth + active_item.offsetWidth;
        }
        if (_left < 0) {
            _left = 0;
        }
        this.head.style.left = -_left + 'px';
    }
    set_underline_style(active_item) {
        const width = this.underline_width ? this.underline_width : (active_item.clientWidth - 24) / 16 + 'rem';
        this._active_underline.style.width = width;
        const _width = this.underline_width ? this._active_underline.clientWidth + 24 : active_item.clientWidth;
        const _left = (active_item.offsetLeft + 12 + ((active_item.clientWidth - _width) / 2)) / 16 + 'rem';
        this._active_underline.style.left = _left;
    }
    tab_item_click(ev) {
        const key = ev.currentTarget.key;
        const oldIndex = this.get_key_index(this.active_key);
        const event = new CustomEvent('click', {
            detail: {
                current: this.wraps[this.get_key_index(key)],
            }
        });
        this.dispatchEvent(event);
        if (this.active_key == key) {
            return;
        }
        if (this.active_key) {
            this.set_title_status(false, this.wraps[oldIndex]);
        }
        this.active_key = key;
        const change_event = new CustomEvent('change', {
            detail: {
                org_item: this.wraps[oldIndex],
                cur_item: this.wraps[this.get_key_index(key)],
            }
        });
        this.dispatchEvent(change_event);
    }
    set_title_status(status, item) {
        if (status) {
            item['active'] = 1;
            if (!item.classList.contains('orui-tabs-title-active')) {
                item.classList.add('orui-tabs-title-active');
            }
        }
        else {
            item['active'] = 0;
            if (item.classList.contains('orui-tabs-title-active')) {
                item.classList.remove('orui-tabs-title-active');
            }
        }
    }
    traverse_children() {
        const tabItems = this.querySelectorAll('orui-tab-item');
        this.items = tabItems;
        const _data = [];
        for (let i = 0; i < tabItems.length; i++) {
            tabItems[i]['key'] = tabItems[i].getAttribute('key');
            const obj = { title: tabItems[i]['title'], key: tabItems[i]['key'] };
            if (!this.active_key && i == 0) {
                this.active_key = tabItems[0]['key'];
            }
            if (tabItems[i]['key'] != this.active_key) {
                tabItems[i].style.display = 'none';
            }
            tabItems[i]['data'] = obj;
            _data.push(obj);
        }
        return { data: _data, items: tabItems };
    }
    render() {
        if (this.custom_style) {
            this.style.cssText = this.custom_style;
        }
        this.set_content(this.active_key);
    }
}
Tabs.properties = {
    underline_width: {
        type: String,
        default: ""
    },
    active_key: {
        type: String,
        default: "",
    },
    direction: {
        type: ['left', 'right'],
        default: 'left'
    },
    custom_style: {
        type: String,
        default: ""
    }
};
customElements.define("orui-tabs", Tabs);
