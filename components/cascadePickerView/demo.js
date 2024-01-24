import { ORUI } from "../base/index.js";
export function CascaderPickerViewDemo() {
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
        name: 'province'
    };
    const _value = {
        "province": "江苏",
        "another": "苏州"
    };
    const lazy_data = {
        data: [
            {
                name: '浙江',
                display_name: '浙江',
            },
            {
                name: '江苏',
                display_name: '江苏',
            },
        ],
        name: 'province',
    };
    const lazy_value = {
        "province": "江苏",
    };
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
    async function onChange(ev) {
        const { data, value } = ev.detail;
        console.log(data, value, 'change');
    }
    const html = (ORUI.createElement("orui-space", { direction: "vertical" },
        ORUI.createElement("orui-title", { text: "pickerCascadePickerView\u57FA\u672C\u4F7F\u7528\u65B9\u6CD5" },
            ORUI.createElement("orui-cascader-picker-view", { data: _data, ui_name: "cascader_picker_view" })),
        ORUI.createElement("orui-title", { text: "pickerCascerPickerView\u6709\u9ED8\u8BA4\u503C" },
            ORUI.createElement("orui-cascader-picker-view", { data: _data, value: _value, ui_name: "cascader_picker_view1" })),
        ORUI.createElement("orui-title", { text: "pickerCascerPickerView\u61D2\u52A0\u8F7D" },
            ORUI.createElement("orui-cascader-picker-view", { data: lazy_data, value: lazy_value, lazy_load: lazy_load_fun, onChange: onChange, ui_name: "cascader_picker_view2" }))));
    return html;
}
