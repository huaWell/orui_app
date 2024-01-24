import { ORUI } from "../base/index.js";
import {toast} from "./index.js";

export function ToastDemo() {
    function afterClose(...args) {
        console.log(args,'after_close')
    }
    const html = (
        <orui-space direction="vertical">
            <orui-title text="toast的基本使用">
                <orui-button text="轻提示" ui_name="basicToast" onClick={() => {
                    toast.show({
                        content:'Hello World,This is a long text11111111111111111111',
                        visible: true
                    })
                }}/>
            </orui-title>
            <orui-title text="图标">
                <orui-space>
                    <orui-button text="成功" ui_name="iconSuccess" onClick={() => {
                        toast.show({
                        icon_path: '/components/images/check.svg',
                        content:`<span>保存成功</span>`,
                        visible:true
                    })
                    }}/>
                    <orui-button text="失败" ui_name="iconFail" onClick={() => {
                        toast.show({
                            icon_path: '/components/images/close.svg',
                            content:`<span>操作失败</span>`,
                            visible:true
                        })
                    }}/>
                    <orui-button text="自定义" ui_name="customIcon" onClick={() => {
                        toast.show({
                            custom_icon: `<orui-icon path="/components/images/love.svg" color="red" width="2rem" height="2rem"></orui-icon>`,
                            content:`<span>自定义icon组件</span>`,
                            visible:true
                        })
                    }}/>
                </orui-space>
            </orui-title>
            <orui-title text="更多功能">
                <orui-row>
                   <orui-space>
                       <orui-button text="顶部提示" ui_name="topToast" onClick={() => {
                           toast.show({
                               content: 'hello world',
                               visible: true,
                               position: 'top'
                           })
                       }}/>
                       <orui-button text="底部提示" ui_name="bottomToast" onClick={() => {
                           toast.show({
                               content: 'hello world',
                               visible: true,
                               position: 'bottom',
                           })
                       }}/>
                   </orui-space>
                </orui-row>
                <orui-row>
                    <orui-button text="阻止背部可点击" ui_name="backNotClickable" onClick={() => {
                        toast.show({
                            content: '请耐心等待不要退出',
                            visible: true,
                            clickable: false
                        })
                    }}/>
                </orui-row>
            </orui-title>
            <orui-title text="手动关闭">
                <orui-space>
                    <orui-button text="显示" ui_name="manualShow" onClick={() => {
                        toast.show({
                            content: '这条消息不会自动消失',
                            visible: true,
                            duration: 0,
                            position: 'top',
                            after_close: afterClose
                        })
                    }}/>
                    <orui-button text="关闭" ui_name="manualClose" onClick={() => {
                        toast.close()
                    }}/>
                </orui-space>
            </orui-title>
        </orui-space>
    )
    return html
}