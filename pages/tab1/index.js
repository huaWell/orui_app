// import {mock_get_data} from "../../components/utils";
import { ORUI } from "../../components/base/index.js";
import { deep_copy, formatterTime, get_control, mock_get_data } from "../../components/utils/index.js";
export async function Tab1() {
    function create_todo(number) {
        const res = [];
        for (let i = 0; i < number; i++) {
            const name = 'name' + i;
            const operation = '创建';
            const task_name = '待办' + (i + 1);
            const status = i % 2 == 0 ? 1 : 2;
            const operationTime = formatterTime(new Date(), 'YYYY-MM-DD HH:mm:ss');
            res.push({ name, operation, operationTime, task_name, status });
        }
        return res;
    }
    function create_content(data) {
        data.forEach((_d) => {
            _d.content = ORUI.createElement("orui-radio", { data: [{ name: _d.name, display_name: _d.task_name }], onClick: (ev) => {
                    remove_item(_d);
                } });
        });
        return data;
    }
    if (!window.localStorage.getItem('todo_data')) {
        const mock_data = await mock_get_data(create_todo(20));
        window.localStorage.setItem('todo_data', JSON.stringify(mock_data));
        window.localStorage.setItem('todo_operation_data', JSON.stringify(mock_data));
    }
    const _data = JSON.parse(window.localStorage.getItem('todo_data'));
    const _today_data = deep_copy(_data.filter((item) => {
        if (item.status == 1) {
            return deep_copy(item);
        }
    }));
    const html = (ORUI.createElement(ORUI.createFragment, null,
        ORUI.createElement("orui-grid", { direction: 'vertical', style: 'overflow:scroll' },
            ORUI.createElement("orui-row", { grow: '0' },
                ORUI.createElement("orui-button", { text: '\u65B0\u589E\u5F85\u529E', type: 'fill', color: 'primary', onClick: show_add_pop, style: 'margin:12px' })),
            ORUI.createElement("orui-row", null,
                ORUI.createElement("orui-grid", null,
                    ORUI.createElement("orui-row", { grow: 0 },
                        ORUI.createElement("orui-title", { text: "\u4ECA\u65E5\u5F85\u529E" },
                            ORUI.createElement("orui-check-list", { ui_name: 'today_task', data: create_content(_today_data), active_extra: "" }))),
                    ORUI.createElement("orui-row", { grow: 0 },
                        ORUI.createElement("orui-title", { text: "\u8FD1\u671F\u5F85\u529E" },
                            ORUI.createElement("orui-check-list", { ui_name: 'near_task', data: create_content(_data), active_extra: "" })))))),
        ORUI.createElement("orui-popup", { ui_name: 'add_new_todo_pop', show_operation_bar: "true", body_style: 'height: 80%' },
            ORUI.createElement("orui-button", { text: "\u53D6\u6D88", type: "none", color: "primary", slot: "operation_bar_left", onClick: () => { pop.visible = false; } }),
            ORUI.createElement("orui-button", { text: "\u786E\u8BA4", type: "none", color: "primary", slot: "operation_bar_right", onClick: add_item }),
            ORUI.createElement("orui-grid", null,
                ORUI.createElement("orui-row", { grow: "0" },
                    ORUI.createElement("orui-form", { ui_name: "add_item_form", layout: "horizontal" },
                        ORUI.createElement("orui-form-item", { name: "task_name", display_name: "\u4EFB\u52A1\u540D", is_nullable: "false" },
                            ORUI.createElement("orui-input", null)),
                        ORUI.createElement("orui-form-item", { name: "start_date", is_nullable: "false", display_name: "\u4EFB\u52A1\u5F00\u59CB\u65E5\u671F" },
                            ORUI.createElement("orui-input", { onClick: date_input_click })),
                        ORUI.createElement("orui-form-item", { name: "end_date", is_nullable: "false", display_name: "\u622A\u6B62\u65E5\u671F" },
                            ORUI.createElement("orui-input", { onClick: date_input_click })))))),
        ORUI.createElement("orui-date-picker", { ui_name: "datePicker", onConfirm: date_picker_confirm, precision: 'second', min: '2024', onCancel: () => { datePicker.visible = false; } })));
    const pop = get_control('add_new_todo_pop', html);
    function show_add_pop() {
        pop.visible = true;
    }
    const unfinish_list = get_control("unfinish_list", html);
    let datePicker = get_control('datePicker', html);
    let addItemForm = get_control('add_item_form', html);
    function add_item(ev) {
        const data = addItemForm.data;
        let { start_date, task_name } = data;
        start_date = new Date(start_date);
        const today_date = new Date();
        const _content = { name: task_name, task_name: task_name, operation: '创建任务', operationTime: formatterTime(new Date(), 'YYYY-MM-DD HH:mm:ss') };
        let status = 0;
        if (start_date.getFullYear() == today_date.getFullYear() && start_date.getMonth() == today_date.getMonth() && start_date.getDate() == today_date.getDate()) {
            status = 1;
            _today_data.unshift(_content);
        }
        today_task.data = create_content(_today_data);
        _data.unshift({ ..._content, status: status });
        near_task.data = create_content(_data);
        window.localStorage.setItem('todo_data', JSON.stringify(_data));
        const operation_data = JSON.parse(window.localStorage.getItem('todo_operation_data'));
        operation_data.unshift(_content);
        window.localStorage.setItem('todo_operation_data', JSON.stringify(operation_data));
        pop.visible = false;
        addItemForm.data = {
            task_name: "",
            start_date: "",
            end_date: ''
        };
    }
    let focusInput;
    function date_input_click(ev) {
        const { input } = ev.detail;
        focusInput = input;
        datePicker.visible = true;
    }
    function date_picker_confirm() {
        const value = datePicker.value;
        focusInput.value = formatterTime(new Date(value), 'YYYY-MM-DD HH:mm:ss');
        datePicker.visible = false;
    }
    const today_task = get_control("today_task", html);
    const near_task = get_control("near_task", html);
    function remove_item(item) {
        const re_item_index = _today_data.findIndex((_item) => _item.name == item.name);
        _today_data.splice(re_item_index, 1);
        today_task.data = create_content(_today_data);
        const all_re_item_index = _data.findIndex((_item) => _item.name == item.name);
        _data.splice(all_re_item_index, 1);
        window.localStorage.setItem('todo_data', JSON.stringify(_data));
        near_task.data = create_content(_data);
        const operation_data = JSON.parse(window.localStorage.getItem('todo_operation_data'));
        operation_data.unshift({ ...item, content: null, operation: '完成任务', operationTime: formatterTime(new Date(), 'YYYY-MM-DD HH:mm:ss') });
        window.localStorage.setItem('todo_operation_data', JSON.stringify(operation_data));
    }
    return html;
}
