import { ORUI } from "../base/index.js";
export function PickerViewDemo() {
    const _data = [
        {
            data: [
                {
                    name: 'mon',
                    display_name: '周一'
                },
                {
                    name: 'tur',
                    display_name: '周二'
                },
                {
                    name: 'wed',
                    display_name: '周三'
                },
                {
                    name: 'thur',
                    display_name: '周四'
                },
                {
                    name: 'fri',
                    display_name: '周五'
                }
            ],
            name: "weekday",
        },
        {
            data: [
                {
                    name: 'am',
                    display_name: '上午'
                },
                {
                    name: 'pm',
                    display_name: '下午'
                }
            ],
            name: "time",
        }
    ];
    const _value = {
        weekday: 'fri',
        time: 'pm'
    };
    const html = (ORUI.createElement("orui-space", { direction: "vertical" },
        ORUI.createElement("orui-title", { text: "pickerView\u57FA\u672C\u4F7F\u7528\u65B9\u6CD5" },
            ORUI.createElement("orui-picker-view", { data: _data })),
        ORUI.createElement("orui-title", { text: "pickerView\u81EA\u5B9A\u4E49\u9AD8\u5EA6" },
            ORUI.createElement("orui-picker-view", { data: _data, style: "height: 300px" })),
        ORUI.createElement("orui-title", { text: "pickerView\u5185\u5BB9\u9AD8\u5EA6" },
            ORUI.createElement("orui-picker-view", { data: _data, item_height: 48 })),
        ORUI.createElement("orui-title", { text: "pickerView\u6709\u9ED8\u8BA4\u9009\u4E2D\u503C" },
            ORUI.createElement("orui-picker-view", { data: _data, value: _value, style: "height: 300px" }))));
    return html;
}
