import {ORUIElement, Info, ORUI} from "../base/index.js";
import {FormItem} from "../formItem/index.js";

export class Form extends ORUIElement {
    static properties = {
        data: {
            type: Object,
            default: {},
            get() {
                let data = {};
                const form_items = this.items;
                form_items.forEach(form_item => {
                    const {name, value} = form_item as FormItem;
                    if(name) {
                        data[name] = value
                    }
                });
                return data
            }
        },
        infos: {
            type: Array,
            default: []
        },
        layout: {
            type: ['vertical', 'horizontal'],
            default: 'vertical'
        }
    };
    infos: Info[];
    data: object;
    layout: string;

    get items(): NodeListOf<FormItem> {
        const form_items = this.querySelectorAll('orui-form-item') as NodeListOf<FormItem>;
        return form_items
    }

    get_item(name: string): FormItem {
        const form_items = this.items;
        let item;
        for (let i = 0; i < form_items.length; i++) {
            let form_item = form_items[i];
            if(name == form_item.name) {
                item = form_item;
                break
            }
        }
        return item
    }

    init() {
        const html = <slot/>;
        this.import_css('/components/form/index.css');
        this.shadowRoot.append(html);
        this.init_events();
    }

    init_events() {
        this.init_item_events();
    }

    render() {
        //无infos根据内部渲染
        //有infos根据infos渲染
        this.render_infos();
        this.render_layout();
        this.render_data();
    }

    render_infos() {
        if(this.infos.length > 0) {
            this.innerHTML = '';
            const fragment = document.createDocumentFragment();
            this.infos.forEach(info => {
                const item = this.create_form_item(info);
                fragment.append(item);
            });
            this.append(fragment);
            this.init_item_events();
        }
    }

    render_data() {
        const form_items = this.items;

        form_items.forEach(form_item=> {
            const name = form_item.name;
            const value = this.data[name];
            if(value !== undefined) {
                form_item.value = value;
            }
        });
    }

    render_layout() {
        const form_items = this.items;
        form_items.forEach(form_item=> {
            form_item.layout = this.layout;
        });
    }

    update(name: string) {
        const handler = {
            infos: 'render_infos',
            data: 'render_data',
            layout: 'render_layout'
        };
        handler[name] && this[handler[name]]();
    }

    init_item_events() {
        const form_items = this.items;

        form_items.forEach(form_item => {
            form_item.addEventListener('change', (e: any) => {
                const {name, value} = e.detail;
                const event = new CustomEvent('change',{
                    detail: {
                        name,
                        value
                    }
                });
                this.dispatchEvent(event);
            });
        });
    }

    create_form_item(info: Info): FormItem {
        const {name, display_name, is_readonly, is_visible, is_nullable, editor, format} = info;
        let _format = {};

        try{
            _format = JSON.parse(format);
        }catch (e) {
            console.log(e)
        }

        const form_item = <orui-form-item
            name={name}
            display_name={display_name}
            is_readonly={is_readonly}
            is_visible={is_visible}
            is_nullable={is_nullable}
            editor={editor}
            format={_format}
            layout={this.layout}
        />;

        return form_item;
    }

    async validate() {
        let verified = true;
        let validate_promises = [];
        for (let i = 0; i < this.items.length; i++) {
            const form_item = this.items[i];
            const validate_promise = form_item._validate();
            validate_promises.push(validate_promise);
        }
        const values = await Promise.all(validate_promises);

        values.forEach((value) => {
            if(!value) return verified = value
        });

        return verified
    }
}

customElements.define("orui-form", Form);