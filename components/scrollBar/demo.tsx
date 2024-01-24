import {ORUI} from "../base/index.js";

export function ScrollBarDemo() {
    const data = []
    for(let i = 0; i < 100; i++){
        const obj = {
            name:'name' + i,
            display_name: 'label' + i
        }
        data.push(obj)
    }
    const html = (
        <orui-title text='scrollBar基本使用'>
            <orui-scroll-bar ui_name="scrollBar" data={data} style="width: 200px;width: 200px" value="name3"/>
        </orui-title>
    )
    return html
}