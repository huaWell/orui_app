import {ORUI} from "../../components/base/index.js";
import {get_control, mock_get_data} from "../../components/utils/index.js";
import {navigate_to, router_provider} from "../../components/router/index.js";

export async function Message(){
    const dropDown_data = {
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
    }

    let count = 0,total = 0,click_count = 0
    const create_data = (amount) => {
        let data = [];
        for (let i = 0; i < amount; i++) {
            count ++;
            data.push({
                order_id: '123' + count,
                custom_name: count,
                custom_code: count,
                delay_days: '1'
            })
        }
        return data
    };


    const row_render = (item) => {
        const html = (
            <orui-list-item data={item}>
                <link rel='stylesheet' href='/pages/tab2/index.css' />
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
                            <orui-button type='outline' size='small' color='primary' text='查看详情' onClick={() => {view_sales_order_detail(item)}}/>
                        </orui-space>
                    </orui-space>
                </div>
            </orui-list-item>
        );
        return html
    };
    function view_sales_order_detail(item) {
        window.localStorage.setItem('sales_order_detail',JSON.stringify(item))
        navigate_to('/sales_order_detail')
        const page = router_provider.get_page('/sales_order_detail')
        if(page){
            const _form = get_control('detail_form',page)
            _form.data = item
        }
    }
    const load = async () => {
        const data = await mock_get_data(create_data(20));
        count ++;
        total = total + 20;
        list.add_items(data);
    };

    const refresh = async () => {
        count = 0;
        click_count = 0;
        total = 0;
        const data = await mock_get_data(create_data(20));
        count++;
        list.data = data;
        list.loading_state = 'none';
    };

    const report = (e) => {
        console.log('change', e.detail.value);
    };
    const drop_down_change = (ev) =>  {
        list.data = create_data(10)
    }

    const html = (
        <>
            <orui-grid>
                <orui-dropdown style='margin-top:3px' data={dropDown_data} onChange={drop_down_change}/>
                <orui-row style='padding: 16px;box-sizing:border-box'>
                    <orui-list
                        ui_name="list"
                        loading_state="loading"
                        onLoad={load}
                        row_render={row_render}
                        onRefresh={refresh}
                        data={[]}/>
                </orui-row>
            </orui-grid>
        </>
    )

    let list = get_control('list',html)
    list.refresh()
    

    return html
}