import { ORUI } from "../../components/base/index.js";
import { navigate_to } from "../../components/router/index.js";
// import styles from './index.module.css';
export async function PersonalCenter() {
    const _icon_data = [
        [
            {
                icon: '/components/images/love.svg',
                color: '#094ae6db',
                title: 'xxx',
            },
            {
                icon: '/components/images/love.svg',
                color: '#2d98f5db',
                title: 'xxxx'
            },
            {
                icon: '/components/images/love.svg',
                color: '#39bff2db',
                title: 'xxxxx'
            }
        ],
        [
            {
                icon: '/components/images/love.svg',
                title: 'xxx',
                color: '#094ae6db',
            },
            {
                icon: '/components/images/love.svg',
                color: '#2d98f5db',
                title: 'xxxx'
            },
            {
                icon: '/components/images/love.svg',
                color: '#39bff2db',
                title: 'xxxxx'
            }
        ]
    ];
    const _data = [
        {
            name: 'sales_order',
            path: '/sales_order',
            title: '销售订单'
        },
        {
            name: 'my_count',
            path: '/my_count',
            title: '我的账户'
        },
        {
            name: 'online_ask',
            path: '/online_ask',
            title: '在线咨询'
        },
        {
            name: 'about_us',
            path: '/about_us',
            title: '关于我们'
        },
        {
            name: 'share',
            path: '/share',
            title: '分享'
        },
        {
            name: 'record',
            path: '/record',
            title: '记录'
        }
    ];
    function page_change(item) {
        navigate_to(item.path);
    }
    const row_render = (item) => {
        return ORUI.createElement("orui-row", { onClick: () => { page_change(item); } },
            ORUI.createElement("orui-col", null,
                ORUI.createElement("orui-row", null,
                    ORUI.createElement("orui-col", { style: 'margin-left: 16px;margin-right:12px', justify: 'center', grow: 0 },
                        ORUI.createElement("orui-icon", { path: '/components/images/smile.svg', width: '22px', height: '22px' })),
                    ORUI.createElement("orui-col", { justify: 'center' }, item.title))),
            ORUI.createElement("orui-col", { justify: 'center', grow: '0', align: 'end', style: 'margin-right: 16px' },
                ORUI.createElement("orui-icon", { path: '/components/images/right.svg' })));
    };
    return (ORUI.createElement(ORUI.createFragment, null,
        ORUI.createElement("link", { rel: "stylesheet", href: '/pages/personalCenter/index.css' }),
        ORUI.createElement("orui-grid", null,
            ORUI.createElement("orui-row", { className: 'personal_center_header' },
                ORUI.createElement("img", { className: 'user_setting', src: '/pages/personalCenter/images/setting.svg' }),
                ORUI.createElement("div", { className: 'user_information' },
                    ORUI.createElement("img", { className: 'user_avatar', src: '/pages/personalCenter/images/avatar.svg' }),
                    ORUI.createElement("div", { className: 'user_information_card' },
                        ORUI.createElement("orui-row", { class: 'user_name' }, "\u738B\u67D0\u67D0"),
                        ORUI.createElement("row", { class: 'user_carer' }, "\u7BA1\u7406\u5458"))),
                ORUI.createElement("div", { className: 'personal_center_center_card' },
                    ORUI.createElement("orui-grid", { style: 'padding:5px' }, _icon_data.map((_data) => {
                        return ORUI.createElement("orui-row", null, _data.map((_item) => {
                            return ORUI.createElement("orui-col", null,
                                ORUI.createElement("orui-row", { align: 'center', justify: 'center' },
                                    ORUI.createElement("orui-icon", { color: _item.color, width: '34px', height: '34px', path: _item.icon })),
                                ORUI.createElement("orui-row", { align: 'center', justify: 'center' },
                                    ORUI.createElement("div", { class: 'title' }, _item.title)));
                        }));
                    })))),
            ORUI.createElement("orui-grid", { className: 'operation_list' }, _data.map((_item) => row_render(_item))))));
}
