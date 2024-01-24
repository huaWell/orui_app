import { ORUI } from "../base/index.js";
export function IconDemo() {
    const html = (ORUI.createElement("orui-space", { direction: "vertical" },
        ORUI.createElement("orui-title", { text: "icon\u7684\u57FA\u672C\u4F7F\u7528" },
            ORUI.createElement("orui-icon", { style: "display: inline-block", path: "/components/images/close.svg" })),
        ORUI.createElement("orui-title", { text: "icon\u4FEE\u6539\u989C\u8272" },
            ORUI.createElement("orui-icon", { style: "display: inline-block", path: "/components/images/close.svg", color: "red" })),
        ORUI.createElement("orui-title", { text: "icon\u4FEE\u6539\u5C3A\u5BF8" },
            ORUI.createElement("orui-icon", { style: "display: inline-block", path: "/components/images/close.svg", width: "2rem", height: "2rem" }))));
    return html;
}
