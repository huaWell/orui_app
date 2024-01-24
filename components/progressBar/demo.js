import { ORUI } from "../base/index.js";
export function ProgressBarDemo() {
    const html = (ORUI.createElement("orui-space", { direction: "vertical" },
        ORUI.createElement("orui-title", { text: "progressBar\u57FA\u672C\u4F7F\u7528\u65B9\u6CD5" },
            ORUI.createElement("orui-progress-bar", { ui_name: "basicProgressBar", value: "40", show_text: "true" })),
        ORUI.createElement("orui-title", { text: "progressBar\u663E\u793A\u8FDB\u5EA6\u6587\u5B57" },
            ORUI.createElement("orui-progress-bar", { value: "40", show_text: "true" })),
        ORUI.createElement("orui-title", { text: "progressBar\u81EA\u5B9A\u4E49\u8FDB\u5EA6\u6587\u5B57" },
            ORUI.createElement("orui-progress-bar", { value: "40", show_text: "true", text: "\u5DF2\u5B8C\u62103/5\u6B65" })),
        ORUI.createElement("orui-title", { text: "progressBar\u6307\u5B9A\u7EBF\u6761\u5BBD\u5EA6" },
            ORUI.createElement("orui-space", { direction: "vertical" },
                ORUI.createElement("orui-progress-bar", { value: "40", custom_style: "--track-width: 0.25rem;" }),
                ORUI.createElement("orui-progress-bar", { value: "60", custom_style: "--track-width: 1rem;" }))),
        ORUI.createElement("orui-title", { text: "\u76F4\u89D2\u8FDB\u5EA6\u6761" },
            ORUI.createElement("orui-progress-bar", { value: "40", rounded: "false" })),
        ORUI.createElement("orui-title", { text: "progressBar\u6307\u5B9A\u7EBF\u6761\u989C\u8272" },
            ORUI.createElement("orui-space", { direction: "vertical" },
                ORUI.createElement("orui-progress-bar", { value: "40", custom_style: "--fill-color: var(--orui-color-success);" }),
                ORUI.createElement("orui-progress-bar", { value: "60", custom_style: "--fill-color: var(--orui-color-warning)" }),
                ORUI.createElement("orui-progress-bar", { value: "40", custom_style: "--fill-color: var(--orui-color-danger);" }),
                ORUI.createElement("orui-progress-bar", { value: "60", custom_style: "--fill-color: linear-gradient(to right, var(--orui-color-primary), var(--orui-color-success))" }))),
        ORUI.createElement("orui-title", { text: "\u6307\u5B9A\u8F68\u9053\u989C\u8272" },
            ORUI.createElement("orui-progress-bar", { value: "40", custom_style: "--track-color: #CDE2FF;" }))));
    return html;
}
