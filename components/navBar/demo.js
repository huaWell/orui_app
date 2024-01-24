import { ORUI } from "../base/index.js";
export function NavBarDemo() {
    const html = (ORUI.createElement("orui-space", { direction: "vertical" },
        ORUI.createElement("orui-title", { text: "navBar\u57FA\u672C\u4F7F\u7528\u65B9\u6CD5" },
            ORUI.createElement("orui-nav-bar", { ui_name: "basicNavBar", title: "\u6807\u9898", onBack: () => {
                    console.log('点击了back部分');
                } })),
        ORUI.createElement("orui-title", { text: "navBar\u8FD4\u56DE\u6309\u94AE\u663E\u793A\u6587\u5B57" },
            ORUI.createElement("orui-nav-bar", { ui_name: "showTextNavBar", back: "\u8FD4\u56DE", title: "\u6807\u9898" })),
        ORUI.createElement("orui-title", { text: "navBar\u8FD4\u56DE\u6309\u94AE\u4E0D\u663E\u793A\u56FE\u6807" },
            ORUI.createElement("orui-nav-bar", { ui_name: "showTextNavBar", show_back_arrow: "false", back: "\u8FD4\u56DE", title: "\u6807\u9898" })),
        ORUI.createElement("orui-title", { text: "navBar\u81EA\u5B9A\u4E49\u6309\u94AE\u8FD4\u56DE\u56FE\u6807" },
            ORUI.createElement("orui-nav-bar", { ui_name: "showTextNavBar", back_arrow: "/components/images/close.svg", back: "\u8FD4\u56DE", title: "\u6807\u9898" })),
        ORUI.createElement("orui-title", { text: "navBar\u81EA\u5B9A\u4E49\u5DE6\u4FA7\u5185\u5BB9" },
            ORUI.createElement("orui-nav-bar", { ui_name: "showTextNavBar", back_arrow: "/components/images/close.svg", back: "\u8FD4\u56DE", title: "\u6807\u9898" },
                ORUI.createElement("span", { slot: "left" }, "\u6E05\u9664"))),
        ORUI.createElement("orui-title", { text: "navBar\u81EA\u5B9A\u4E49\u53F3\u4FA7\u5185\u5BB9" },
            ORUI.createElement("orui-nav-bar", { ui_name: "showTextNavBar", back_arrow: "/components/images/close.svg", back: "\u8FD4\u56DE", title: "\u6807\u9898" },
                ORUI.createElement("span", { slot: "right" },
                    ORUI.createElement("span", { class: "orui-custom-icon-container" },
                        ORUI.createElement("div", { class: "orui-custom-icon-item" },
                            ORUI.createElement("orui-icon", { path: "/components/images/search.svg", color: "var(--orui-color-text)" })),
                        ORUI.createElement("div", { class: "orui-custom-icon-item" },
                            ORUI.createElement("orui-icon", { path: "/components/images/more.svg", color: "var(--orui-color-text)" })))))),
        ORUI.createElement("orui-title", { text: "navBar\u8D85\u957Ftitle" },
            ORUI.createElement("orui-nav-bar", { ui_name: "showTextNavBar", back_arrow: "/components/images/close.svg", back: "\u8FD4\u56DE", title: "\u8D85\u957F\u6807\u9898\u8D85\u957F\u6807\u9898\u8D85\u957F\u6807\u9898\u8D85\u957F\u6807\u9898\u8D85\u957F\u6807\u9898\u8D85\u957F\u6807\u9898\u8D85\u957F\u6807\u9898\u8D85\u957F\u6807\u9898\u8D85\u957F\u6807\u9898\u8D85\u957F\u6807\u9898\u8D85\u957F\u6807\u9898\u8D85\u957F\u6807\u9898\u8D85\u957F\u6807\u9898\u8D85\u957F\u6807\u9898" })),
        ORUI.createElement("orui-title", { text: "navBar\u526F\u6807\u9898" },
            ORUI.createElement("orui-nav-bar", { ui_name: "showTextNavBar", back_arrow: "/components/images/close.svg", back: "\u8FD4\u56DE", title: "\u6807\u9898" },
                ORUI.createElement("div", { slot: "center", style: "font-size: var(--orui-font-size-2)" }, "\u526F\u6807\u9898"))),
        ORUI.createElement("orui-title", { text: "navBar\u81EA\u5B9A\u4E49\u9AD8\u5EA6\u4EE5\u53CA\u8FB9\u6846" },
            ORUI.createElement("orui-nav-bar", { ui_name: "showTextNavBar", back_arrow: "/components/images/close.svg", back: "\u8FD4\u56DE", title: "\u6807\u9898", custom_style: "--height: 2rem" }))));
    return html;
}
