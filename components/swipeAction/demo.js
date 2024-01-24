import { ORUI } from "../base/index.js";
import { get_control } from "../utils/index.js";
export function SwipeActionDemo() {
    let count = 1;
    const add_skill = () => {
        const info = {
            name: `skill${count}`,
            display_name: '技能',
            is_readonly: 0,
            is_visible: 1,
            is_nullable: 0,
            editor: 'orui-input',
            format: JSON.stringify({
                placeholder: `请输入技能名称`
            })
        };
        const form_item = form.create_form_item(info);
        const swipe_action = (ORUI.createElement("orui-swipe-action", { right_actions: [
                {
                    key: 'delete',
                    text: '删除',
                    color: 'danger',
                    is_auto_close: false
                }
            ], onAction: (e) => {
                const { key } = e.detail;
                const item = e.target;
                if (key == 'delete') {
                    item.remove();
                }
            } }));
        swipe_action.append(form_item);
        form.append(swipe_action);
        count++;
    };
    const html = (ORUI.createElement("orui-grid", null,
        ORUI.createElement("orui-row", { grow: "0" },
            ORUI.createElement("orui-title", { text: "\u57FA\u672C\u4F7F\u7528" },
                ORUI.createElement("orui-swipe-action", { right_actions: [
                        {
                            key: 'delete',
                            text: '删除',
                            color: 'danger'
                        }
                    ] },
                    ORUI.createElement("orui-input", null)))),
        ORUI.createElement("orui-row", { grow: "0" },
            ORUI.createElement("orui-title", { text: "\u81EA\u5B9A\u4E49\u4E8B\u4EF6" },
                ORUI.createElement("orui-space", { direction: "vertical" },
                    ORUI.createElement("orui-form", { ui_name: "form", layout: "horizontal", data: {
                            name: '张三',
                            age: 30,
                            sex: 1
                        } },
                        ORUI.createElement("orui-form-item", { name: "name", display_name: "\u59D3\u540D", is_nullable: "false" },
                            ORUI.createElement("orui-input", null)),
                        ORUI.createElement("orui-form-item", { name: "age", display_name: "\u5E74\u9F84", is_readonly: "true" },
                            ORUI.createElement("orui-input", null)),
                        ORUI.createElement("orui-form-item", { name: "sex", display_name: "\u6027\u522B" },
                            ORUI.createElement("orui-radio", { data: [
                                    { name: 1, display_name: '男' },
                                    { name: 0, display_name: '女' }
                                ] }))),
                    ORUI.createElement("orui-button", { block: "fill", type: "fill", size: "large", color: "primary", text: "\u6DFB\u52A0\u6280\u80FD", onClick: add_skill }))))));
    const form = get_control('form', html);
    return html;
}
