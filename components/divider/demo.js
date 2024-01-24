import { ORUI } from "../base/index.js";
export function DividerDemo() {
    const html = (ORUI.createElement("orui-space", { direction: "vertical" },
        ORUI.createElement("orui-title", { text: "divider\u57FA\u672C\u4F7F\u7528" },
            ORUI.createElement("orui-divider", { no_content: "true" })),
        ORUI.createElement("orui-title", { text: "divider\u5E26\u5185\u5BB9" },
            ORUI.createElement("orui-space", { direction: "vertical" },
                ORUI.createElement("orui-divider", null,
                    ORUI.createElement("span", null, "\u5E26\u5185\u5BB9")),
                ORUI.createElement("orui-divider", { content_direction: "left" },
                    ORUI.createElement("span", null, "\u5E26\u5185\u5BB9")),
                ORUI.createElement("orui-divider", { content_direction: "right" },
                    ORUI.createElement("span", null, "\u5E26\u5185\u5BB9")))),
        ORUI.createElement("orui-title", { text: "\u7AD6\u5411\u5206\u5272\u7EBF" },
            ORUI.createElement("div", { style: "display: flex;height: 18px;align-items: center" },
                "Text",
                ORUI.createElement("orui-divider", { direction: "vertical", style: "height: 100%" }),
                "text",
                ORUI.createElement("orui-divider", { direction: "vertical", style: "height: 100%" }),
                "text"))));
    return html;
}
