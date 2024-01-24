import { ORUI } from "../base/index.js";

export function IconDemo() {
    const html = (
        <orui-space direction="vertical">
            <orui-title text="icon的基本使用">
                <orui-icon style="display: inline-block"  path="/components/images/close.svg"></orui-icon>
            </orui-title>
            <orui-title text="icon修改颜色">
                <orui-icon style="display: inline-block"  path="/components/images/close.svg" color="red"></orui-icon>
            </orui-title>
            <orui-title text="icon修改尺寸">
                <orui-icon style="display: inline-block"  path="/components/images/close.svg" width="2rem" height="2rem"></orui-icon>
            </orui-title>
        </orui-space>
    )
    return html
}