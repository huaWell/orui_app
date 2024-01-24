import { ORUI } from "../base/index.js";

export function SearchBarDemo() {
    const html = (
        <orui-space direction="vertical">
            <orui-title text="搜索框基本使用方法">
                <orui-search-bar placeholder="请输入内容"/>
            </orui-title>
            <orui-title text="无清除按钮">
                <orui-search-bar clearable="false"/>
            </orui-title>
            <orui-title text="自定义搜索icon">
                <orui-search-bar search_icon="/components/images/love.svg"/>
            </orui-title>
            <orui-title text="自定义清除icon">
                <orui-search-bar clear_icon="/components/images/love.svg"/>
            </orui-title>
            <orui-title text="自定义style">
                <orui-search-bar  ui_name="my-search-bar" custom_style="--background:red"/>
            </orui-title>
        </orui-space>
    )
    return html
}