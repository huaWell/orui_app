"use strict";
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
function Tab2() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return __awaiter(this, void 0, void 0, function () {
        function filter_data(ev) {
            var value = ev.detail.value;
            var _filter_data = _data.filter(function (item) { return item.task_name.indexOf(value) != -1; });
            dialog_list.innerHTML = "";
            dialog_list.append.apply(dialog_list, _filter_data.map(function (item) { return row_render(item); }));
        }
        function refresh_data() {
            _data = JSON.parse(window.localStorage.getItem('todo_operation_data')) || [];
        }
        var _data, row_render, html, dialog_list;
        return __generator(this, function (_a) {
            _data = [];
            refresh_data();
            row_render = function (item) {
                var html = (<orui-list-item data={item} style='display:flex;justify-content:center;width:100%'>
                <link rel='stylesheet' href='/pages/tab2/index.css'/>
                <div className='dialog-list-item'>
                    <orui-grid>
                        <orui-row>
                            <div style='width:100%'>
                                <orui-space>
                                    <orui-icon path='/components/images/love.svg' width='30px' height='30px' color='var(--orui-color-primary)'/>
                                    <orui-space direction='vertical'>
                                        <div>任务名：{item['task_name']}</div>
                                        <orui-space class='dialog-list-item-operation'>
                                            <div>操作：{item['operation']}</div>
                                            <div>操作时间：{item['operationTime']}</div>
                                        </orui-space>
                                    </orui-space>
                                </orui-space>
                            </div>
                        </orui-row>
                    </orui-grid>
                </div>
            </orui-list-item>);
                return html;
            };
            html = (<>
            <orui-grid>
                <orui-row grow={0}>
                    <orui-search-bar onBlur={filter_data}/>
                </orui-row>
                <orui-row>
                    <orui-title text="日志记录">
                       <orui-grid ui_name='dialog_list'>
                           {_data.map(function (item) { return row_render(item); })}
                       </orui-grid>
                    </orui-title>
                </orui-row>
            </orui-grid>
        </>);
            dialog_list = index_js_1.get_control('dialog_list', html);
            return [2 /*return*/, html];
        });
    });
}
exports.Tab2 = Tab2;
