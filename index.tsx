import {ORUI} from "./components/base/index.js";
import {back, forward, navigate_to} from "./components/router/index.js";
import {Home} from "./pages/home/index.js";
import {Message} from "./pages/message/index.js";
import {PersonalCenter} from "./pages/personalCenter/index.js";
import {Todo} from "./pages/todo/index.js";
import {Login} from "./pages/login/index.js";
import {Tab1} from "./pages/tab1/index.js";
import {Tab2} from "./pages/tab2/index.js";
import {Tab3} from "./pages/tab3/index.js";
import {Detail} from "./pages/message/detail.js";
import {SalesOrder} from "./pages/sales_order/index.js";


export default function App() {
    const routes = [
        {
            path: '/',
            component: () => {
                const token = window.localStorage.getItem('token');
                if(token) {
                    navigate_to('/home', true);
                }else {
                    navigate_to('/login', true);
                }
            }
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/home',
            component: Home,
            redirect: '/home/todo',
            children: [
                {
                    path: '/message',
                    component: Message
                },
                {
                    path: '/personalCenter',
                    component: PersonalCenter
                },
                {
                    path: '/todo',
                    component: Todo,
                    redirect: '/home/todo/tab1',
                    children: [
                        {
                            path: '/tab1',
                            component: Tab1,
                        },
                        {
                            path: '/tab2',
                            component: Tab2,
                        },
                        {
                            path: '/tab3',
                            component: Tab3,
                        }
                    ]
                }
            ]
        },
        {
            path:'/sales_order',
            component: SalesOrder
        },
        {
            path:'/sales_order_detail',
            component: Detail
        },
        {
            path: '*',
            component: () => 'not_found'
        }
    ];

    //false不跳转 true跳转
    const before_change = (to: string) => {
        if(to === '/login') return true;

        const token = window.localStorage.getItem('token');

        if(token) {
            return true
        }else {
            navigate_to('/login');
            return false
        }
    };

    return (
        <orui-grid>
            <orui-row>
                <orui-router-provider routes={routes} before_change={before_change}>
                </orui-router-provider>
            </orui-row>

        </orui-grid>
    )
}

document.getElementById('root').append(<App/>);
