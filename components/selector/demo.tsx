import { ORUI } from "../base/index.js";
export function demo() {
    const _options = [
        {
            name:"first",
            display_name:'选项一',
        },
        {
            name:"second",
            display_name:'选项二',
        },
        {
            name:"third",
            display_name:'选项三',
        },
        {
            name:"forth",
            display_name:'选项四',
        },
        {
            name:"fifth",
            display_name:'选项四'
        },
        {
            name:"sixth",
            display_name:'选项四,选项四',
        },
        {
            name:"seventh",
            display_name:'选项四',
        }
    ]

    const _options_desc = _options.map((item) => {
        (item as any).description='描述信息'
        return item
    })

    const _options_dif = [
        {
            name: "first",
            display_name: '选项一',
        },
        {
            name: "second",
            display_name: '选项二',
            disabled: true
        },
        {
            name: "third",
            display_name: '选项三',
            disabled: true
        },
        {
            name: "forth",
            display_name: '选项四',
        },
        {
            name: "fifth",
            display_name: '选项五'
        },
        {
            name: "sixth",
            display_name: '选项六',
        },
        {
            name: "seventh",
            display_name: '选项七',
        }

    ]
    const html = (
        <orui-space direction='vertical'>
            <orui-title text="选择组单选基本用法">
                <orui-selector id="selector1" options={_options} selectable="false"/>
            </orui-title>
            <orui-title text="选择组多选基本用法">
                <orui-selector id="selector2" options={_options} selectable="true"/>
            </orui-title>
            <orui-title text="选择组单选有默认值">
                <orui-selector id="selector3" options={_options} selectable="false" default_value="second"/>
            </orui-title>
            <orui-title text="选择组多选有默认值">
                <orui-selector id="selector4" options={_options} selectable="true" default_value="second"/>
            </orui-title>
            <orui-title text="选择组整体disabled">
                <orui-selector id="selector5" options={_options} selectable="true" default_value="second" disabled="true"/>
            </orui-title>
            <orui-title text="多选单项disabled">
                <orui-selector id="selector9" options={_options_dif} selectable="true" default_value="second" columns="2"
                               clearable="true"/>
            </orui-title>
            <orui-title text="两栏布局">
                <orui-selector id="selector6" options={_options} selectable="true" columns="2" default_value="second"/>
            </orui-title>
            <orui-title text="三栏布局">
                <orui-selector id="selector7" options={_options} selectable="true" columns="3" default_value="second"/>
            </orui-title>
            <orui-title text="单选必须选择一项">
                <orui-selector id="selector8" options={_options} selectable="false" default_value="second" columns="2"
                               clearable="false"/>
            </orui-title>
            <orui-title text="自定义样式">
                <orui-selector id="selector10" custom_style="--border-radius:50%" options={_options} selectable="false" default_value="second"
                               clearable="true"/>
            </orui-title>
            <orui-title text="没有右下角勾选">
                <orui-selector id="selector11" custom_style="--border-radius:50%" options={_options} selectable="true" default_value="second" clearable="true"
                               show_checked_wrap="false"/>
            </orui-title>
            <orui-title text="选项带描述">
                <orui-selector id="selector12" options={_options_desc} selectable="true" default_value="second" columns="2" clearable="true"
                               show_checked_wrap="false"/>
            </orui-title>
        </orui-space>
    )
    return html
}