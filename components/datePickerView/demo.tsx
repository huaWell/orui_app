import { ORUI } from "../base/index.js";

export function DatePickerViewDemo() {


    let html = (
        <orui-space direction="vertical">
            <orui-title text="DatePickerView基本使用方法">
                <orui-date-picker-view ui_name="ctr1"/>
            </orui-title>
            <orui-title text="DatePickerView精确到秒">
                <orui-date-picker-view ui_name="ctr2" precision="second"/>
            </orui-title>
            <orui-title text="DatePickerView年份限制范围">
                <orui-date-picker-view ui_name="ctr2" min="1932" max="2050" precision="second"/>
            </orui-title>
            <orui-title text="DatePickerView自定义高度">
                <orui-date-picker-view ui_name="ctr3" style="height: 500px"/>
            </orui-title>
            <orui-title text="DatePickerView自定义每列内容">
                <orui-date-picker-view ui_name="ctr4" custom="true" renderLabel={renderLabel} onCahnge={change}/>
            </orui-title>
            <orui-title text="DatePickerView过滤数据">
                <orui-date-picker-view custom="true" filter={renderLabelFilter} onChange={change}/>
            </orui-title>
            <orui-title text="DatePickerView周选择器">
                <orui-date-picker-view ui_name="ctr5" precision="week-day"/>
            </orui-title>
            <orui-title text="DatePickerView至今">
                <orui-date-picker-view ui_name="ctr6" till_now="true"/>
            </orui-title>
        </orui-space>
    )
    function renderLabel(type,value) {
        switch (type) {
            case 'year':
                return value + '年'
            case 'month':
                return value + '月'
            case 'day':
                return value + '日'
            default:
                return value
        }
    }
    function change(ev) {
        const {data,type} = ev.detail
        console.log(data,type)
    }

    function renderLabelFilter(type,value) {
        switch (type) {
            case 'year':
                if(value >= 2017){
                    return true
                }
                return false
            case 'month':
                if(value > 3 && value < 12){
                    return true
                }
                return false
            case 'day':
                if(value > 3 && value < 12){
                    return true
                }
                return false
                break;
        }
    }

    return html
}