import {ORUI} from "../../components/base/index.js";
import {Message} from "../message/index.js";
import {back} from "../../components/router/index.js";

export function SalesOrder() {
     const html = (
        <orui-grid>
            <orui-row grow='0'>
                <orui-nav-bar title='销售订单' onBack={back}></orui-nav-bar>
            </orui-row>
            <orui-row>
                <Message/>
            </orui-row>

        </orui-grid>
    )
    return html
}