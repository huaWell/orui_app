import { ORUI } from "../base/index.js";
import { toast } from "./index.js";
export function ToastDemo() {
    function afterClose(...args) {
        console.log(args, 'after_close');
    }
    const html = (ORUI.createElement("orui-space", { direction: "vertical" },
        ORUI.createElement("orui-title", { text: "toast\u7684\u57FA\u672C\u4F7F\u7528" },
            ORUI.createElement("orui-button", { text: "\u8F7B\u63D0\u793A", ui_name: "basicToast", onClick: () => {
                    toast.show({
                        content: 'Hello World,This is a long text11111111111111111111',
                        visible: true
                    });
                } })),
        ORUI.createElement("orui-title", { text: "\u56FE\u6807" },
            ORUI.createElement("orui-space", null,
                ORUI.createElement("orui-button", { text: "\u6210\u529F", ui_name: "iconSuccess", onClick: () => {
                        toast.show({
                            icon_path: '/components/images/check.svg',
                            content: `<span>保存成功</span>`,
                            visible: true
                        });
                    } }),
                ORUI.createElement("orui-button", { text: "\u5931\u8D25", ui_name: "iconFail", onClick: () => {
                        toast.show({
                            icon_path: '/components/images/close.svg',
                            content: `<span>操作失败</span>`,
                            visible: true
                        });
                    } }),
                ORUI.createElement("orui-button", { text: "\u81EA\u5B9A\u4E49", ui_name: "customIcon", onClick: () => {
                        toast.show({
                            custom_icon: `<orui-icon path="/components/images/love.svg" color="red" width="2rem" height="2rem"></orui-icon>`,
                            content: `<span>自定义icon组件</span>`,
                            visible: true
                        });
                    } }))),
        ORUI.createElement("orui-title", { text: "\u66F4\u591A\u529F\u80FD" },
            ORUI.createElement("orui-row", null,
                ORUI.createElement("orui-space", null,
                    ORUI.createElement("orui-button", { text: "\u9876\u90E8\u63D0\u793A", ui_name: "topToast", onClick: () => {
                            toast.show({
                                content: 'hello world',
                                visible: true,
                                position: 'top'
                            });
                        } }),
                    ORUI.createElement("orui-button", { text: "\u5E95\u90E8\u63D0\u793A", ui_name: "bottomToast", onClick: () => {
                            toast.show({
                                content: 'hello world',
                                visible: true,
                                position: 'bottom',
                            });
                        } }))),
            ORUI.createElement("orui-row", null,
                ORUI.createElement("orui-button", { text: "\u963B\u6B62\u80CC\u90E8\u53EF\u70B9\u51FB", ui_name: "backNotClickable", onClick: () => {
                        toast.show({
                            content: '请耐心等待不要退出',
                            visible: true,
                            clickable: false
                        });
                    } }))),
        ORUI.createElement("orui-title", { text: "\u624B\u52A8\u5173\u95ED" },
            ORUI.createElement("orui-space", null,
                ORUI.createElement("orui-button", { text: "\u663E\u793A", ui_name: "manualShow", onClick: () => {
                        toast.show({
                            content: '这条消息不会自动消失',
                            visible: true,
                            duration: 0,
                            position: 'top',
                            after_close: afterClose
                        });
                    } }),
                ORUI.createElement("orui-button", { text: "\u5173\u95ED", ui_name: "manualClose", onClick: () => {
                        toast.close();
                    } })))));
    return html;
}
