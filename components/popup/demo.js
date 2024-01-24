import { ORUI } from "../base/index.js";
import { use_get_control } from "../utils/index.js";
export function PopupDemo() {
    const html = (ORUI.createElement("orui-grid", null,
        ORUI.createElement("orui-row", { grow: "0" },
            ORUI.createElement("orui-title", { text: "\u5F39\u51FA\u4F4D\u7F6E" },
                ORUI.createElement("orui-space", { wrap: "true" },
                    ORUI.createElement("orui-button", { ui_name: "show_bottom", text: "\u5E95\u90E8\u5F39\u51FA", onClick: () => {
                            const popup = get_control('bottom');
                            popup.visible = true;
                        } }),
                    ORUI.createElement("orui-popup", { ui_name: "bottom", position: "bottom" }),
                    ORUI.createElement("orui-button", { ui_name: "show_top", text: "\u9876\u90E8\u5F39\u51FA", onClick: () => {
                            const popup = get_control('top');
                            popup.visible = true;
                        } }),
                    ORUI.createElement("orui-popup", { ui_name: "top", position: "top" }),
                    ORUI.createElement("orui-button", { ui_name: "show_left", text: "\u5DE6\u4FA7\u5F39\u51FA", onClick: () => {
                            const popup = get_control('left');
                            popup.visible = true;
                        } }),
                    ORUI.createElement("orui-popup", { ui_name: "left", position: "left" }),
                    ORUI.createElement("orui-button", { ui_name: "show_right", text: "\u53F3\u4FA7\u5F39\u51FA", onClick: () => {
                            const popup = get_control('right');
                            popup.visible = true;
                        } }),
                    ORUI.createElement("orui-popup", { ui_name: "right", position: "right" }),
                    ORUI.createElement("orui-button", { ui_name: "show_center", text: "\u4E2D\u95F4\u5F39\u51FA", onClick: () => {
                            const popup = get_control('center');
                            popup.visible = true;
                        } }),
                    ORUI.createElement("orui-popup", { ui_name: "center", position: "center" })))),
        ORUI.createElement("orui-row", { grow: "0" },
            ORUI.createElement("orui-title", { text: "\u81EA\u5B9A\u4E49\u5185\u5BB9\u6837\u5F0F" },
                ORUI.createElement("orui-space", { wrap: "true" },
                    ORUI.createElement("orui-button", { ui_name: "show_custom_width", text: "\u81EA\u5B9A\u4E49\u5BBD\u5EA6", onClick: () => {
                            const popup = get_control('custom_width');
                            popup.visible = true;
                        } }),
                    ORUI.createElement("orui-popup", { ui_name: "custom_width", position: "right", body_style: "width: 80%" }),
                    ORUI.createElement("orui-button", { ui_name: "show_custom_height", text: "\u81EA\u5B9A\u4E49\u9AD8\u5EA6", onClick: () => {
                            const popup = get_control('custom_height');
                            popup.visible = true;
                        } }),
                    ORUI.createElement("orui-popup", { ui_name: "custom_height", position: "bottom", body_style: "height: 80%" })))),
        ORUI.createElement("orui-row", { grow: "0" },
            ORUI.createElement("orui-title", { text: "\u591A\u5C42\u5F39\u7A97" },
                ORUI.createElement("orui-button", { ui_name: "show_parent_popup", text: "\u663E\u793A\u5F39\u7A97", onClick: () => {
                        const popup = get_control('parent');
                        popup.visible = true;
                    } }),
                ORUI.createElement("orui-popup", { ui_name: "parent" },
                    ORUI.createElement("orui-button", { ui_name: "show_child_popup", text: "\u663E\u793A\u7B2C\u4E8C\u5C42", onClick: () => {
                            const popup = get_control('child');
                            popup.visible = true;
                        } })),
                ORUI.createElement("orui-popup", { ui_name: "child", position: "center" }, "\u63D0\u793A"))),
        ORUI.createElement("orui-row", { grow: "0" },
            ORUI.createElement("orui-title", { text: "\u4E8B\u4EF6\u76D1\u542C" },
                ORUI.createElement("orui-button", { ui_name: "show_event_click", text: "\u76D1\u542C\u5173\u95ED\u4E8B\u4EF6", onClick: () => {
                        const show_event_click_popup = get_control('event_click');
                        show_event_click_popup.visible = true;
                    } }),
                ORUI.createElement("orui-popup", { ui_name: "event_click", onClose: () => {
                        window.alert('点击了关闭');
                    } }))),
        ORUI.createElement("orui-row", { grow: "0" },
            ORUI.createElement("orui-title", { text: "\u70B9\u51FBmask\u4E0D\u5173\u95ED" },
                ORUI.createElement("orui-space", { wrap: "true" },
                    ORUI.createElement("orui-button", { ui_name: "show_no_close_on_mask", text: "\u70B9\u51FBmask\u4E0D\u5173\u95ED", onClick: () => {
                            const no_close_on_mask_popup = get_control('no_close_on_mask');
                            no_close_on_mask_popup.visible = true;
                        } }),
                    ORUI.createElement("orui-popup", { ui_name: "no_close_on_mask", show_operation_bar: "true", close_on_mask_click: "false" },
                        ORUI.createElement("orui-icon", { path: "/components/images/close_circle.svg", ui_name: "close", slot: "operation_bar_left", onClick: () => {
                                const no_close_on_mask_popup = get_control('no_close_on_mask');
                                no_close_on_mask_popup.visible = false;
                            } }))))),
        ORUI.createElement("orui-row", { grow: "0" },
            ORUI.createElement("orui-title", { text: "\u6CA1\u6709mask" },
                ORUI.createElement("orui-space", { wrap: "true" },
                    ORUI.createElement("orui-button", { ui_name: "show_no_mask", text: "\u6CA1\u6709mask", onClick: () => {
                            const no_mask_popup = get_control("no_mask");
                            no_mask_popup.visible = true;
                        } }),
                    ORUI.createElement("orui-popup", { ui_name: "no_mask", position: "top", mask: "false", show_operation_bar: "true" },
                        ORUI.createElement("orui-icon", { path: "/components/images/close_circle.svg", ui_name: "close", slot: "operation_bar_left", onClick: () => {
                                const no_mask_popup = get_control("no_mask");
                                no_mask_popup.visible = false;
                            } }))))),
        ORUI.createElement("orui-row", { grow: "0" },
            ORUI.createElement("orui-title", { text: "\u81EA\u5B9A\u4E49\u6309\u94AE" },
                ORUI.createElement("orui-space", { wrap: "true" },
                    ORUI.createElement("orui-button", { ui_name: "show_custom_operation_bar", text: "\u81EA\u5B9A\u4E49\u6309\u94AE", onClick: () => {
                            const custom_operation_bar_popup = get_control('custom_operation_bar');
                            custom_operation_bar_popup.visible = true;
                        } }),
                    ORUI.createElement("orui-popup", { ui_name: "custom_operation_bar", show_operation_bar: "true" },
                        ORUI.createElement("orui-button", { text: "\u53D6\u6D88", type: "none", color: "primary", ui_name: "cancel", slot: "operation_bar_left", onClick: () => {
                                const custom_operation_bar_popup = get_control('custom_operation_bar');
                                custom_operation_bar_popup.visible = false;
                            } }),
                        ORUI.createElement("orui-button", { text: "\u786E\u8BA4", type: "none", color: "primary", ui_name: "confirm", slot: "operation_bar_right", onClick: () => {
                                const custom_operation_bar_popup = get_control('custom_operation_bar');
                                custom_operation_bar_popup.visible = false;
                            } }),
                        "\u81EA\u5B9A\u4E49\u6309\u94AE")))),
        ORUI.createElement("orui-row", { grow: "0" },
            ORUI.createElement("orui-title", { text: "\u663E\u793A\u5173\u95ED\u6309\u94AE" },
                ORUI.createElement("orui-space", { wrap: "true" },
                    ORUI.createElement("orui-button", { ui_name: "show_close_button", text: "\u663E\u793A\u5173\u95ED\u6309\u94AE", onClick: () => {
                            const close_button_popup = get_control('close_button');
                            close_button_popup.visible = true;
                        } }),
                    ORUI.createElement("orui-popup", { ui_name: "close_button", show_operation_bar: "true" },
                        ORUI.createElement("orui-icon", { path: "/components/images/close_circle.svg", ui_name: "close", slot: "operation_bar_right", onClick: () => {
                                const close_button_popup = get_control('close_button');
                                close_button_popup.visible = false;
                            } })),
                    ORUI.createElement("orui-button", { ui_name: "show_close_button_left", text: "\u663E\u793A\u5DE6\u4FA7\u7684\u5173\u95ED\u6309\u94AE", onClick: () => {
                            const close_button_left_popup = get_control('close_button_left');
                            close_button_left_popup.visible = true;
                        } }),
                    ORUI.createElement("orui-popup", { ui_name: "close_button_left", position: "right", body_style: "width: 100%", show_operation_bar: "true" },
                        ORUI.createElement("orui-icon", { path: "/components/images/close_circle.svg", ui_name: "close", slot: "operation_bar_left", onClick: () => {
                                const close_button_left_popup = get_control('close_button_left');
                                close_button_left_popup.visible = false;
                            } })))))));
    const get_control = use_get_control(html);
    return html;
}
