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
var index_js_2 = require("../../components/router/index.js");
function Message() {
    return __awaiter(this, void 0, void 0, function () {
        function view_sales_order_detail(item) {
            window.localStorage.setItem('sales_order_detail', JSON.stringify(item));
            index_js_2.navigate_to('/sales_order_detail');
            var page = index_js_2.router_provider.get_page('/sales_order_detail');
            if (page) {
                var _form = index_js_1.get_control('detail_form', page);
                _form.data = item;
            }
        }
        var dropDown_data, count, total, click_count, create_data, row_render, load, refresh, report, drop_down_change, html, list;
        var _this = this;
        return __generator(this, function (_a) {
            dropDown_data = {
                "select1": [
                    {
                        "name": "near_one_week",
                        "content": '近一周'
                    },
                    {
                        "name": "near_one_month",
                        "content": "近一月"
                    },
                    {
                        "name": "near_three_month",
                        "content": "近三月"
                    },
                    {
                        "name": "near_six_month",
                        "content": "近六月"
                    }
                ],
                "select2": [
                    {
                        "name": "all",
                        "content": "全部订单"
                    },
                    {
                        "name": "delay",
                        "content": "延误订单"
                    },
                    {
                        "name": "finished",
                        "content": "已完成"
                    },
                    {
                        "name": "unfinished",
                        "content": "未完成"
                    },
                    {
                        "name": "Pushed",
                        "content": "已推送"
                    }
                ]
            };
            count = 0, total = 0, click_count = 0;
            create_data = function (amount) {
                var data = [];
                for (var i = 0; i < amount; i++) {
                    count++;
                    data.push({
                        order_id: '123' + count,
                        custom_name: count,
                        custom_code: count,
                        delay_days: '1'
                    });
                }
                return data;
            };
            row_render = function (item) {
                var html = (<orui-list-item data={item}>
                <link rel='stylesheet' href='/pages/tab2/index.css'/>
                <div className='dialog-list-item' style='display:flex;justify-content:center;width:100%'>
                    <orui-space direction='vertical'>
                        <orui-space align='center' className='dialog-list-item-content'>
                            <span>订单序列号：</span>
                            <orui-input data-value='item.order_id' readonly={true}/>
                        </orui-space>
                        <orui-space align='center' className='dialog-list-item-content'>
                            <span>客户名称：</span>
                            <orui-input data-value='item.custom_name' readonly={true}/>
                        </orui-space>
                        <orui-space align='center' className='dialog-list-item-content'>
                            <span>客户编码：</span>
                            <orui-input data-value='item.custom_code' readonly={true}/>
                        </orui-space>
                        <orui-space align='center' className='dialog-list-item-content'>
                            <span>延误天数：</span>
                            <orui-input data-value='item.delay_days' onChange={report}/>
                        </orui-space>
                        <orui-space align='center' justify='end' className='dialog-list-item-content'>
                            <orui-button type='outline' size='small' color='danger' text='删除'/>
                            <orui-button type='outline' size='small' color='primary' text='查看详情' onClick={function () { view_sales_order_detail(item); }}/>
                        </orui-space>
                    </orui-space>
                </div>
            </orui-list-item>);
                return html;
            };
            load = function () { return __awaiter(_this, void 0, void 0, function () {
                var data;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, index_js_1.mock_get_data(create_data(20))];
                        case 1:
                            data = _a.sent();
                            count++;
                            total = total + 20;
                            list.add_items(data);
                            return [2 /*return*/];
                    }
                });
            }); };
            refresh = function () { return __awaiter(_this, void 0, void 0, function () {
                var data;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            count = 0;
                            click_count = 0;
                            total = 0;
                            return [4 /*yield*/, index_js_1.mock_get_data(create_data(20))];
                        case 1:
                            data = _a.sent();
                            count++;
                            list.data = data;
                            list.loading_state = 'none';
                            return [2 /*return*/];
                    }
                });
            }); };
            report = function (e) {
                console.log('change', e.detail.value);
            };
            drop_down_change = function (ev) {
                list.data = create_data(10);
            };
            html = (<>
            <orui-grid>
                <orui-dropdown style='margin-top:3px' data={dropDown_data} onChange={drop_down_change}/>
                <orui-row style='padding: 16px;box-sizing:border-box'>
                    <orui-list ui_name="list" loading_state="loading" onLoad={load} row_render={row_render} onRefresh={refresh} data={[]}/>
                </orui-row>
            </orui-grid>
        </>);
            list = index_js_1.get_control('list', html);
            list.refresh();
            return [2 /*return*/, html];
        });
    });
}
exports.Message = Message;
