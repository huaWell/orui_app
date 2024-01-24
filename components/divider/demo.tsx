import { ORUI } from "../base/index.js";

export function DividerDemo() {
    const html = (
        <orui-space direction="vertical">
            <orui-title text="divider基本使用">
                <orui-divider no_content="true"/>
            </orui-title>
            <orui-title text="divider带内容">
                <orui-space direction="vertical">
                    <orui-divider>
                        <span>带内容</span>
                    </orui-divider>
                    <orui-divider content_direction="left">
                        <span>带内容</span>
                    </orui-divider>
                    <orui-divider content_direction="right">
                        <span>带内容</span>
                    </orui-divider>
                </orui-space>
            </orui-title>
            <orui-title text="竖向分割线">
                <div style="display: flex;height: 18px;align-items: center">
                    Text
                    <orui-divider direction="vertical" style="height: 100%"/>
                    text
                    <orui-divider direction="vertical" style="height: 100%"/>
                    text
                </div>
            </orui-title>
        </orui-space>
    )
    return html
}