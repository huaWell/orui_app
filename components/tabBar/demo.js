import { ORUI } from "../base/index.js";
export function TabBarDemo() {
    const _data1 = [
        {
            key: 'home',
            title: '首页',
            icon: "/components/images/app.svg",
        },
        {
            key: 'todo',
            title: '待办',
            icon: "/components/images/unordered_list.svg",
        },
        {
            key: 'message',
            title: '消息',
            icon: "/components/images/message.svg",
        },
        {
            key: 'personalCenter',
            title: '我的',
            icon: "/components/images/user.svg",
        },
    ];
    const _data2 = [
        {
            key: 'home',
            // title: '首页',
            icon: "/components/images/app.svg",
        },
        {
            key: 'todo',
            // title: '待办',
            icon: "/components/images/unordered_list.svg",
        },
        {
            key: 'message',
            // title: '消息',
            icon: "/components/images/message.svg",
        },
        {
            key: 'personalCenter',
            // title: '我的',
            icon: "/components/images/user.svg",
        },
    ];
    const _data3 = [
        {
            key: 'home',
            title: '首页',
            // icon: "/components/images/app.svg",
        },
        {
            key: 'todo',
            title: '待办',
            // icon: "/components/images/unordered_list.svg",
        },
        {
            key: 'message',
            title: '消息',
            // icon: "/components/images/message.svg",
        },
        {
            key: 'personalCenter',
            title: '我的',
            // icon: "/components/images/user.svg",
        },
    ];
    const html = (ORUI.createElement("orui-space", { direction: "vertical" },
        ORUI.createElement("orui-title", { text: "tabBar\u6807\u7B7E\u680F\u57FA\u672C\u4F7F\u7528" },
            ORUI.createElement("orui-tab-bar", { data: _data1 })),
        ORUI.createElement("orui-title", { text: "tabBar\u4EC5\u56FE\u6807" },
            ORUI.createElement("orui-tab-bar", { data: _data2 })),
        ORUI.createElement("orui-title", { text: "tabBar\u4EC5\u6587\u5B57" },
            ORUI.createElement("orui-tab-bar", { data: _data3 })),
        ORUI.createElement("orui-title", { text: "tabBar\u81EA\u5B9A\u4E49\u6837\u5F0F" },
            ORUI.createElement("orui-tab-bar", { data: _data1, active_color: 'red', style: "--text-font-size: var(--orui-font-size-6);--text-active-color: red;" }))));
    return html;
}
