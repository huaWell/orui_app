import { ORUI } from "../../components/base/index.js";
import { get_control } from "../../components/utils/index.js";
export async function Tab2(...args) {
    let _data = [];
    refresh_data();
    const row_render = (item) => {
        const html = (ORUI.createElement("orui-list-item", { data: item, style: 'display:flex;justify-content:center;width:100%' },
            ORUI.createElement("link", { rel: 'stylesheet', href: '/pages/tab2/index.css' }),
            ORUI.createElement("div", { className: 'dialog-list-item' },
                ORUI.createElement("orui-grid", null,
                    ORUI.createElement("orui-row", null,
                        ORUI.createElement("div", { style: 'width:100%' },
                            ORUI.createElement("orui-space", null,
                                ORUI.createElement("orui-icon", { path: '/components/images/love.svg', width: '30px', height: '30px', color: 'var(--orui-color-primary)' }),
                                ORUI.createElement("orui-space", { direction: 'vertical' },
                                    ORUI.createElement("div", null,
                                        "\u4EFB\u52A1\u540D\uFF1A",
                                        item['task_name']),
                                    ORUI.createElement("orui-space", { class: 'dialog-list-item-operation' },
                                        ORUI.createElement("div", null,
                                            "\u64CD\u4F5C\uFF1A",
                                            item['operation']),
                                        ORUI.createElement("div", null,
                                            "\u64CD\u4F5C\u65F6\u95F4\uFF1A",
                                            item['operationTime']))))))))));
        return html;
    };
    const html = (ORUI.createElement(ORUI.createFragment, null,
        ORUI.createElement("orui-grid", null,
            ORUI.createElement("orui-row", { grow: 0 },
                ORUI.createElement("orui-search-bar", { onBlur: filter_data })),
            ORUI.createElement("orui-row", null,
                ORUI.createElement("orui-title", { text: "\u65E5\u5FD7\u8BB0\u5F55" },
                    ORUI.createElement("orui-grid", { ui_name: 'dialog_list' }, _data.map((item) => row_render(item))))))));
    const dialog_list = get_control('dialog_list', html);
    function filter_data(ev) {
        const { value } = ev.detail;
        const _filter_data = _data.filter((item) => item.task_name.indexOf(value) != -1);
        dialog_list.innerHTML = "";
        dialog_list.append(..._filter_data.map((item) => row_render(item)));
    }
    function refresh_data() {
        _data = JSON.parse(window.localStorage.getItem('todo_operation_data')) || [];
    }
    return html;
}
