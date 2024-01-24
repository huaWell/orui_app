import { ORUI } from "../base/index.js";
export function demo() {
    const html = (ORUI.createElement("orui-space", { direction: "vertical", style: "width: 100%" },
        ORUI.createElement("orui-title", { text: "\u6ED1\u52A8\u6761\u57FA\u672C\u4F7F\u7528\u65B9\u6CD5" },
            ORUI.createElement("orui-slider", { ui_name: "slider", step: "1", max: "10", min: "0" })),
        ORUI.createElement("orui-title", { text: "step\u4E3A\u5C0F\u6570" },
            ORUI.createElement("orui-slider", { step: "0.1", max: "1", min: "0" })),
        ORUI.createElement("orui-title", { text: "\u521D\u59CB\u503C\u4E0D\u4E3A0" },
            ORUI.createElement("orui-slider", { step: "0.1", max: "1", value: "0.2" })),
        ORUI.createElement("orui-title", { text: "disabled" },
            ORUI.createElement("orui-slider", { value: "10", disabled: "true" })),
        ORUI.createElement("orui-title", { text: "\u662F\u5426\u663E\u793A\u523B\u5EA6" },
            ORUI.createElement("orui-slider", { step: "1", max: "10", min: "0", value: "1", ticks: "true" })),
        ORUI.createElement("orui-title", { text: "\u662F\u5426\u663E\u793A\u523B\u5EA6\u6807\u8BB0" },
            ORUI.createElement("orui-slider", { step: "0.1", max: "1", min: "0", value: "1", ticks: "true", marks: "true" })),
        ORUI.createElement("orui-title", { text: "\u81EA\u5B9A\u4E49\u989C\u8272" },
            ORUI.createElement("orui-slider", { color: "red" })),
        ORUI.createElement("orui-title", { text: "\u81EA\u5B9A\u4E49\u56FE\u6807" },
            ORUI.createElement("orui-slider", { color: "red", icon: "/components/images/love.svg" }))));
    return html;
}
