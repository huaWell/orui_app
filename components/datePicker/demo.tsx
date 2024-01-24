import {ORUI} from "../base/index.js";
import {get_control} from "../utils/index.js";

export function DatePickerDemo() {
    var html = (
        <orui-space direction="vertical">
            <orui-title text="datepicker基本使用方法">
                <orui-button text="展示DatePicker" onClick={() => {basicDatePicker.visible = true}}/>
                <orui-date-picker
                    ui_name="basicDatePicker"
                    onConfirm={() => {basicDatePicker.visible = false}}
                    onCancel={() => {basicDatePicker.visible = false}}
                    max="2033"
                    min="1930"/>
            </orui-title>
            <orui-title text="datepicker精度到秒">
                <orui-button ui_name="btn2" text="精度为秒" onClick={() => {customPrecisionDatePicker.visible = true}}/>
                <orui-date-picker
                    ui_name="customPrecisionDatePicker"
                    onConfirm={() => {customPrecisionDatePicker.visible = false}}
                    onCancel={() => {customPrecisionDatePicker.visible = false}}
                    precision="second"/>
            </orui-title>
            <orui-title text="datepicker周选择器">
                <orui-button ui_name="btn3" text="周选择器" onClick={() => { weekDatePicker.visible = true}}/>
                <orui-date-picker
                    ui_name="weekDatePicker"
                    onConfirm={() => {weekDatePicker.visible = false}}
                    onCancel={() => {weekDatePicker.visible = false}}
                    precision="week"/>
            </orui-title>
            <orui-title text="datepicker过滤数据">
                <orui-button ui_name="btn3" text="过滤数据" onClick={() => { filterDataDatePicker.visible = true}}/>
                <orui-date-picker
                    ui_name="filterDataDatePicker"
                    filter={filterData}
                    onConfirm={() => {filterDataDatePicker.visible = false}}
                    onCancel={() => {filterDataDatePicker.visible = false}}
                    precision="day"/>
            </orui-title>
            <orui-title text="datepicker自定义每项内容">
                <orui-button ui_name="btn3" text="自定义每项内容" onClick={() => { customLabelDatePicker.visible = true}}/>
                <orui-date-picker
                    ui_name="customLabelDatePicker"
                    renderLabel={labelRender}
                    onConfirm={() => {customLabelDatePicker.visible = false}}
                    onCancel={() => {customLabelDatePicker.visible = false}}
                    precision="day"/>
            </orui-title>
            <orui-title text="datepicker至今">
                <orui-button ui_name="btn4" text="至今" onClick={() => {tillNowDatePicker.visible = true}}/>
                <orui-date-picker
                    ui_name="tillNowDatePicker"
                    onConfirm={() => {tillNowDatePicker.visible = false}}
                    onCancel={() => {tillNowDatePicker.visible = false}}
                    till_now="true"/>
            </orui-title>
            <orui-title text="datepicker自定义内容高度">
                <orui-button ui_name="btn5" text="自定义内容高度" onClick={() => {customHeightDatePicker.visible = true}}/>
                <orui-date-picker
                    ui_name="customHeightDatePicker"
                    onConfirm={() => {customHeightDatePicker.visible = false}}
                    onCancel={() => {customHeightDatePicker.visible = false}}
                    item_height="50"/>
            </orui-title>
            <orui-title text="datepicker展示value">
                <div style="display: flex;align-items: center">
                    <orui-button ui_name="btn6" text="展示value" onClick={() => {showValueDatePicker.visible = true}}/>
                    <span ui_name="show_text"/>
                </div>
                <orui-date-picker
                    onConfirm={onConfirm}
                    onCancel={() => {showValueDatePicker.visible = false}}
                    ui_name="showValueDatePicker"/>
            </orui-title>
        </orui-space>
    )
    var basicDatePicker = get_control("basicDatePicker",html)
    var customPrecisionDatePicker = get_control("customPrecisionDatePicker",html)

    var weekDatePicker = get_control("weekDatePicker",html)
    var tillNowDatePicker = get_control("tillNowDatePicker",html)
    var customHeightDatePicker = get_control("customHeightDatePicker",html)
    var filterDataDatePicker = get_control("filterDataDatePicker",html)
    var customLabelDatePicker = get_control("customLabelDatePicker",html)

    var showValueDatePicker = get_control("showValueDatePicker",html)
    function onConfirm() {
        showValueDatePicker.visible = false
        const text = get_control('show_text')
        text.innerHTML = showValueDatePicker.value
    }
    function filterData(type,value){
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
    function labelRender(type,value) {
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
    return html
}