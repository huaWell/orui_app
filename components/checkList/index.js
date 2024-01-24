import { ORUI, ORUIElement } from "../base/index.js";
export class CheckList extends ORUIElement {
    init() {
        this.import_css('/components/checkList/index.css');
        const html = (ORUI.createElement("div", { class: "orui-check-list-body" },
            ORUI.createElement("div", { class: "orui-list-body-inner" })));
        this._content = html.querySelector('.orui-list-body-inner');
        this.shadowRoot.appendChild(html);
    }
    render() {
        this._content.innerHTML = "";
        this._content['items'] = [];
        this.style.cssText = this.custom_style;
        this.data.forEach((_item) => {
            this.create_item(_item);
        });
        if (this.value.length > 0) {
            this.value.forEach((_v) => {
                const _item = this._content['items'].find((_it) => _it.name == _v);
                _item['active'] = true;
                // this.handle_check_list_status(_item)
            });
        }
    }
    create_item(_data) {
        const _item = ORUI.createElement("a", { class: 'orui-check-list-item' });
        const _text = ORUI.createElement("div", { class: 'orui-check-list-item-main' }, _data.content);
        _item.appendChild(_text);
        _item["name"] = _data.name;
        const _content_extra = ORUI.createElement("div", { class: 'orui-check-list-content-extra' });
        const _extra = ORUI.createElement("div", { class: 'orui-check-list-item-extra' });
        _extra.innerHTML = this.value.find((_v) => _v == _data.name) ? this.active_extra : this.extra;
        _content_extra.appendChild(_extra);
        _item['extra'] = _extra;
        _item.appendChild(_content_extra);
        _item.onclick = (ev) => {
            ev.stopPropagation();
            ev.preventDefault();
            const event = new CustomEvent('click', {
                detail: {
                    active: _item['active'],
                    value: this.value,
                    data: _item['data']
                }
            });
            this.dispatchEvent(event);
            this.handle_check_list_status(_item);
        };
        if (_data.readonly || this.readonly) {
            _item.classList.add('orui-check-list-item-readonly');
        }
        if (_data.disabled || this.disabled) {
            _item.classList.add('orui-check-list-item-disabled');
        }
        _item['data'] = _data;
        this._content['items'].push(_item);
        this._content.appendChild(_item);
    }
    handle_check_list_status(_item) {
        const checked_item = this._content['items'].find((_item) => _item.name == this.value[0]);
        if (!this.multiple && checked_item && checked_item != _item) {
            checked_item['extra'].innerHTML = this.extra;
            checked_item['active'] = false;
            checked_item.classList.remove('orui-check-list-active');
        }
        else if (!this.multiple && checked_item == _item && !this.clearable) {
            return;
        }
        _item['active'] = !_item['active'];
        if (_item['active']) {
            _item['extra'].innerHTML = this.active_extra;
            !_item.classList.contains('orui-check-list-active') && _item.classList.add('orui-check-list-active');
        }
        else {
            _item['extra'].innerHTML = this.extra;
            _item.classList.contains('orui-check-list-active') && _item.classList.remove('orui-check-list-active');
        }
        const event = new CustomEvent('change', {
            detail: {
                active: _item['active'],
                value: this.value,
                data: _item['data']
            }
        });
        this.dispatchEvent(event);
    }
}
CheckList.properties = {
    data: {
        type: Array,
        default: []
    },
    extra: {
        type: String,
        default: ''
    },
    active_extra: {
        type: String,
        default: '<orui-icon path="/components/images/check.svg" color="var(--orui-color-primary)"/>'
    },
    value: {
        type: Array,
        default: [],
        get: function () {
            const _value = [];
            this._content['items'].forEach((item) => {
                if (item['active']) {
                    _value.push(item['name']);
                }
            });
            return _value;
        }
    },
    multiple: {
        type: Boolean,
        default: false
    },
    clearable: {
        type: Boolean,
        default: true
    },
    readonly: {
        type: Boolean,
        default: false
    },
    disabled: {
        type: Boolean,
        default: false
    },
    custom_style: {
        type: String,
        default: ""
    }
};
customElements.define('orui-check-list', CheckList);
