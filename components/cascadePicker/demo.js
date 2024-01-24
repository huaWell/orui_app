import { ORUI } from "../base/index.js";
import { get_control } from "../utils/index.js";
export function CascaderPickerDemo() {
    const _data = {
        data: [
            {
                name: '浙江',
                display_name: '浙江',
                children: {
                    data: [
                        {
                            name: '杭州',
                            display_name: '杭州',
                        },
                        {
                            name: '宁波',
                            display_name: '宁波',
                        }
                    ],
                    name: 'another',
                }
            },
            {
                name: '江苏',
                display_name: '江苏',
                children: {
                    data: [
                        {
                            name: '南京',
                            display_name: '南京',
                        },
                        {
                            name: '苏州',
                            display_name: '苏州',
                        },
                    ],
                    name: 'another'
                }
            },
        ],
        name: 'province',
    };
    const _value = {
        "province": "江苏",
        "another": "苏州"
    };
    const html = (ORUI.createElement("orui-space", { direction: "vertical" },
        ORUI.createElement("orui-title", { text: "CascederPicker\u57FA\u672C\u4F7F\u7528\u65B9\u6CD5" },
            ORUI.createElement("orui-button", { ui_name: "btn1", text: "\u5C55\u793ACascederPicker", onClick: show_basic_cascader }),
            ORUI.createElement("orui-cascader-picker", { ui_name: "basicCascederPicker", data: _data, value: _value, onChange: onChange, onCancel: close_picker, onConfirm: close_picker })),
        ORUI.createElement("orui-title", { text: "CascederPicker\u61D2\u52A0\u8F7D" },
            ORUI.createElement("orui-button", { ui_name: "btn2", text: "\u61D2\u52A0\u8F7D", onClick: show_lazy_cascader }),
            ORUI.createElement("orui-cascader-picker", { ui_name: "lazyLoadCascederPicker", data: { data: [{ name: '浙江', display_name: '浙江', }, { name: '江苏', display_name: '江苏', },], name: 'province', }, value: { "province": "江苏", }, lazy_load: lazy_load_fun, onClose: close_picker, onCancel: close_picker, onConfirm: close_picker })),
        ORUI.createElement("orui-title", { text: "CascederPicker\u81EA\u5B9A\u4E49\u5185\u5BB9\u9AD8\u5EA6" },
            ORUI.createElement("orui-button", { ui_name: "btn3", text: "\u81EA\u5B9A\u4E49\u5185\u5BB9\u9AD8\u5EA6", onClick: show_custom_cascader }),
            ORUI.createElement("orui-cascader-picker", { ui_name: "customHeightCascederPicker", onClose: close_picker, data: _data, value: _value, onCancel: close_picker, onConfirm: close_picker, item_height: "50" })),
        ORUI.createElement("orui-title", { text: "CascederPicker\u81EA\u5B9A\u4E49\u6309\u94AE\u5185\u5BB9" },
            ORUI.createElement("orui-button", { ui_name: "btn4", text: "\u81EA\u5B9A\u4E49\u6309\u94AE\u5185\u5BB9", onClick: show_custom_button_cascader }),
            ORUI.createElement("orui-cascader-picker", { ui_name: "customButtonTextCascederPicker", onClose: close_picker, data: _data, value: _value, onCancel: close_picker, onConfirm: close_picker, confirm_text: "\u63D0\u4EA4", cancel_text: "\u5173\u95ED" })),
        ORUI.createElement("orui-title", { text: "CascederPicker\u5C55\u793A\u9009\u4E2D\u503C" },
            ORUI.createElement("div", { style: "display: flex;align-items: center" },
                ORUI.createElement("orui-button", { ui_name: "btn5", text: "\u5C55\u793A\u503C", onClick: show_value_cascader }),
                ORUI.createElement("span", { ui_name: "show_text" })),
            ORUI.createElement("orui-cascader-picker", { ui_name: "showValueCascederPicker", onClose: close_picker, data: _data, value: _value, onCancel: close_picker, onConfirm: valueConfirm }))));
    const basicCascederPicker = get_control("basicCascederPicker", html);
    const lazyLoadCascederPicker = get_control("lazyLoadCascederPicker", html);
    const customHeightCascederPicker = get_control("customHeightCascederPicker", html);
    const customButtonTextCascederPicker = get_control("customButtonTextCascederPicker", html);
    const showValueCascederPicker = get_control("showValueCascederPicker", html);
    let is_init = false;
    function lazy_load_fun(name) {
        return new Promise(resolve => {
            let res;
            if (name == '浙江') {
                const obj = {
                    data: [
                        {
                            name: '杭州',
                            display_name: '杭州',
                        },
                        {
                            name: '宁波',
                            display_name: '宁波',
                        }
                    ],
                    name: 'another',
                };
                //@ts-ignore
                obj.value = is_init ? "" : "宁波";
                is_init = true;
                res = obj;
            }
            else if (name == '江苏') {
                const obj = {
                    data: [
                        {
                            name: '南京',
                            display_name: '南京',
                        },
                        {
                            name: '苏州',
                            display_name: '苏州',
                        },
                    ],
                    name: 'another',
                };
                //@ts-ignore
                obj.value = is_init ? "" : '苏州';
                is_init = true;
                res = obj;
            }
            else {
                res = {};
            }
            resolve(res);
        });
    }
    function show_value_cascader() {
        showValueCascederPicker.visible = true;
    }
    function show_basic_cascader() {
        basicCascederPicker.visible = true;
    }
    function show_lazy_cascader() {
        lazyLoadCascederPicker.visible = true;
    }
    function show_custom_cascader() {
        customHeightCascederPicker.visible = true;
    }
    function show_custom_button_cascader() {
        customButtonTextCascederPicker.visible = true;
    }
    function close_picker() {
        basicCascederPicker.visible = false;
        customHeightCascederPicker.visible = false;
        lazyLoadCascederPicker.visible = false;
        customButtonTextCascederPicker.visible = false;
        showValueCascederPicker.visible = false;
    }
    function valueConfirm(ev) {
        showValueCascederPicker.visible = false;
        const text = get_control('show_text', html);
        let _value = "";
        const keys = Object.keys(showValueCascederPicker.value);
        for (const key of keys) {
            _value = _value + ' - ' + showValueCascederPicker.value[key].display_name;
        }
        text.innerHTML = _value.replace(' - ', "");
    }
    function onChange(...args) {
        console.log(args);
    }
    return html;
}
