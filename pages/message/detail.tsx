import {ORUI} from "../../components/base/index.js";
import {back} from "../../components/router/index.js";

export function Detail() {
    const _data = JSON.parse(window.localStorage.getItem('sales_order_detail'))
    const html = (
        <>
            <orui-nav-bar ui_name="basicNavBar" title="订单详情" onBack={detail_back}/>
            <orui-form
                ui_name="detail_form"
                data={_data}
                layout="horizontal">
                <orui-form-item
                    name="order_id"
                    display_name="订单序列号"
                    is_nullable="false">
                    <orui-input readonly={true}/>
                </orui-form-item>
                <orui-form-item
                    name="custom_name"
                    display_name="客户名称"
                    is_nullable="false">
                    <orui-input/>
                </orui-form-item>
                <orui-form-item
                    name="custom_code"
                    display_name="客户编码"
                    is_nullable="false">
                    <orui-input readonly={true}/>
                </orui-form-item>
                <orui-form-item
                    name="delay_days"
                    display_name="延迟天数">
                    <orui-input/>
                </orui-form-item>
            </orui-form>
        </>
    )
    function detail_back() {
        back()
    }
    return html
}