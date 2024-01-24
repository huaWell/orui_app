import { ORUI } from "../base/index.js"

export function InputDemo() {
    const html = (
        <orui-space direction="vertical" style="width: 100%">
            <orui-title text="普通input">
                <orui-input  placeholder="请输入"/>
            </orui-title>
            <orui-title text="具有字数限制的input">
                <orui-input placeholder="请输入"  show_count="1" max_length="100" clearable="true"/>
            </orui-title>
            <orui-title text="input只显示字数，不做最大字数限制">
                <orui-input  placeholder="请输入" value="11" show_count="1" clearable="true"/>
            </orui-title>
            <orui-title text="password类型">
                <orui-input  placeholder="请输入" type="password" clearable="true"/>
            </orui-title>

            <orui-title text="禁用input">
                <orui-input  placeholder="请输入" disabled="true" value="1234567"/>
            </orui-title>
            <orui-title text="只读input">
                <orui-input  placeholder="请输入" readonly="true" value="1234567"/>
            </orui-title>
            <orui-title text="textarea多行文本">
                <orui-input placeholder="请输入" type="number" is_textarea="true"/>
            </orui-title>
            <orui-title text="textarea固定行数">
                <orui-input   placeholder="请输入" type="number" is_textarea="true" rows="7"/>
            </orui-title>
            <orui-title text="textarea显示字数统计">
                <orui-input  placeholder="请输入" type="number" is_textarea="true" rows="2" show_count="true"/>
            </orui-title>
            <orui-title text="只读textarea">
                <orui-input   placeholder="请输入" type="number" is_textarea="true" rows="3" readonly="true" value="123"/>
            </orui-title>
            <orui-title text="禁用textarea">
                <orui-input  placeholder="请输入" type="number" is_textarea="true" rows="3" disabled="true" value="123"/>
            </orui-title>
            <orui-title text="textarea字数限制">
                <orui-input   placeholder="请输入" type="number" is_textarea="true" rows="3" show_count="true" max_length="100"/>
            </orui-title>
        </orui-space>
    )
    return html
}