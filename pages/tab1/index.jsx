"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_js_1 = require("../../components/utils/index.js");
function Tab1() {
    return __awaiter(this, void 0, void 0, function () {
        function create_todo(number) {
            var res = [];
            for (var i = 0; i < number; i++) {
                var name_1 = 'name' + i;
                var operation = '创建';
                var task_name = '待办' + (i + 1);
                var status_1 = i % 2 == 0 ? 1 : 2;
                var operationTime = index_js_1.formatterTime(new Date(), 'YYYY-MM-DD HH:mm:ss');
                res.push({ name: name_1, operation: operation, operationTime: operationTime, task_name: task_name, status: status_1 });
            }
            return res;
        }
        function create_content(data) {
            data.forEach(function (_d) {
                _d.content = <orui-radio data={[{ name: _d.name, display_name: _d.task_name }]} onClick={function (ev) {
                    remove_item(_d);
                }}/>;
            });
            return data;
        }
        function show_add_pop() {
            pop.visible = true;
        }
        function add_item(ev) {
            var data = addItemForm.data;
            var start_date = data.start_date, task_name = data.task_name;
            start_date = new Date(start_date);
            var today_date = new Date();
            var _content = { name: task_name, task_name: task_name, operation: '创建任务', operationTime: index_js_1.formatterTime(new Date(), 'YYYY-MM-DD HH:mm:ss') };
            var status = 0;
            if (start_date.getFullYear() == today_date.getFullYear() && start_date.getMonth() == today_date.getMonth() && start_date.getDate() == today_date.getDate()) {
                status = 1;
                _today_data.unshift(_content);
            }
            today_task.data = create_content(_today_data);
            _data.unshift(__assign(__assign({}, _content), { status: status }));
            near_task.data = create_content(_data);
            window.localStorage.setItem('todo_data', JSON.stringify(_data));
            var operation_data = JSON.parse(window.localStorage.getItem('todo_operation_data'));
            operation_data.unshift(_content);
            window.localStorage.setItem('todo_operation_data', JSON.stringify(operation_data));
            pop.visible = false;
            addItemForm.data = {
                task_name: "",
                start_date: "",
                end_date: ''
            };
        }
        function date_input_click(ev) {
            var input = ev.detail.input;
            focusInput = input;
            datePicker.visible = true;
        }
        function date_picker_confirm() {
            var value = datePicker.value;
            focusInput.value = index_js_1.formatterTime(new Date(value), 'YYYY-MM-DD HH:mm:ss');
            datePicker.visible = false;
        }
        function remove_item(item) {
            var re_item_index = _today_data.findIndex(function (_item) { return _item.name == item.name; });
            _today_data.splice(re_item_index, 1);
            today_task.data = create_content(_today_data);
            var all_re_item_index = _data.findIndex(function (_item) { return _item.name == item.name; });
            _data.splice(all_re_item_index, 1);
            window.localStorage.setItem('todo_data', JSON.stringify(_data));
            near_task.data = create_content(_data);
            var operation_data = JSON.parse(window.localStorage.getItem('todo_operation_data'));
            operation_data.unshift(__assign(__assign({}, item), { content: null, operation: '完成任务', operationTime: index_js_1.formatterTime(new Date(), 'YYYY-MM-DD HH:mm:ss') }));
            window.localStorage.setItem('todo_operation_data', JSON.stringify(operation_data));
        }
        var mock_data, _data, _today_data, html, pop, unfinish_list, datePicker, addItemForm, focusInput, today_task, near_task;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!!window.localStorage.getItem('todo_data')) return [3 /*break*/, 2];
                    return [4 /*yield*/, index_js_1.mock_get_data(create_todo(20))];
                case 1:
                    mock_data = _a.sent();
                    window.localStorage.setItem('todo_data', JSON.stringify(mock_data));
                    window.localStorage.setItem('todo_operation_data', JSON.stringify(mock_data));
                    _a.label = 2;
                case 2:
                    _data = JSON.parse(window.localStorage.getItem('todo_data'));
                    _today_data = index_js_1.deep_copy(_data.filter(function (item) {
                        if (item.status == 1) {
                            return index_js_1.deep_copy(item);
                        }
                    }));
                    html = (<>
            <orui-grid direction='vertical' style='overflow:scroll'>
                <orui-row grow='0'>
                    <orui-button text='新增待办' type='fill' color='primary' onClick={show_add_pop} style='margin:12px'/>
                </orui-row>
                <orui-row>
                   <orui-grid>
                       <orui-row grow={0}>
                           <orui-title text="今日待办">
                               <orui-check-list ui_name='today_task' data={create_content(_today_data)} active_extra=""/>
                           </orui-title>
                       </orui-row>
                       <orui-row grow={0}>
                           <orui-title text="近期待办">
                               <orui-check-list ui_name='near_task' data={create_content(_data)} active_extra=""/>
                           </orui-title>
                       </orui-row>
                   </orui-grid>
                </orui-row>
            </orui-grid>
            <orui-popup ui_name='add_new_todo_pop' show_operation_bar="true" body_style='height: 80%'>
                <orui-button text="取消" type="none" color="primary" slot="operation_bar_left" onClick={function () { pop.visible = false; }}/>
                <orui-button text="确认" type="none" color="primary" slot="operation_bar_right" onClick={add_item}/>
                <orui-grid>
                    <orui-row grow="0">
                        <orui-form ui_name="add_item_form" layout="horizontal">
                            <orui-form-item name="task_name" display_name="任务名" is_nullable="false">
                                <orui-input />
                            </orui-form-item>
                            <orui-form-item name="start_date" is_nullable="false" display_name="任务开始日期">
                                <orui-input onClick={date_input_click}/>
                            </orui-form-item>
                            <orui-form-item name="end_date" is_nullable="false" display_name="截止日期">
                                <orui-input onClick={date_input_click}/>
                            </orui-form-item>
                        </orui-form>
                    </orui-row>
                </orui-grid>
            </orui-popup>
            <orui-date-picker ui_name="datePicker" onConfirm={date_picker_confirm} precision='second' min='2024' onCancel={function () { datePicker.visible = false; }}/>
        </>);
                    pop = index_js_1.get_control('add_new_todo_pop', html);
                    unfinish_list = index_js_1.get_control("unfinish_list", html);
                    datePicker = index_js_1.get_control('datePicker', html);
                    addItemForm = index_js_1.get_control('add_item_form', html);
                    today_task = index_js_1.get_control("today_task", html);
                    near_task = index_js_1.get_control("near_task", html);
                    return [2 /*return*/, html];
            }
        });
    });
}
exports.Tab1 = Tab1;
