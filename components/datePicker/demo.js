import { ORUI } from "../base/index.js";
import { get_control } from "../utils/index.js";
export function DatePickerDemo() {
    var html = (ORUI.createElement("orui-space", { direction: "vertical" },
        ORUI.createElement("orui-title", { text: "datepicker\u57FA\u672C\u4F7F\u7528\u65B9\u6CD5" },
            ORUI.createElement("orui-button", { text: "\u5C55\u793ADatePicker", onClick: () => { basicDatePicker.visible = true; } }),
            ORUI.createElement("orui-date-picker", { ui_name: "basicDatePicker", onConfirm: () => { basicDatePicker.visible = false; }, onCancel: () => { basicDatePicker.visible = false; }, max: "2033", min: "1930" })),
        ORUI.createElement("orui-title", { text: "datepicker\u7CBE\u5EA6\u5230\u79D2" },
            ORUI.createElement("orui-button", { ui_name: "btn2", text: "\u7CBE\u5EA6\u4E3A\u79D2", onClick: () => { customPrecisionDatePicker.visible = true; } }),
            ORUI.createElement("orui-date-picker", { ui_name: "customPrecisionDatePicker", onConfirm: () => { customPrecisionDatePicker.visible = false; }, onCancel: () => { customPrecisionDatePicker.visible = false; }, precision: "second" })),
        ORUI.createElement("orui-title", { text: "datepicker\u5468\u9009\u62E9\u5668" },
            ORUI.createElement("orui-button", { ui_name: "btn3", text: "\u5468\u9009\u62E9\u5668", onClick: () => { weekDatePicker.visible = true; } }),
            ORUI.createElement("orui-date-picker", { ui_name: "weekDatePicker", onConfirm: () => { weekDatePicker.visible = false; }, onCancel: () => { weekDatePicker.visible = false; }, precision: "week" })),
        ORUI.createElement("orui-title", { text: "datepicker\u8FC7\u6EE4\u6570\u636E" },
            ORUI.createElement("orui-button", { ui_name: "btn3", text: "\u8FC7\u6EE4\u6570\u636E", onClick: () => { filterDataDatePicker.visible = true; } }),
            ORUI.createElement("orui-date-picker", { ui_name: "filterDataDatePicker", filter: filterData, onConfirm: () => { filterDataDatePicker.visible = false; }, onCancel: () => { filterDataDatePicker.visible = false; }, precision: "day" })),
        ORUI.createElement("orui-title", { text: "datepicker\u81EA\u5B9A\u4E49\u6BCF\u9879\u5185\u5BB9" },
            ORUI.createElement("orui-button", { ui_name: "btn3", text: "\u81EA\u5B9A\u4E49\u6BCF\u9879\u5185\u5BB9", onClick: () => { customLabelDatePicker.visible = true; } }),
            ORUI.createElement("orui-date-picker", { ui_name: "customLabelDatePicker", renderLabel: labelRender, onConfirm: () => { customLabelDatePicker.visible = false; }, onCancel: () => { customLabelDatePicker.visible = false; }, precision: "day" })),
        ORUI.createElement("orui-title", { text: "datepicker\u81F3\u4ECA" },
            ORUI.createElement("orui-button", { ui_name: "btn4", text: "\u81F3\u4ECA", onClick: () => { tillNowDatePicker.visible = true; } }),
            ORUI.createElement("orui-date-picker", { ui_name: "tillNowDatePicker", onConfirm: () => { tillNowDatePicker.visible = false; }, onCancel: () => { tillNowDatePicker.visible = false; }, till_now: "true" })),
        ORUI.createElement("orui-title", { text: "datepicker\u81EA\u5B9A\u4E49\u5185\u5BB9\u9AD8\u5EA6" },
            ORUI.createElement("orui-button", { ui_name: "btn5", text: "\u81EA\u5B9A\u4E49\u5185\u5BB9\u9AD8\u5EA6", onClick: () => { customHeightDatePicker.visible = true; } }),
            ORUI.createElement("orui-date-picker", { ui_name: "customHeightDatePicker", onConfirm: () => { customHeightDatePicker.visible = false; }, onCancel: () => { customHeightDatePicker.visible = false; }, item_height: "50" })),
        ORUI.createElement("orui-title", { text: "datepicker\u5C55\u793Avalue" },
            ORUI.createElement("div", { style: "display: flex;align-items: center" },
                ORUI.createElement("orui-button", { ui_name: "btn6", text: "\u5C55\u793Avalue", onClick: () => { showValueDatePicker.visible = true; } }),
                ORUI.createElement("span", { ui_name: "show_text" })),
            ORUI.createElement("orui-date-picker", { onConfirm: onConfirm, onCancel: () => { showValueDatePicker.visible = false; }, ui_name: "showValueDatePicker" }))));
    var basicDatePicker = get_control("basicDatePicker", html);
    var customPrecisionDatePicker = get_control("customPrecisionDatePicker", html);
    var weekDatePicker = get_control("weekDatePicker", html);
    var tillNowDatePicker = get_control("tillNowDatePicker", html);
    var customHeightDatePicker = get_control("customHeightDatePicker", html);
    var filterDataDatePicker = get_control("filterDataDatePicker", html);
    var customLabelDatePicker = get_control("customLabelDatePicker", html);
    var showValueDatePicker = get_control("showValueDatePicker", html);
    function onConfirm() {
        showValueDatePicker.visible = false;
        const text = get_control('show_text');
        text.innerHTML = showValueDatePicker.value;
    }
    function filterData(type, value) {
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
    function labelRender(type, value) {
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
    return html;
}
