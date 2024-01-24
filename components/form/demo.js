import { ORUI } from "../base/index.js";
import { get_control, mock_get_data } from "../utils/index.js";
export function FormDemo() {
    //region 基本使用
    const radio_data = [
        { name: 1, display_name: '男' },
        { name: 0, display_name: '女' }
    ];
    //添加自定义验证
    const validate = async ({ item, name, value }) => {
        const msg = await mock_get_data('自定义验证');
        item.message = msg;
    };
    const submit = async (form) => {
        const res = await form.validate();
        console.log(res);
    };
    const submit1 = () => {
        submit(form);
    };
    const remove_validate = () => {
        name.validate = undefined;
        submit1();
    };
    //endregion
    //region 水平布局的form
    const submit2 = () => {
        submit(horizontal_form);
    };
    //endregion
    //region 带info的form
    let infos = [
        {
            name: 'name',
            display_name: '姓名',
            is_readonly: 0,
            is_visible: 1,
            is_nullable: 0,
            editor: 'orui-input',
            format: {
                placeholder: '请输入姓名'
            }
        },
        {
            name: 'age',
            display_name: '年龄',
            is_readonly: 1,
            is_visible: 1,
            is_nullable: 1,
            editor: 'orui-input',
            format: {
                placeholder: '请输入年龄'
            }
        },
        {
            name: 'sex',
            display_name: '性别',
            is_readonly: 0,
            is_visible: 1,
            is_nullable: 0,
            editor: 'orui-radio',
            format: {
                data: [
                    { name: 1, display_name: '男' },
                    { name: 0, display_name: '女' }
                ]
            }
        }
    ];
    infos.forEach(info => {
        info.format = JSON.stringify(info.format);
    });
    const submit3 = () => {
        submit(infos_form);
    };
    //endregion
    const html = (ORUI.createElement("orui-grid", null,
        ORUI.createElement("orui-row", { grow: "0" },
            ORUI.createElement("orui-title", { text: "\u57FA\u672C\u7528\u6CD5" },
                ORUI.createElement("orui-space", { direction: "vertical" },
                    ORUI.createElement("orui-form", { ui_name: "form", data: {
                            name: '张三',
                            age: 30,
                            sex: 0
                        } },
                        ORUI.createElement("orui-form-item", { name: "name", display_name: "\u59D3\u540D", is_nullable: "false", validate: validate, ui_name: "name" },
                            ORUI.createElement("orui-input", null)),
                        ORUI.createElement("orui-form-item", { name: "age", display_name: "\u5E74\u9F84", is_readonly: "true" },
                            ORUI.createElement("orui-input", null)),
                        ORUI.createElement("orui-form-item", { name: "sex", display_name: "\u6027\u522B" },
                            ORUI.createElement("orui-radio", { data: radio_data }))),
                    ORUI.createElement("orui-button", { block: "fill", type: "fill", size: "large", color: "primary", text: "\u63D0\u4EA4", onClick: submit1 }),
                    ORUI.createElement("orui-button", { block: "fill", type: "fill", size: "large", text: "\u79FB\u9664\u81EA\u5B9A\u4E49\u9A8C\u8BC1", onClick: remove_validate })))),
        ORUI.createElement("orui-row", { grow: "0" },
            ORUI.createElement("orui-title", { text: "\u6C34\u5E73\u5E03\u5C40\u7684form" },
                ORUI.createElement("orui-space", { direction: "vertical" },
                    ORUI.createElement("orui-form", { ui_name: "horizontal_form", layout: "horizontal", data: {
                            name: '李四',
                            age: 26,
                            sex: 1
                        } },
                        ORUI.createElement("orui-form-item", { name: "name", display_name: "\u59D3\u540D", is_nullable: "false" },
                            ORUI.createElement("orui-input", null)),
                        ORUI.createElement("orui-form-item", { name: "age", display_name: "\u5E74\u9F84", is_readonly: "true" },
                            ORUI.createElement("orui-input", null)),
                        ORUI.createElement("orui-form-item", { name: "sex", display_name: "\u6027\u522B" },
                            ORUI.createElement("orui-radio", { data: radio_data }))),
                    ORUI.createElement("orui-button", { block: "fill", type: "fill", size: "large", color: "primary", text: "\u63D0\u4EA4", onClick: submit2 })))),
        ORUI.createElement("orui-row", { grow: "0" },
            ORUI.createElement("orui-title", { text: "\u5E26info\u7684form" },
                ORUI.createElement("orui-space", { direction: "vertical" },
                    ORUI.createElement("orui-form", { ui_name: "infos_form", infos: infos, data: {
                            name: '王五',
                            age: 23,
                            sex: 0
                        } }),
                    ORUI.createElement("orui-button", { block: "fill", type: "fill", size: "large", color: "primary", text: "\u63D0\u4EA4", onClick: submit3 }))))));
    const form = get_control('form', html);
    const name = get_control('name', html);
    const horizontal_form = get_control('horizontal_form', html);
    const infos_form = get_control('infos_form', html);
    return html;
}
