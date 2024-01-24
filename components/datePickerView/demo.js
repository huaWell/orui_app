import { ORUI } from "../base/index.js";
export function DatePickerViewDemo() {
    let html = (ORUI.createElement("orui-space", { direction: "vertical" },
        ORUI.createElement("orui-title", { text: "DatePickerView\u57FA\u672C\u4F7F\u7528\u65B9\u6CD5" },
            ORUI.createElement("orui-date-picker-view", { ui_name: "ctr1" })),
        ORUI.createElement("orui-title", { text: "DatePickerView\u7CBE\u786E\u5230\u79D2" },
            ORUI.createElement("orui-date-picker-view", { ui_name: "ctr2", precision: "second" })),
        ORUI.createElement("orui-title", { text: "DatePickerView\u5E74\u4EFD\u9650\u5236\u8303\u56F4" },
            ORUI.createElement("orui-date-picker-view", { ui_name: "ctr2", min: "1932", max: "2050", precision: "second" })),
        ORUI.createElement("orui-title", { text: "DatePickerView\u81EA\u5B9A\u4E49\u9AD8\u5EA6" },
            ORUI.createElement("orui-date-picker-view", { ui_name: "ctr3", style: "height: 500px" })),
        ORUI.createElement("orui-title", { text: "DatePickerView\u81EA\u5B9A\u4E49\u6BCF\u5217\u5185\u5BB9" },
            ORUI.createElement("orui-date-picker-view", { ui_name: "ctr4", custom: "true", renderLabel: renderLabel, onCahnge: change })),
        ORUI.createElement("orui-title", { text: "DatePickerView\u8FC7\u6EE4\u6570\u636E" },
            ORUI.createElement("orui-date-picker-view", { custom: "true", filter: renderLabelFilter, onChange: change })),
        ORUI.createElement("orui-title", { text: "DatePickerView\u5468\u9009\u62E9\u5668" },
            ORUI.createElement("orui-date-picker-view", { ui_name: "ctr5", precision: "week-day" })),
        ORUI.createElement("orui-title", { text: "DatePickerView\u81F3\u4ECA" },
            ORUI.createElement("orui-date-picker-view", { ui_name: "ctr6", till_now: "true" }))));
    function renderLabel(type, value) {
        switch (type) {
            case 'year':
                return value + '年';
            case 'month':
                return value + '月';
            case 'day':
                return value + '日';
            default:
                return value;
        }
    }
    function change(ev) {
        const { data, type } = ev.detail;
        console.log(data, type);
    }
    function renderLabelFilter(type, value) {
        switch (type) {
            case 'year':
                if (value >= 2017) {
                    return true;
                }
                return false;
            case 'month':
                if (value > 3 && value < 12) {
                    return true;
                }
                return false;
            case 'day':
                if (value > 3 && value < 12) {
                    return true;
                }
                return false;
                break;
        }
    }
    return html;
}
