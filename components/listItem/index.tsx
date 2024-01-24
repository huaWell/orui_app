import {ORUIElement, ORUI} from "../base/index.js";

export class ListItem extends ORUIElement{
    _data: object;
    data: object;
    param: object;

    static properties = {
        params: {
            type: Object,
            default: {}
        },
        data: {
            type: Object,
            default: {},
            get() {
                //这边可以添加 根据infos不修改值
                let data = {...this._data};
                const value_arr = this.get_element_and_attribute('data-');
                value_arr.forEach(item => {
                    const { element, attributes } = item;
                    attributes.forEach(item => {
                        const { attribute, value } = item;
                        if(value.indexOf('item.') != -1) {
                            data[value.replace('item.', '')] = element[attribute];
                        }
                    });
                });
                return data
            }
        }
    };

    init() {
        const html = (
            <slot/>
        );
        this.import_css('/components/listItem/index.css');
        this.shadowRoot.append(html);
        this.init_events();
    }

    render() {
        this.set_attributes();
    }

    set_attributes() {
        if(!this.data) return;
        this._data = this.data;
        //data-绑定属性
        const value_arr = this.get_element_and_attribute('data-');

        value_arr.forEach(item => {
            const { element, attributes } = item;
            let params = {};

            if(element.tagName.includes('ORUI')){
                attributes.forEach(item => {
                    const { attribute, value } = item;
                    let _value;
                    if(value.indexOf('item.') != -1) {
                        _value = this.data[value.replace('item.', '')];
                        params[attribute] = _value;
                    }else{
                        _value = this.param[value];
                    }
                    params[attribute] = _value;
                });
                element.set_ui(params);
            }else {
                attributes.forEach(item => {
                    const { attribute, value } = item;
                    const _value = value.indexOf('item.') != -1
                        ? this.data[value.replace('item.', '')]
                        : this.param[value];
                    element.setAttribute(attribute, _value);
                });
            }
        });
    }

    get_element_and_attribute(type: string) {
        //可以添加 根据info信息配置显示的字段
        const elements = this.querySelectorAll('*');
        let arr = [];
        elements.forEach(element => {
            const attributes = element.attributes;
            let obj = {
                element,
                attributes: []
            };
            for (let i = 0; i < attributes.length; i++) {
                const attributeName = attributes[i].name;
                if (attributeName.includes(type)) {
                    const value = element.getAttribute(attributeName);
                    obj.attributes.push(
                        {
                            attribute: attributeName.replace(type, ''),
                            value
                        }
                    );
                }
            }
            if (attributes.length > 0) {
                arr.push(obj)
            }
        });

        return arr;
    }

    init_events() {

    }
}
customElements.define('orui-list-item', ListItem);