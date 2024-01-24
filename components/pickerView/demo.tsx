import {ORUI } from "../base/index.js"

export function PickerViewDemo() {
    const _data = [
        {
            data:[
                {
                    name:'mon',
                    display_name:'周一'
                },
                {
                    name:'tur',
                    display_name:'周二'
                },
                {
                    name:'wed',
                    display_name:'周三'
                },
                {
                    name:'thur',
                    display_name:'周四'
                },
                {
                    name:'fri',
                    display_name:'周五'
                }
            ],
            name:"weekday",
        },
        {
            data:[
                {
                    name:'am',
                    display_name:'上午'
                },
                {
                    name:'pm',
                    display_name:'下午'
                }
            ],
            name:"time",
        }
    ]
    const _value= {
        weekday: 'fri',
        time: 'pm'
    }
    const html = (
        <orui-space direction="vertical">
            <orui-title text="pickerView基本使用方法">
                <orui-picker-view data={_data}/>
            </orui-title>
            <orui-title text="pickerView自定义高度">
                <orui-picker-view data={_data} style="height: 300px"/>
            </orui-title>
            <orui-title text="pickerView内容高度">
                <orui-picker-view data={_data} item_height={48}/>
            </orui-title>
            <orui-title text="pickerView有默认选中值">
                <orui-picker-view data={_data} value={_value} style="height: 300px"/>
            </orui-title>
        </orui-space>
    )
    return html
}