import { ORUI } from "../base/index.js";
export function RadioDemo() {
    const _data = [
        { name: '2', display_name: 'test1', disabled: 0 },
        { name: '1', display_name: "", disabled: 0 },
        { name: '0', display_name: 'test3', disabled: 0 }
    ];
    const _data1 = [
        { name: '2', display_name: 'test1', disabled: 0 },
        { name: '1', display_name: "", disabled: 0 },
        { name: '0', display_name: 'test3', disabled: 1 }
    ];
    let html = (ORUI.createElement("orui-grid", null,
        ORUI.createElement("orui-space", { direction: "vertical" },
            ORUI.createElement("orui-title", { text: "\u57FA\u672C\u4F7F\u7528\u65B9\u6CD5" },
                ORUI.createElement("orui-radio", { data: _data })),
            ORUI.createElement("orui-title", { text: "\u66F4\u6539\u5C3A\u5BF8" },
                ORUI.createElement("orui-radio", { data: _data, ui_name: "my_radio1", size: "large", selectable: "0" })),
            ORUI.createElement("orui-title", { text: "\u53EF\u591A\u9009" },
                ORUI.createElement("orui-radio", { data: _data, ui_name: "my_radio2", selectable: "1" })),
            ORUI.createElement("orui-title", { text: "\u5355\u4E2A\u6309\u94AEdisabled" },
                ORUI.createElement("orui-radio", { data: _data1, ui_name: "my_radio3" })),
            ORUI.createElement("orui-title", { text: "\u6574\u7EC4disabled" },
                ORUI.createElement("orui-radio", { data: _data, ui_name: "my_radio4", disabled: "true" })))));
    return html;
}
