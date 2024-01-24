import { ORUIElement, ORUI } from "../base/index.js";
import { throttle } from "../utils/index.js";
export class List extends ORUIElement {
    constructor() {
        super(...arguments);
        //加载方法
        this.load = throttle(() => {
            if (['error', 'loading', 'finished'].indexOf(this.loading_state) != -1)
                return;
            this.loading_state = 'loading';
            const event = new CustomEvent('load', {
                detail: {}
            });
            this.dispatchEvent(event);
        }, 1000);
        //拉到顶 触发刷新
        this.refresh = throttle(() => {
            this.innerHTML = '';
            this.loading_state = 'refreshing';
            const event = new CustomEvent('refresh', {
                detail: {}
            });
            this.dispatchEvent(event);
        }, 1000);
    }
    get items() {
        return this.querySelectorAll('orui-list-item');
    }
    init() {
        this.none_text = '';
        this.empty_text = '暂无数据，点击重新加载';
        this.loading_text = '加载中...';
        this.finished_text = '没有更多了';
        this.error_text = '请求失败，点击重新加载';
        this.refreshing_text = '刷新中...';
        this.data = this.data || [];
        const html = (ORUI.createElement("orui-pull-to-refresh", null,
            ORUI.createElement("orui-space", { direction: "vertical", style: "height: 100%; width: 100%" },
                ORUI.createElement("slot", null),
                ORUI.createElement("orui-button", { block: true }))));
        this.import_css('/components/list/index.css');
        this.shadowRoot.append(html);
        this.space = this.shadowRoot.querySelector('orui-space');
        //创建底部按钮
        this.button = this.shadowRoot.querySelector('orui-button');
        this.init_events();
    }
    render() {
        this.innerHTML = '';
        this.add_items(this.data);
        this.render_button();
    }
    //渲染底部按钮
    render_button() {
        const display = this.loading_state == 'none' ? 'none' : '';
        const text = this[this.loading_state + '_text'];
        this.button.style.display = display;
        this.button.text = text;
    }
    add_items(data = []) {
        const fragment = document.createDocumentFragment();
        for (let i = 0; i < data.length; i++) {
            const item = data[i];
            const list_item = this.row_render(item);
            fragment.append(list_item);
        }
        this.append(fragment);
    }
    update(name, oldValue, newValue) {
        const handler = {
            loading_state: 'render_button',
            data: 'render'
        };
        handler[name] && this[handler[name]]();
    }
    init_events() {
        const pull = this.shadowRoot.querySelector('orui-pull-to-refresh');
        pull.addEventListener('load', () => {
            this.load();
        });
        pull.addEventListener('refresh', () => {
            this.refresh();
        });
        this.button.addEventListener('click', () => {
            if (this.loading_state == 'empty') {
                this.refresh();
            }
            if (this.loading_state == 'error') {
                this.loading_state = 'none';
                this.load();
            }
        });
    }
}
List.properties = {
    loading_state: {
        type: ['none', 'empty', 'loading', 'error', 'finished', 'refreshing'],
        default: 'none'
    },
    data: {
        type: Array,
        default: [],
        get() {
            let data = [];
            for (let i = 0; i < this.items.length; i++) {
                const item = this.items[i];
                let item_data = item.data;
                data.push(item_data);
            }
            return data;
        }
    }
};
customElements.define('orui-list', List);
