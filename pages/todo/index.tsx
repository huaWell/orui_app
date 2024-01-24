import {ORUI} from "../../components/base/index.js";
import {PersonalCenter} from "../personalCenter/index.js";

export function Todo(){
    const click = () => {
        console.log('click')
    };
    const routes = [
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
            path:'/home/todo/tab3',
            title: '统计',
        }
    ]
    function change(...args) {
        console.log(args)
    }
    return (
        <orui-tabs-layout routes={routes} className="content" change={change}>
            <orui-outlet/>
        </orui-tabs-layout>
    )
}