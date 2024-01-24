import {ORUI} from "../../components/base/index.js";
import {mock_get_data} from "../../components/utils/index.js";
import {navigate_to} from "../../components/router/index.js";
// import styles from './index.module.css';


export async function PersonalCenter(){
    const _icon_data = [
        [
            {
                icon:'/components/images/love.svg',
                color:'#094ae6db',
                title:'xxx',
            },
            {
                icon:'/components/images/love.svg',
                color:'#2d98f5db',
                title:'xxxx'
            },
            {
                icon:'/components/images/love.svg',
                color:'#39bff2db',
                title:'xxxxx'
            }
        ],
        [
            {
                icon:'/components/images/love.svg',
                title:'xxx',
                color:'#094ae6db',
            },
            {
                icon:'/components/images/love.svg',
                color:'#2d98f5db',
                title:'xxxx'
            },
            {
                icon:'/components/images/love.svg',
                color:'#39bff2db',
                title:'xxxxx'
            }
        ]
    ]
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
    ]
    function page_change(item) {
        navigate_to(item.path)
    }
    const row_render = (item) => {
        return <orui-row onClick={() => {page_change(item)}}>
            <orui-col>
                <orui-row>
                    <orui-col style='margin-left: 16px;margin-right:12px' justify='center' grow={0}>
                        <orui-icon path='/components/images/smile.svg' width='22px' height='22px'/>
                    </orui-col>
                    <orui-col justify='center'>
                        {item.title}
                    </orui-col>
                </orui-row>
            </orui-col>
            <orui-col justify='center' grow='0' align='end' style='margin-right: 16px'>
                <orui-icon path='/components/images/right.svg'/>
            </orui-col>
        </orui-row>
    }
    return (
        <>
            <link rel="stylesheet" href='/pages/personalCenter/index.css'/>

            <orui-grid>
                <orui-row  className='personal_center_header'>
                    <img className='user_setting' src='/pages/personalCenter/images/setting.svg'/>
                    <div className='user_information'>
                        <img className='user_avatar' src='/pages/personalCenter/images/avatar.svg'/>
                        <div className='user_information_card'>
                            <orui-row class='user_name'>
                                王某某
                            </orui-row>
                            <row class='user_carer'>
                                管理员
                            </row>
                        </div>
                    </div>
                    <div className='personal_center_center_card'>
                        <orui-grid style='padding:5px'>
                            {
                                _icon_data.map((_data) => {
                                    return <orui-row>
                                        {
                                            _data.map((_item) => {
                                                return <orui-col >
                                                    <orui-row align='center' justify='center'>
                                                        <orui-icon color={_item.color} width='34px' height='34px' path={_item.icon}/>
                                                    </orui-row>
                                                    <orui-row align='center' justify='center'>
                                                        <div class='title'>
                                                            {_item.title}
                                                        </div>
                                                    </orui-row>
                                                </orui-col>
                                            })
                                        }
                                    </orui-row>
                                })
                            }
                        </orui-grid>
                    </div>
                </orui-row>
                <orui-grid className='operation_list'>
                    {
                        _data.map((_item) => row_render(_item))
                    }
                </orui-grid>
            </orui-grid>
        </>
    )
}