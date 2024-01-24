"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_js_1 = require("../message/index.js");
var index_js_2 = require("../../components/router/index.js");
function SalesOrder() {
    var html = (<orui-grid>
            <orui-row grow='0'>
                <orui-nav-bar title='销售订单' onBack={index_js_2.back}></orui-nav-bar>
            </orui-row>
            <orui-row>
                <index_js_1.Message />
            </orui-row>

        </orui-grid>);
    return html;
}
exports.SalesOrder = SalesOrder;
