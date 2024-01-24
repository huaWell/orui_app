import { ORUI } from "../base/index.js";
import { use_get_control } from "../utils/index.js";
export function MaskDemo() {
    const html = (ORUI.createElement("orui-grid", null,
        ORUI.createElement("orui-row", { grow: "0" },
            ORUI.createElement("orui-title", { text: "\u57FA\u7840\u4F7F\u7528" },
                ORUI.createElement("orui-space", { wrap: "true" },
                    ORUI.createElement("orui-mask", { visible: "false", ui_name: "mask", onClick: () => {
                            mask.visible = false;
                        } }),
                    ORUI.createElement("orui-button", { text: "\u663E\u793Amask", onClick: () => {
                            mask.visible = true;
                        } })))),
        ORUI.createElement("orui-row", { grow: "0" },
            ORUI.createElement("orui-title", { text: "\u4FEE\u6539\u989C\u8272" },
                ORUI.createElement("orui-space", { wrap: "true" },
                    ORUI.createElement("orui-mask", { visible: "false", ui_name: "mask1", color: "gray", onClick: () => {
                            mask1.visible = false;
                        } }),
                    ORUI.createElement("orui-button", { text: "\u663E\u793Amask", onClick: () => {
                            mask1.visible = true;
                        } }))))));
    const get_control = use_get_control(html);
    const mask = get_control('mask');
    const mask1 = get_control('mask1');
    return html;
}
