import { ORUI } from "../base/index.js";
export function TabDemo() {
    const html = (ORUI.createElement("orui-space", { direction: "vertical" },
        ORUI.createElement("orui-title", { text: "tabs\u57FA\u672C\u4F7F\u7528" },
            ORUI.createElement("orui-tabs", { ui_name: "basic_tab", id: "my_tab" },
                ORUI.createElement("orui-tab-item", { key: "1", title: "1" }, "111111"),
                ORUI.createElement("orui-tab-item", { key: "2", title: "2" }, "2222222"),
                ORUI.createElement("orui-tab-item", { key: "3", title: "3" }, "3333333"),
                ORUI.createElement("orui-tab-item", { key: "4", title: "4" }, "444444444"))),
        ORUI.createElement("orui-title", { text: "tabs\u8D85\u957Ftab\u81EA\u52A8\u6EDA\u52A8" },
            ORUI.createElement("orui-tabs", { ui_name: "auto_scroll_tab", id: "my_tab" },
                ORUI.createElement("orui-tab-item", { key: "1", title: "\u8D85\u6781\u957F\u7684tabname" }, "111111"),
                ORUI.createElement("orui-tab-item", { key: "2", title: "\u8D85\u6781\u957F\u7684tabname1" }, "2222222"),
                ORUI.createElement("orui-tab-item", { key: "3", title: "\u8D85\u6781\u957F\u7684tabname2" }, "3333333"),
                ORUI.createElement("orui-tab-item", { key: "4", title: "\u8D85\u6781\u957F\u7684tabname3" }, "444444444"))),
        ORUI.createElement("orui-title", { text: "tabs\u81EA\u5B9A\u4E49\u4E0B\u5212\u7EBF\u957F\u5EA6" },
            ORUI.createElement("orui-tabs", { underline_width: "25px" },
                ORUI.createElement("orui-tab-item", { key: "1", title: "\u8D85\u6781\u957F\u7684\u8D85\u6781\u957F\u7684" }, "111111"),
                ORUI.createElement("orui-tab-item", { key: "2", title: "\u8D85\u6781\u957F\u7684\u8D85\u6781\u957F\u7684" }, "2222222"),
                ORUI.createElement("orui-tab-item", { key: "3", title: "\u8D85\u6781\u957F\u7684\u8D85\u6781\u957F\u7684" }, "3333333"),
                ORUI.createElement("orui-tab-item", { key: "4", title: "\u8D85\u6781\u957F\u7684\u8D85\u6781\u957F\u7684" }, "444444444"))),
        ORUI.createElement("orui-title", { text: "tabs\u65B9\u5411\u9760\u53F3" },
            ORUI.createElement("orui-tabs", { underline_width: "25px", direction: "right" },
                ORUI.createElement("orui-tab-item", { key: "1", title: "\u8D85\u6781\u957F\u7684\u8D85\u6781\u957F\u7684" }, "111111"),
                ORUI.createElement("orui-tab-item", { key: "2", title: "\u8D85\u6781\u957F\u7684\u8D85\u6781\u957F\u7684" }, "2222222"),
                ORUI.createElement("orui-tab-item", { key: "3", title: "\u8D85\u6781\u957F\u7684\u8D85\u6781\u957F\u7684" }, "3333333"),
                ORUI.createElement("orui-tab-item", { key: "4", title: "\u8D85\u6781\u957F\u7684\u8D85\u6781\u957F\u7684" }, "444444444")))));
    return html;
}
