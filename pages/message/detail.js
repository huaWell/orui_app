import { ORUI } from "../../components/base/index.js";
import { back } from "../../components/router/index.js";
export function Detail() {
    const _data = JSON.parse(window.localStorage.getItem('sales_order_detail'));
    const html = (ORUI.createElement(ORUI.createFragment, null,
        ORUI.createElement("orui-nav-bar", { ui_name: "basicNavBar", title: "\u8BA2\u5355\u8BE6\u60C5", onBack: detail_back }),
        ORUI.createElement("orui-form", { ui_name: "detail_form", data: _data, layout: "horizontal" },
            ORUI.createElement("orui-form-item", { name: "order_id", display_name: "\u8BA2\u5355\u5E8F\u5217\u53F7", is_nullable: "false" },
                ORUI.createElement("orui-input", { readonly: true })),
            ORUI.createElement("orui-form-item", { name: "custom_name", display_name: "\u5BA2\u6237\u540D\u79F0", is_nullable: "false" },
                ORUI.createElement("orui-input", null)),
            ORUI.createElement("orui-form-item", { name: "custom_code", display_name: "\u5BA2\u6237\u7F16\u7801", is_nullable: "false" },
                ORUI.createElement("orui-input", { readonly: true })),
            ORUI.createElement("orui-form-item", { name: "delay_days", display_name: "\u5EF6\u8FDF\u5929\u6570" },
                ORUI.createElement("orui-input", null)))));
    function detail_back() {
        back();
    }
    return html;
}
