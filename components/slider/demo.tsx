import { ORUI } from "../base/index.js";

export function demo() {
    const html = (
        <orui-space direction="vertical" style="width: 100%">
            <orui-title text="滑动条基本使用方法">
                <orui-slider ui_name="slider" step="1" max="10" min="0"/>
            </orui-title>
            <orui-title text="step为小数">
                <orui-slider step="0.1" max="1" min="0"/>
            </orui-title>
            <orui-title text="初始值不为0">
                <orui-slider step="0.1" max="1" value="0.2"/>
            </orui-title>
            <orui-title text="disabled">
                <orui-slider value="10" disabled="true"/>
            </orui-title>
            <orui-title text="是否显示刻度">
                <orui-slider step="1" max="10" min="0" value="1" ticks="true"/>
            </orui-title>
            <orui-title text="是否显示刻度标记">
                <orui-slider step="0.1" max="1" min="0" value="1" ticks="true" marks="true"/>
            </orui-title>
            <orui-title text="自定义颜色">
                <orui-slider color="red"/>
            </orui-title>
            <orui-title text="自定义图标">
                <orui-slider color="red" icon="/components/images/love.svg"/>
            </orui-title>
        </orui-space>
    )
    return html
}