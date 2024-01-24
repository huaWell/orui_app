import { ORUI } from "../base/index.js";

export function RadioDemo() {
    const _data=[
            {name:'2',display_name:'test1',disabled:0},
            {name:'1',display_name:"",disabled:0},
            {name:'0',display_name:'test3',disabled:0}
        ]
    const _data1 = [
        {name:'2',display_name:'test1',disabled:0},
        {name:'1',display_name:"",disabled:0},
        {name:'0',display_name:'test3',disabled:1}
    ]
    let html = (
        <orui-grid>
            <orui-space direction="vertical">
                <orui-title text="基本使用方法">
                    <orui-radio data={_data}/>
                </orui-title>
                <orui-title text="更改尺寸">
                    <orui-radio data={_data} ui_name="my_radio1" size="large" selectable="0"/>
                </orui-title>
                <orui-title text="可多选">
                    <orui-radio data={_data} ui_name="my_radio2" selectable="1"/>
                </orui-title>
                <orui-title text="单个按钮disabled">
                    <orui-radio data={_data1} ui_name="my_radio3"/>
                </orui-title>
                <orui-title text="整组disabled">
                    <orui-radio data={_data} ui_name="my_radio4" disabled="true"/>
                </orui-title>
            </orui-space>
        </orui-grid>
    )
    return html
}