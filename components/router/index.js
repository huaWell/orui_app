import { ORUIElement, ORUI } from "../base/index.js";
export function get_router() {
    const provider = router_provider;
    const router = provider?.router;
    return router;
}
export let router_provider = null;
export const navigate_to = (url = '', replace = false) => {
    const router = get_router();
    router && router.navigate_to(url, replace);
};
export function back() {
    const router = get_router();
    router.back();
}
export function forward() {
    const router = get_router();
    router.forward();
}
export class HashRouter {
    constructor() {
        this.routes = [];
    }
    go(amount) {
    }
    back() {
        window.history.back();
    }
    forward() {
        window.history.forward();
    }
    navigate_to(url = '', replace = false) {
        if (replace) {
            window.location.replace('#' + url);
        }
        else {
            window.location.hash = '#' + url;
        }
    }
    before_change(to, from) {
    }
}
const ROUTER_TYPE = {
    hash: HashRouter
};
class RouterProvider extends ORUIElement {
    init() {
        const html = ORUI.createElement("slot", null);
        this.shadowRoot.append(html);
        this.import_css('/components/router/index.css');
        this.init_events();
        router_provider = this;
    }
    update(name) {
        const handler = {
            routes: 'render_routes',
            type: 'render_type'
        };
        handler[name] && this[handler[name]]();
    }
    render() {
        this.render_type();
    }
    render_type() {
        const _router = ROUTER_TYPE[this.type];
        this.router = new _router();
        this.render_routes();
    }
    render_routes() {
        this.routes_map = new Map();
        const add_routes = (route, match_as) => {
            if (route.children) {
                route.children.forEach(child => {
                    add_routes(child, match_as + child.path);
                });
            }
            this.routes_map.set(match_as, route);
        };
        this.routes.forEach((route) => {
            add_routes(route, route.path);
        });
        this.refresh();
    }
    on_change(url = '') {
        this.match(url);
    }
    async match(url) {
        const _url = url.replace('/', '');
        const hash_parts = _url.split('/');
        let pages = [];
        const _hash_parts = ['/', ...hash_parts];
        outer: for (let i = 0; i < _hash_parts.length + 1; i++) {
            let current_url = '';
            for (let j = 0; j < i; j++) {
                const hash_part = _hash_parts[j];
                if (j == 0 || j == 1) {
                    current_url = current_url + `${hash_part}`;
                }
                else {
                    current_url = current_url + `/${hash_part}`;
                }
            }
            for (let j = i; j < _hash_parts.length; j++) {
                const hash_part = _hash_parts[j];
                if (j == 0 || j == 1) {
                    current_url = current_url + `${hash_part}`;
                }
                else {
                    current_url = current_url + `/${hash_part}`;
                }
                const page = this.routes_map.get(current_url);
                if (!page) {
                    pages = [];
                    continue outer;
                }
                else {
                    if (hash_part == '/')
                        continue;
                    pages.push(page);
                }
            }
            break;
        }
        if (pages.length == 0) {
            const page = this.routes_map.get('*');
            pages.push(page);
        }
        //判断是否需要重定向
        let { redirect } = pages[pages.length - 1];
        if (redirect) {
            navigate_to(redirect, true);
            return;
        }
        if (this.is_init) {
            const event = new CustomEvent('change', {
                detail: {
                    url
                }
            });
            this.dispatchEvent(event);
        }
        //render page
        let parent_page = null;
        parent_page = this;
        for (let i = 0; i < pages.length; i++) {
            const page = pages[i];
            const { component, path, cache } = page;
            let dom = null;
            if (cache) {
                dom = cache;
            }
            else {
                dom = document.createElement('orui-page');
                page.cache = dom;
            }
            if (!cache) {
                parent_page.append(dom);
            }
            parent_page.querySelectorAll('orui-page').forEach(page => {
                page.style.display = 'none';
            });
            dom.style.display = '';
            if (!cache) {
                const _component = await Promise.resolve(component());
                dom.append(_component);
            }
            const outlet = dom.querySelector('orui-outlet');
            if (!outlet)
                break;
            parent_page = outlet;
        }
    }
    get_url() {
        const path = location.hash;
        let raw = path.replace(/^#!?/, '');
        // always
        if (raw.charAt(0) !== '/') {
            raw = '/' + raw;
        }
        return raw;
    }
    refresh() {
        const raw = this.get_url();
        this.url = raw;
        //在跳转之前是否需要执行跳转
        if (this.before_change === undefined || this.before_change(this.url)) {
            this.on_change(raw);
        }
    }
    //获取页面
    get_page(url) {
        return this.routes_map.get(url)?.cache;
    }
    init_events() {
        window.addEventListener('hashchange', this.refresh.bind(this));
    }
}
RouterProvider.properties = {
    routes: {
        type: Array,
        default: []
    },
    type: {
        type: Object.keys(ROUTER_TYPE),
        default: 'hash'
    },
    authorized: {
        type: Boolean,
        default: true
    }
};
customElements.define('orui-router-provider', RouterProvider);
//-------------------LINK
export class Link extends ORUIElement {
    init() {
        const html = ORUI.createElement("slot", null);
        this.shadowRoot.append(html);
        this.init_events();
    }
    init_events() {
        this.addEventListener('click', () => {
            navigate_to(this.url);
        });
    }
}
Link.properties = {
    url: {
        type: String,
        default: ''
    }
};
customElements.define('orui-link', Link);
//---------------------OUTLET
export class Outlet extends ORUIElement {
    init() {
        this.style.cssText = 'display: block; height: 100%; width: 100%';
        const html = ORUI.createElement("slot", null);
        this.shadowRoot.append(html);
    }
}
customElements.define('orui-outlet', Outlet);
