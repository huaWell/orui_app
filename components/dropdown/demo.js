import { ORUI } from "../base/index.js";
export function DropDownDemo() {
    const basic_data = {
        'select1': [
            {
                name: 'a',
                content: '全部商品'
            },
            {
                name: 'b',
                content: '部分商品'
            }
        ],
        'select2': [
            {
                name: '1',
                content: '全部商品'
            },
            {
                name: '2',
                content: '部分商品'
            }
        ],
    };
    const basic_value = { select1: "a", select2: '2' };
    const arrow = '<orui-icon path="/components/images/down.svg" color="red" width="0.5625rem" height="0.5625rem"/>';
    const scroll_data = {
        'select1': [
            {
                name: 'a',
                content: '全部商品'
            },
            {
                name: 'b',
                content: '部分商品'
            }
        ],
        'select2': [
            {
                name: '1',
                content: '全部商品'
            },
            {
                name: '2',
                content: '部分商品'
            }
        ],
        'select3': [
            {
                name: '1',
                content: '全部商品'
            },
            {
                name: '2',
                content: '部分商品'
            }
        ],
        'select4': [
            {
                name: '1',
                content: '全部商品'
            },
            {
                name: '2',
                content: '部分商品'
            }
        ],
        'select5': [
            {
                name: '1',
                content: '全部商品'
            },
            {
                name: '2',
                content: '部分商品'
            }
        ],
        'select6': [
            {
                name: '1',
                content: '全部商品'
            },
            {
                name: '2',
                content: '部分商品'
            }
        ],
    };
    const html = (ORUI.createElement("orui-space", { direction: "vertical" },
        ORUI.createElement("orui-title", { text: "dropDown\u57FA\u672C\u4F7F\u7528" },
            ORUI.createElement("orui-dropdown", { data: basic_data, value: basic_value })),
        ORUI.createElement("orui-title", { text: "dropDown\u81EA\u5B9A\u4E49\u56FE\u6807" },
            ORUI.createElement("orui-dropdown", { data: basic_data, value: basic_value, arrow: arrow })),
        ORUI.createElement("orui-title", { text: "dropDown\u6A2A\u5411\u6EDA\u52A8" },
            ORUI.createElement("orui-dropdown", { data: scroll_data }))));
    return html;
}
