"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Todo() {
    var click = function () {
        console.log('click');
    };
    var routes = [
        {
            key: 'tab1',
            title: '全部',
            path: '/home/todo/tab1',
        },
        {
            key: 'tab2',
            title: '日志',
            path: '/home/todo/tab2',
        },
        {
            key: 'tab3',
            path: '/home/todo/tab3',
            title: '统计',
        }
    ];
    function change() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log(args);
    }
    return (<orui-tabs-layout routes={routes} className="content" change={change}>
            <orui-outlet />
        </orui-tabs-layout>);
}
exports.Todo = Todo;
