import {ORUI} from "../base/index.js";
import {get_control, mock_get_data} from "../utils/index.js";

export function ListDemo() {
    let count = 0,total = 0,click_count = 0;

    const create_data = (amount) => {
        let data = [];
        for (let i = 0; i < amount; i++) {
            data.push({
                name: '123',
                name1: count * amount + i + 1,
                xxx: '123131'
            })
        }
        return data
    };


    const action = (e) => {
        const {key} = e.detail;
        let item = e.target;
        if(key == 'delete') {
            item.remove();
        }
        console.log(key);
    };

    const actions = [
        {
            key: 'unsubscribe',
            text: '取消关注',
            color: 'light',
        },
        {
            key: 'mute',
            text: '免打扰',
            color: 'warning',
        },
        {
            key: 'delete',
            text: '删除',
            color: 'danger',
            is_auto_close: false
        }
    ];

    const load = async () => {
        const data = await mock_get_data(create_data(20));
        if(count >  2 && click_count < 2){
            list.loading_state = 'error';
            click_count++;
            return
        }else if(count > 4) {
            list.loading_state = 'finished';
        } else {
            list.loading_state = 'none';
        }
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

    const row_render = (item) => {
        const html = (
            <orui-swipe-action onAction={action} right_actions={actions}>
                <orui-list-item data={item}>
                    <orui-template-test>
                        <orui-button slot="xxxx" data-text='item.name'/>
                        <orui-input slot="title" data-value='item.name1' onChange={report}/>
                    </orui-template-test>
                </orui-list-item>
            </orui-swipe-action>
        );
        return html
    };

    const html = (
        <orui-grid>
            <orui-row>
                <orui-title text="基础用法">
                    <orui-list
                        ui_name="list"
                        loading_state="empty"
                        onLoad={load}
                        row_render={row_render}
                        onRefresh={refresh}
                        data={[]}
                    >
                    </orui-list>
                </orui-title>
            </orui-row>
        </orui-grid>
    );

    const list = get_control('list', html);
    list.refresh();

    mock_get_data({
        name: 'change',
        name1: 'change_value',
        xxx: '4564764865'
    }, 10000).then((item_data) => {
        list.items[10].data = item_data;
    });

    return html
}