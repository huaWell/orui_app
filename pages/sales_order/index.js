import { ORUI } from "../../components/base/index.js";
import { Message } from "../message/index.js";
import { back } from "../../components/router/index.js";
export function SalesOrder() {
    const html = (ORUI.createElement("orui-grid", null,
        ORUI.createElement("orui-row", { grow: '0' },
            ORUI.createElement("orui-nav-bar", { title: '\u9500\u552E\u8BA2\u5355', onBack: back })),
        ORUI.createElement("orui-row", null,
            ORUI.createElement(Message, null))));
    return html;
}
