import { ORUI } from "./base/index.js";
export function Demo() {
    const create_items = (item) => {
        const { text, data } = item;
        const html = (ORUI.createElement("orui-row", { grow: "0" },
            ORUI.createElement("orui-title", { text: text },
                ORUI.createElement("orui-space", { direction: "vertical", style: "width: 100%" }, data.map(create_item)))));
        return html;
    };
    const create_item = (item) => {
        const { text, url } = item;
        const html = (ORUI.createElement("orui-space", { onClick: () => {
                window.location.href = url;
            }, align: "center", justify: "between", style: "\r\n                width: 100%;\r\n                height: 40px;\r\n                border: 1px solid var(--orui-color-border);\r\n                border-radius: 99px;\r\n                padding: 0 var(--orui-padding-4);\r\n                box-sizing: border-box;\r\n                " },
            text,
            ORUI.createElement("orui-icon", { path: '/components/images/right.svg' })));
        return html;
    };
    const html = (ORUI.createElement("orui-grid", { style: "padding: 2rem 0 1rem 1rem; box-sizing: border-box;" },
        ORUI.createElement("orui-row", { grow: "0", style: "padding: 1rem; box-sizing: border-box;" },
            ORUI.createElement("orui-col", null,
                ORUI.createElement("orui-space", { style: "width: 100%; margin-bottom: 0.5rem" },
                    ORUI.createElement("orui-col", { grow: "0", justify: "center" },
                        ORUI.createElement("orui-icon", { path: "/images/logo.svg", width: "3.2rem", height: "2rem", color: "rgba(22,119,255, 0.7)" })),
                    ORUI.createElement("orui-col", { grow: "0" },
                        ORUI.createElement("orui-row", { style: "font-size: 2rem;" }, "ORUI"))),
                ORUI.createElement("orui-row", { grow: "0", style: "color: var(--orui-color-text-secondary)" }, "\u8F7B\u4FBF\u3001\u6613\u7528\u7684web components\u7EC4\u4EF6\u5E93"))),
        data.map(create_items)));
    return html;
}
const data = [
    {
        text: '通用组件',
        data: [
            {
                text: 'Button 按钮',
                url: './button'
            },
            {
                text: 'Icon 图标',
                url: './icon'
            }
        ]
    },
    {
        text: '布局组件',
        data: [
            {
                text: 'Divider 分割线',
                url: './divider'
            },
            {
                text: 'Grid 栅格',
                url: './grid'
            }
        ]
    },
    {
        text: '导航组件',
        data: [
            {
                text: 'NavBar 导航栏',
                url: './navBar'
            },
            {
                text: 'TabBar 标签栏',
                url: './tabBar'
            },
            {
                text: 'Tab 标签页',
                url: './tab'
            }
        ]
    },
    {
        text: '展示组件',
        data: [
            {
                text: 'List 列表',
                url: './list'
            }
        ]
    },
    {
        text: '录入组件',
        data: [
            {
                text: 'Radio 单-复选框',
                url: './radio'
            },
            {
                text: 'Form 表单',
                url: './form'
            },
            {
                text: 'Input 输入框-文本域',
                url: './input'
            },
            {
                text: 'Picker 选择器',
                url: './picker'
            },
            {
                text: 'PickerView 选择器视图',
                url: './pickerView'
            },
            {
                text: 'CascadePicker 级联选择',
                url: './cascadePicker'
            },
            {
                text: 'CascadePickerView 级联选择视图',
                url: './cascadePickerView'
            },
            {
                text: 'DatePicker 日期选择',
                url: './datePicker'
            },
            {
                text: 'CheckList 可勾选列表',
                url: './checkList'
            },
            {
                text: 'DatePickerView 日期选择视图',
                url: './datePickerView'
            },
            {
                text: 'SearchBar 搜索框',
                url: './searchBar'
            },
            {
                text: 'Selector 选择组',
                url: './selector'
            },
            {
                text: 'Slider 滑动输入条',
                url: './slider'
            },
            {
                text: 'Stepper 步进器',
                url: './stepper'
            }
        ]
    },
    {
        text: '反馈组件',
        data: [
            {
                text: 'Dialog 对话框',
                url: './dialog'
            },
            {
                text: 'Popup 弹出层',
                url: './popup'
            },
            {
                text: 'ProgressBar 进度条',
                url: './progressBar'
            },
            {
                text: 'Toast 轻提示',
                url: './toast'
            },
            {
                text: 'Dropdown 下拉菜单',
                url: './dropdown'
            },
            {
                text: 'PullToRefresh 下拉刷新',
                url: './pullToRefresh'
            },
            {
                text: 'ScrollBar 滚动条',
                url: './scrollBar'
            },
            {
                text: 'SwipeAction 滑动操作',
                url: './swipeAction'
            },
            {
                text: 'Mask 背景蒙层',
                url: './mask'
            }
        ]
    }
];
document.getElementById('root').append(ORUI.createElement(Demo, null));
