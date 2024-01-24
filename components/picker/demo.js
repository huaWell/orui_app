import { ORUI } from "../base/index.js";
import { get_control } from "../utils/index.js";
export function Picker() {
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
    const html = (ORUI.createElement("orui-space", { direction: "vertical" },
        ORUI.createElement("orui-title", { text: "picker\u57FA\u672C\u4F7F\u7528\u65B9\u6CD5" },
            ORUI.createElement("orui-button", { ui_name: "btn1", text: "\u5C55\u793Apicker", onClick: show_basic_picker }),
            ORUI.createElement("orui-picker", { ui_name: "basicPicker", data: _data, onChange: onChange, onCancel: close_picker, onConfirm: close_picker })),
        ORUI.createElement("orui-title", { text: "picker\u81EA\u5B9A\u4E49\u5185\u5BB9height" },
            ORUI.createElement("orui-button", { ui_name: "btn2", text: "\u81EA\u5B9A\u4E49\u5185\u5BB9\u9AD8\u5EA6picker", onClick: show_custom_height_picker }),
            ORUI.createElement("orui-picker", { ui_name: "custom_item_height_picker", data: _data, onChange: onChange, onCancel: close_picker, onConfirm: close_picker, item_height: "50" })),
        ORUI.createElement("orui-title", { text: "picker\u70B9\u51FB\u8499\u5C42\u4E0D\u5173\u95ED" },
            ORUI.createElement("orui-button", { ui_name: "btn3", text: "\u70B9\u51FB\u8499\u5C42\u4E0D\u5173\u95ED", onClick: show_not_close_mask_picker }),
            ORUI.createElement("orui-picker", { ui_name: "not_close_mask_picker", data: _data, onChange: onChange, onCancel: close_picker, onConfirm: close_picker, close_on_mask_click: "false" })),
        ORUI.createElement("orui-title", { text: "picker\u663E\u793Avalue\u503C" },
            ORUI.createElement("div", { style: "display: flex;align-items: center" },
                ORUI.createElement("orui-button", { ui_name: "btn4", text: "\u663E\u793Avalue", onClick: show_value_picker }),
                ORUI.createElement("span", { ui_name: "value_picker" })),
            ORUI.createElement("orui-picker", { ui_name: "show_value_picker", data: _data, onChange: onChange, onConfirm: valueConfirm, onCancel: close_picker }))));
    const basicPicker = get_control('basicPicker', html);
    const customItemHeightPicker = get_control("custom_item_height_picker", html);
    const notCloseMaskPicker = get_control("not_close_mask_picker", html);
    const showValuePicker = get_control("show_value_picker", html);
    function show_basic_picker() {
        basicPicker.visible = true;
    }
    function show_custom_height_picker() {
        customItemHeightPicker.visible = true;
    }
    function show_not_close_mask_picker() {
        notCloseMaskPicker.visible = true;
    }
    function show_value_picker() {
        showValuePicker.visible = true;
    }
    function close_picker() {
        basicPicker.visible = false;
        customItemHeightPicker.visible = false;
        notCloseMaskPicker.visible = false;
        showValuePicker.visible = false;
    }
    function onChange(ev) {
        console.log(ev);
    }
    function valueConfirm() {
        const text = get_control('value_picker');
        let _value = "";
        const keys = Object.keys(showValuePicker.value);
        for (const key of keys) {
            _value = _value + ' - ' + showValuePicker.value[key].display_name;
        }
        text.innerHTML = _value.replace(' - ', "");
        close_picker();
    }
    return html;
}
