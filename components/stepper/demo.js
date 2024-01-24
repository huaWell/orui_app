import { ORUI } from "../base/index.js";
export function demo() {
    const html = (ORUI.createElement("orui-grid", null,
        ORUI.createElement("orui-row", { grow: "0" },
            ORUI.createElement("orui-space", { direction: "vertical", style: "width: 100%" },
                ORUI.createElement("orui-title", { text: "\u6B65\u8FDB\u5668\u57FA\u672C\u7528\u6CD5" },
                    ORUI.createElement("orui-stepper", { ui_name: "step1" })),
                ORUI.createElement("orui-title", { text: "\u521D\u59CB\u503C\u4E0D\u4E3A0" },
                    ORUI.createElement("orui-stepper", { value: "1" })),
                ORUI.createElement("orui-title", { text: "\u6B65\u957F\u8BBE\u7F6E" },
                    ORUI.createElement("orui-stepper", { step: "10" })),
                ORUI.createElement("orui-title", { text: "\u683C\u5F0F\u5316\u5230\u5C0F\u6570" },
                    ORUI.createElement("orui-stepper", { step: "1", digits: "1" })),
                ORUI.createElement("orui-title", { text: "\u9650\u5236\u8F93\u5165\u8303\u56F4" },
                    ORUI.createElement("orui-stepper", { step: "1", digits: "1", min: "-5", max: "5" })),
                ORUI.createElement("orui-title", { text: "\u81EA\u5B9A\u4E49width" },
                    ORUI.createElement("orui-stepper", { style: "width: 150px" })),
                ORUI.createElement("orui-title", { text: "\u5141\u8BB8\u6E05\u7A7A" },
                    ORUI.createElement("orui-stepper", { allow_empty: "true" })),
                ORUI.createElement("orui-title", { text: "\u7981\u7528\u72B6\u6001" },
                    ORUI.createElement("orui-stepper", { disabled: "true" }))))));
    return html;
}
