import { ORUI } from "../base/index.js";
import { DIALOG } from "./index.js";
export function DialogDemo() {
    //基础使用
    async function basic_alert() {
        await DIALOG.alert({
            content: '这是一个弹窗'
        });
        console.log('点击了弹窗');
    }
    //自定义按钮
    function custom_click() {
        DIALOG.show({
            content: '这是一个自定义按钮弹窗',
            actions: [
                {
                    color: 'primary',
                    text: '在线阅读',
                    on_click: () => {
                        console.log('点击了在线阅读');
                    }
                },
                {
                    color: 'primary',
                    text: '下载文件',
                    on_click: () => {
                        console.log('点击了下载文件, 此按钮是手动关闭');
                        DIALOG.close();
                    },
                    close_on_action: false //设为false后不自动关闭弹窗
                },
                [
                    {
                        color: 'primary',
                        text: '取消',
                        on_click: () => {
                            console.log('点击了取消');
                        }
                    },
                    {
                        color: 'danger',
                        text: '删除',
                        bold: true,
                        on_click: () => {
                            console.log('点击了删除');
                        }
                    }
                ]
            ]
        });
    }
    //确认弹窗
    async function confirm_click() {
        const result = await DIALOG.confirm({
            content: '这是一个确认框'
        });
        console.log(`点击了${result ? '确认' : '取消'}`);
    }
    //自定义内容
    function custom_content() {
        DIALOG.alert({
            header: (ORUI.createElement("orui-icon", { path: "/components/images/exclamation_circle_fill.svg", color: "var(--orui-color-warning)", width: "4rem", height: "4rem" })),
            title: '注意',
            content: (ORUI.createElement("div", null,
                ORUI.createElement("span", null, "\u8BF7\u7528\u624B\u673A\u62CD\u6444\u624B\u6301\u5DE5\u724C\u7167\uFF0C\u6CE8\u610F\u4FDD\u6301\u7167\u7247\u6E05\u6670"),
                ORUI.createElement("br", null),
                ORUI.createElement("span", null,
                    "\u8BE6\u60C5\u8BF4\u660E\u8BF7\u67E5\u9605",
                    ORUI.createElement("a", { style: "color: var(--orui-color-primary);" }, "\u64CD\u4F5C\u6307\u5F15"))))
        });
    }
    //超长文本
    async function long_text() {
        let content = (ORUI.createElement(ORUI.createFragment, null,
            ORUI.createElement("b", null,
                "\u6EE1\u6C5F\u7EA2",
                ORUI.createElement("br", null),
                "\u5CB3\u98DE"),
            ORUI.createElement("br", null),
            "\u6012\u53D1\u51B2\u51A0\uFF0C\u51ED\u9611\u5904\u3001\u6F47\u6F47\u96E8\u6B47\u3002\u62AC\u671B\u773C\uFF0C\u4EF0\u5929\u957F\u5578\uFF0C\u58EE\u6000\u6FC0\u70C8\u3002\u4E09\u5341\u529F\u540D\u5C18\u4E0E\u571F\uFF0C\u516B\u5343\u91CC\u8DEF\u4E91\u548C\u6708\u3002\u83AB\u7B49\u95F2\uFF0C\u767D\u4E86\u5C11\u5E74\u5934\uFF0C\u7A7A\u60B2\u5207\u3002",
            ORUI.createElement("br", null),
            "\u9756\u5EB7\u803B\uFF0C\u72B9\u672A\u96EA\uFF1B\u81E3\u5B50\u6068\uFF0C\u4F55\u65F6\u706D\uFF1F\u9A7E\u957F\u8F66\uFF0C\u8E0F\u7834\u8D3A\u5170\u5C71\u7F3A\u3002\u58EE\u5FD7\u9965\u9910\u80E1\u864F\u8089\uFF0C\u7B11\u8C08\u6E34\u996E\u5308\u5974\u8840\u3002\u5F85\u4ECE\u5934\uFF0C\u6536\u62FE\u65E7\u5C71\u6CB3\uFF0C\u671D\u5929\u9619\u3002",
            ORUI.createElement("br", null),
            "\u6211\u6124\u6012\u5F97\u5934\u53D1\u7AD6\u4E86\u8D77\u6765\uFF0C\u72EC\u81EA\u767B\u9AD8\u51ED\u680F\u8FDC\u773A\uFF0C\u9AA4\u6025\u7684\u98CE\u96E8\u521A\u521A\u505C\u6B47\u3002\u62AC\u5934\u8FDC\u671B\u5929\u7A7A\uFF0C\u7981\u4E0D\u4F4F\u4EF0\u5929\u957F\u5578\uFF0C\u4E00\u7247\u62A5\u56FD\u4E4B\u5FC3\u5145\u6EE1\u5FC3\u6000\u3002\u4E09\u5341\u591A\u5E74\u6765\u867D\u5DF2\u5EFA\u7ACB\u4E00\u4E9B\u529F\u540D\uFF0C\u4F46\u5982\u540C\u5C18\u571F\u5FAE\u4E0D\u8DB3\u9053\uFF0C\u5357\u5317\u8F6C\u6218\u516B\u5343\u91CC\uFF0C\u7ECF\u8FC7\u591A\u5C11\u98CE\u4E91\u4EBA\u751F\u3002 \u597D\u7537\u513F\uFF0C\u8981\u6293\u7D27\u65F6\u95F4\u4E3A\u56FD\u5EFA\u529F\u7ACB\u4E1A\uFF0C\u4E0D\u8981\u7A7A\u7A7A\u5C06\u9752\u6625\u6D88\u78E8\uFF0C\u7B49\u5E74\u8001\u65F6\u5F92\u81EA\u60B2\u5207\u3002\u9756\u5EB7\u4E4B\u53D8\u7684\u803B\u8FB1\uFF0C\u81F3\u4ECA\u4ECD\u7136\u6CA1\u6709\u88AB\u96EA\u6D17\u3002\u4F5C\u4E3A\u56FD\u5BB6\u81E3\u5B50\u7684\u6124\u6068\uFF0C\u4F55\u65F6\u624D\u80FD\u6CEF\u706D\uFF01\u6211\u8981\u9A7E\u7740\u6218\u8F66\u5411\u8D3A\u5170\u5C71\u8FDB\u653B\uFF0C\u8FDE\u8D3A\u5170\u5C71\u4E5F\u8981\u8E0F\u4E3A\u5E73\u5730\u3002 \u6211\u6EE1\u6000\u58EE\u5FD7\uFF0C\u6253\u4ED7\u997F\u4E86\u5C31\u5403\u654C\u4EBA\u7684\u8089\uFF0C\u8C08\u7B11\u6E34\u4E86\u5C31\u559D\u654C\u4EBA\u7684\u9C9C\u8840\u3002\u5F85\u6211\u91CD\u65B0\u6536\u590D\u65E7\u65E5\u5C71\u6CB3\uFF0C\u518D\u5E26\u7740\u6377\u62A5\u5411\u56FD\u5BB6\u62A5\u544A\u80DC\u5229\u7684\u6D88\u606F\uFF01"));
        const result = await DIALOG.confirm({
            content,
            title: '提示'
        });
        console.log(`点击了${result ? '确认' : '取消'}`);
    }
    const html = (ORUI.createElement("orui-grid", null,
        ORUI.createElement("orui-row", { grow: "0" },
            ORUI.createElement("orui-title", { text: "\u57FA\u7840\u4F7F\u7528" },
                ORUI.createElement("orui-space", { wrap: "true" },
                    ORUI.createElement("orui-button", { text: "\u57FA\u7840\u4F7F\u7528", onClick: basic_alert })))),
        ORUI.createElement("orui-row", { grow: "0" },
            ORUI.createElement("orui-title", { text: "\u81EA\u5B9A\u4E49\u6309\u94AE" },
                ORUI.createElement("orui-space", { wrap: "true" },
                    ORUI.createElement("orui-button", { ui_name: "custom", text: "\u81EA\u5B9A\u4E49\u6309\u94AE", onClick: custom_click })))),
        ORUI.createElement("orui-row", { grow: "0" },
            ORUI.createElement("orui-title", { text: "\u786E\u8BA4\u5F39\u7A97" },
                ORUI.createElement("orui-space", { wrap: "true" },
                    ORUI.createElement("orui-button", { ui_name: "confirm", text: "\u786E\u8BA4\u5F39\u7A97", onClick: confirm_click })))),
        ORUI.createElement("orui-row", { grow: "0" },
            ORUI.createElement("orui-title", { text: "\u5185\u5BB9\u533A\u57DF" },
                ORUI.createElement("orui-space", { wrap: "true" },
                    ORUI.createElement("orui-button", { ui_name: "custom_content", text: "\u81EA\u5B9A\u4E49\u5185\u5BB9\u533A\u57DF", onClick: custom_content }),
                    ORUI.createElement("orui-button", { ui_name: "long_text", text: "\u8D85\u957F\u6587\u672C", onClick: long_text }))))));
    return html;
}
