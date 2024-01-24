import { ORUI } from "../../components/base/index.js";
import {formatterTime, get_control, mock_get_data} from "../../components/utils/index.js";


export async function Tab2(...args) {
    let _data = []
    refresh_data()
    const row_render = (item) => {
        const html = (
            <orui-list-item data={item} style='display:flex;justify-content:center;width:100%'>
                <link rel='stylesheet' href='/pages/tab2/index.css' />
                <div className='dialog-list-item'>
                    <orui-grid>
                        <orui-row>
                            <div style='width:100%'>
                                <orui-space>
                                    <orui-icon
                                        path='/components/images/love.svg'
                                        width='30px'
                                        height='30px'
                                        color='var(--orui-color-primary)'/>
                                    <orui-space direction='vertical'>
                                        <div >任务名：{item['task_name']}</div>
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
            </orui-list-item>
        )
        return html
    }
    const html = (
        <>
            <orui-grid>
                <orui-row grow={0}>
                    <orui-search-bar onBlur={filter_data}/>
                </orui-row>
                <orui-row>
                    <orui-title text="日志记录">
                       <orui-grid ui_name='dialog_list'>
                           {
                               _data.map((item) => row_render(item))
                           }
                       </orui-grid>
                    </orui-title>
                </orui-row>
            </orui-grid>
        </>
    )
    const dialog_list = get_control('dialog_list',html)
    function filter_data(ev) {
        const { value } = (ev as CustomEvent).detail
        const _filter_data = _data.filter((item) => item.task_name.indexOf(value) != -1)
        dialog_list.innerHTML = ""
        dialog_list.append(..._filter_data.map((item) => row_render(item)))
    }
    
    function refresh_data() {
        _data = JSON.parse(window.localStorage.getItem('todo_operation_data')) || []
    }


    return html
}