import { ORUIElement, ORUI } from "../base/index.js";
import { navigate_to, router_provider } from "../router/index.js";
import { get_control } from "../utils/index.js";
export class Layout extends ORUIElement {
    constructor() {
        super(...arguments);
        this.routes = [
            {
                key: 'todo',
                title: '待办',
                path: '/home/todo',
                icon: '/components/images/unordered_list.svg'
            },
            {
                key: 'message',
                title: '订单',
                path: '/home/message',
                icon: '/components/images/message.svg'
            },
            {
                key: 'personalCenter',
                path: '/home/personalCenter',
                title: '我的',
                icon: '/components/images/user.svg'
            }
        ];
    }
    init() {
        const html = (ORUI.createElement("orui-grid", null,
            ORUI.createElement("orui-row", null,
                ORUI.createElement("slot", null)),
            ORUI.createElement("orui-row", { grow: "0" },
                ORUI.createElement("orui-tab-bar", { ui_name: 'footer', className: "footer", data: this.routes }))));
        this.shadowRoot.append(html);
        this.import_css('/components/layout/index.css');
        this.footer = get_control('footer', html);
        this.init_events();
        this.set_path();
    }
    init_events() {
        this.footer.addEventListener('click', async (ev) => {
            const { path } = ev.detail['data'];
            //找最近的包含当前oath路由
            navigate_to(path);
        }, false);
        router_provider.addEventListener('change', (ev) => {
            this.set_path();
        });
    }
    set_path() {
        const path = router_provider.url;
        try {
            const active_route = this.routes.find((route) => path.indexOf(route.path) != -1);
            active_route && (this.footer.value = active_route.key);
        }
        catch (e) {
            console.log(e);
        }
    }
}
customElements.define("orui-tab-bar-layout", Layout);
export class TabsLayout extends ORUIElement {
    init() {
        const html = (ORUI.createElement(ORUI.createFragment, null,
            ORUI.createElement("orui-row", { grow: '0' },
                ORUI.createElement("orui-tabs", { custom_style: '--content-padding:0', className: 'tabs-layout-header' }, this.routes.map((route) => ORUI.createElement("orui-tab-item", { key: route.key, title: route.title })))),
            ORUI.createElement("orui-row", null,
                ORUI.createElement("slot", null))));
        this.import_css('/components/layout/index.css');
        this.className = 'orui-tabs-layout';
        this.header = html.querySelector('.tabs-layout-header');
        this.shadowRoot.appendChild(html);
        this.init_events();
    }
    render() {
        this.set_path();
    }
    init_events() {
        this.header.addEventListener('change', async (ev) => {
            const { key } = ev['detail']['cur_item'];
            const path = this.routes.find((item) => item.key == key).path;
            navigate_to(path);
            if (this.change) {
                this.change(ev['detail']);
            }
        }, false);
        router_provider.addEventListener('change', (ev) => {
            this.set_path();
        });
    }
    set_path() {
        const path = router_provider.url;
        try {
            const active_route = this.routes.find((route) => route.path == path);
            if (!active_route)
                return;
            this.header['active_key'] = active_route.key;
            router_provider.routes_map.get('/home/todo').redirect = active_route.path;
        }
        catch (e) {
            console.log(e);
        }
    }
}
customElements.define('orui-tabs-layout', TabsLayout);
