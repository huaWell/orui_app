import { ORUI } from "../base/index.js"

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
    ]
    const _data2 =  [
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
    ]
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
    ]
    const html = (
        <orui-space direction="vertical">
            <orui-title text="tabBar标签栏基本使用">
                <orui-tab-bar data={_data1}/>
            </orui-title>
            <orui-title text="tabBar仅图标">
                <orui-tab-bar data={_data2}/>
            </orui-title>
            <orui-title text="tabBar仅文字">
                <orui-tab-bar data={_data3}/>
            </orui-title>
            <orui-title text="tabBar自定义样式">
                <orui-tab-bar data={_data1} active_color='red' style="--text-font-size: var(--orui-font-size-6);--text-active-color: red;"/>
            </orui-title>
        </orui-space>
    )
    return html
}