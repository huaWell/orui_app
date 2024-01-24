import { ORUI } from "../base/index.js";
export function CheckListDemo() {
    const data1 = [
        {
            name: 'A',
            content: 'A'
        },
        {
            name: 'B',
            content: 'B'
        },
        {
            name: 'C',
            content: 'C',
            disabled: true
        },
        {
            name: 'D',
            content: 'D',
            readonly: true
        }
    ];
    const data2 = [
        {
            name: 'A',
            content: 'A'
        },
        {
            name: 'B',
            content: 'B'
        },
        {
            name: 'C',
            content: 'C'
        }
    ];
    const value = ['B'];
    const html = (ORUI.createElement("orui-space", { direction: "vertical" },
        ORUI.createElement("orui-title", { text: "checkList\u57FA\u672C\u4F7F\u7528" },
            ORUI.createElement("orui-check-list", { data: data1, value: value })),
        ORUI.createElement("orui-title", { text: "\u53EF\u591A\u9009" },
            ORUI.createElement("orui-check-list", { data: data2, value: value, multiple: "true" })),
        ORUI.createElement("orui-title", { text: "\u4E0D\u53EF\u6E05\u9664" },
            ORUI.createElement("orui-check-list", { data: data2, value: value, clearable: "false" })),
        ORUI.createElement("orui-title", { text: "\u81EA\u5B9A\u4E49\u53F3\u4FA7\u5185\u5BB9" },
            ORUI.createElement("orui-check-list", { data: data2, value: value, extra: "<orui-icon path='/components/images/smile.svg'></orui-icon>", active_extra: "<orui-icon path='/components/images/smile.svg' color='var(--orui-color-primary)'></orui-icon>" })),
        ORUI.createElement("orui-title", { text: "\u6574\u7EC4\u53EA\u8BFB" },
            ORUI.createElement("orui-check-list", { data: data2, value: value, readonly: "true" })),
        ORUI.createElement("orui-title", { text: "\u6574\u7EC4\u7981\u7528" },
            ORUI.createElement("orui-check-list", { data: data2, value: value, disabled: "true" }))));
    return html;
}
