import { ORUI } from "../base/index.js";
export function demo() {
    const _options = [
        {
            name: "first",
            display_name: '选项一',
        },
        {
            name: "second",
            display_name: '选项二',
        },
        {
            name: "third",
            display_name: '选项三',
        },
        {
            name: "forth",
            display_name: '选项四',
        },
        {
            name: "fifth",
            display_name: '选项四'
        },
        {
            name: "sixth",
            display_name: '选项四,选项四',
        },
        {
            name: "seventh",
            display_name: '选项四',
        }
    ];
    const _options_desc = _options.map((item) => {
        item.description = '描述信息';
        return item;
    });
    const _options_dif = [
        {
            name: "first",
            display_name: '选项一',
        },
        {
            name: "second",
            display_name: '选项二',
            disabled: true
        },
        {
            name: "third",
            display_name: '选项三',
            disabled: true
        },
        {
            name: "forth",
            display_name: '选项四',
        },
        {
            name: "fifth",
            display_name: '选项五'
        },
        {
            name: "sixth",
            display_name: '选项六',
        },
        {
            name: "seventh",
            display_name: '选项七',
        }
    ];
    const html = (ORUI.createElement("orui-space", { direction: 'vertical' },
        ORUI.createElement("orui-title", { text: "\u9009\u62E9\u7EC4\u5355\u9009\u57FA\u672C\u7528\u6CD5" },
            ORUI.createElement("orui-selector", { id: "selector1", options: _options, selectable: "false" })),
        ORUI.createElement("orui-title", { text: "\u9009\u62E9\u7EC4\u591A\u9009\u57FA\u672C\u7528\u6CD5" },
            ORUI.createElement("orui-selector", { id: "selector2", options: _options, selectable: "true" })),
        ORUI.createElement("orui-title", { text: "\u9009\u62E9\u7EC4\u5355\u9009\u6709\u9ED8\u8BA4\u503C" },
            ORUI.createElement("orui-selector", { id: "selector3", options: _options, selectable: "false", default_value: "second" })),
        ORUI.createElement("orui-title", { text: "\u9009\u62E9\u7EC4\u591A\u9009\u6709\u9ED8\u8BA4\u503C" },
            ORUI.createElement("orui-selector", { id: "selector4", options: _options, selectable: "true", default_value: "second" })),
        ORUI.createElement("orui-title", { text: "\u9009\u62E9\u7EC4\u6574\u4F53disabled" },
            ORUI.createElement("orui-selector", { id: "selector5", options: _options, selectable: "true", default_value: "second", disabled: "true" })),
        ORUI.createElement("orui-title", { text: "\u591A\u9009\u5355\u9879disabled" },
            ORUI.createElement("orui-selector", { id: "selector9", options: _options_dif, selectable: "true", default_value: "second", columns: "2", clearable: "true" })),
        ORUI.createElement("orui-title", { text: "\u4E24\u680F\u5E03\u5C40" },
            ORUI.createElement("orui-selector", { id: "selector6", options: _options, selectable: "true", columns: "2", default_value: "second" })),
        ORUI.createElement("orui-title", { text: "\u4E09\u680F\u5E03\u5C40" },
            ORUI.createElement("orui-selector", { id: "selector7", options: _options, selectable: "true", columns: "3", default_value: "second" })),
        ORUI.createElement("orui-title", { text: "\u5355\u9009\u5FC5\u987B\u9009\u62E9\u4E00\u9879" },
            ORUI.createElement("orui-selector", { id: "selector8", options: _options, selectable: "false", default_value: "second", columns: "2", clearable: "false" })),
        ORUI.createElement("orui-title", { text: "\u81EA\u5B9A\u4E49\u6837\u5F0F" },
            ORUI.createElement("orui-selector", { id: "selector10", custom_style: "--border-radius:50%", options: _options, selectable: "false", default_value: "second", clearable: "true" })),
        ORUI.createElement("orui-title", { text: "\u6CA1\u6709\u53F3\u4E0B\u89D2\u52FE\u9009" },
            ORUI.createElement("orui-selector", { id: "selector11", custom_style: "--border-radius:50%", options: _options, selectable: "true", default_value: "second", clearable: "true", show_checked_wrap: "false" })),
        ORUI.createElement("orui-title", { text: "\u9009\u9879\u5E26\u63CF\u8FF0" },
            ORUI.createElement("orui-selector", { id: "selector12", options: _options_desc, selectable: "true", default_value: "second", columns: "2", clearable: "true", show_checked_wrap: "false" }))));
    return html;
}
