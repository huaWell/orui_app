import { ORUI } from "../base/index.js"

export function demo() {
    const html = (
        <orui-grid>
            <orui-row grow="0">
                <orui-space direction="vertical" style="width: 100%">
                    <orui-title text="步进器基本用法">
                        <orui-stepper ui_name="step1"/>
                    </orui-title>
                    <orui-title text="初始值不为0">
                        <orui-stepper value="1"/>
                    </orui-title>
                    <orui-title text="步长设置">
                        <orui-stepper step="10"/>
                    </orui-title>
                    <orui-title text="格式化到小数">
                        <orui-stepper step="1" digits="1"/>
                    </orui-title>
                    <orui-title text="限制输入范围">
                        <orui-stepper step="1" digits="1" min="-5" max="5"/>
                    </orui-title>
                    <orui-title text="自定义width">
                        <orui-stepper style="width: 150px"/>
                    </orui-title>
                    <orui-title text="允许清空">
                        <orui-stepper allow_empty="true"/>
                    </orui-title>
                    <orui-title text="禁用状态">
                        <orui-stepper disabled="true"/>
                    </orui-title>
                </orui-space>
            </orui-row>
        </orui-grid>
    )
    return html
}