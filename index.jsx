"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_js_1 = require("./components/router/index.js");
var index_js_2 = require("./pages/home/index.js");
var index_js_3 = require("./pages/message/index.js");
var index_js_4 = require("./pages/personalCenter/index.js");
var index_js_5 = require("./pages/todo/index.js");
var index_js_6 = require("./pages/login/index.js");
var index_js_7 = require("./pages/tab1/index.js");
var index_js_8 = require("./pages/tab2/index.js");
var index_js_9 = require("./pages/tab3/index.js");
var detail_js_1 = require("./pages/message/detail.js");
var index_js_10 = require("./pages/sales_order/index.js");
function App() {
    var routes = [
        {
            path: '/',
            component: function () {
                var token = window.localStorage.getItem('token');
                if (token) {
                    index_js_1.navigate_to('/home', true);
                }
                else {
                    index_js_1.navigate_to('/login', true);
                }
            }
        },
        {
            path: '/login',
            component: index_js_6.Login
        },
        {
            path: '/home',
            component: index_js_2.Home,
            redirect: '/home/todo',
            children: [
                {
                    path: '/message',
                    component: index_js_3.Message
                },
                {
                    path: '/personalCenter',
                    component: index_js_4.PersonalCenter
                },
                {
                    path: '/todo',
                    component: index_js_5.Todo,
                    redirect: '/home/todo/tab1',
                    children: [
                        {
                            path: '/tab1',
                            component: index_js_7.Tab1,
                        },
                        {
                            path: '/tab2',
                            component: index_js_8.Tab2,
                        },
                        {
                            path: '/tab3',
                            component: index_js_9.Tab3,
                        }
                    ]
                }
            ]
        },
        {
            path: '/sales_order',
            component: index_js_10.SalesOrder
        },
        {
            path: '/sales_order_detail',
            component: detail_js_1.Detail
        },
        {
            path: '*',
            component: function () { return 'not_found'; }
        }
    ];
    //false不跳转 true跳转
    var before_change = function (to) {
        if (to === '/login')
            return true;
        var token = window.localStorage.getItem('token');
        if (token) {
            return true;
        }
        else {
            index_js_1.navigate_to('/login');
            return false;
        }
    };
    return (<orui-grid>
            <orui-row>
                <orui-router-provider routes={routes} before_change={before_change}>
                </orui-router-provider>
            </orui-row>

        </orui-grid>);
}
exports.default = App;
document.getElementById('root').append(<App />);
