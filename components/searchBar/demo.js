import { ORUI } from "../base/index.js";
export function SearchBarDemo() {
    const html = (ORUI.createElement("orui-space", { direction: "vertical" },
        ORUI.createElement("orui-title", { text: "\u641C\u7D22\u6846\u57FA\u672C\u4F7F\u7528\u65B9\u6CD5" },
            ORUI.createElement("orui-search-bar", { placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9" })),
        ORUI.createElement("orui-title", { text: "\u65E0\u6E05\u9664\u6309\u94AE" },
            ORUI.createElement("orui-search-bar", { clearable: "false" })),
        ORUI.createElement("orui-title", { text: "\u81EA\u5B9A\u4E49\u641C\u7D22icon" },
            ORUI.createElement("orui-search-bar", { search_icon: "/components/images/love.svg" })),
        ORUI.createElement("orui-title", { text: "\u81EA\u5B9A\u4E49\u6E05\u9664icon" },
            ORUI.createElement("orui-search-bar", { clear_icon: "/components/images/love.svg" })),
        ORUI.createElement("orui-title", { text: "\u81EA\u5B9A\u4E49style" },
            ORUI.createElement("orui-search-bar", { ui_name: "my-search-bar", custom_style: "--background:red" }))));
    return html;
}
