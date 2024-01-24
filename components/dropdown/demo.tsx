import { ORUI } from "../base/index.js";

export function DropDownDemo() {
    const basic_data = {
        'select1':[
            {
                name:'a',
                content:'全部商品'
            },
            {
                name:'b',
                content:'部分商品'
            }
        ],
        'select2':[
            {
                name:'1',
                content:'全部商品'
            },
            {
                name:'2',
                content:'部分商品'
            }
        ],
    }
    const basic_value = {select1:"a",select2:'2'}
    const arrow = '<orui-icon path="/components/images/down.svg" color="red" width="0.5625rem" height="0.5625rem"/>'
    const scroll_data = {
        'select1':[
            {
                name:'a',
                content:'全部商品'
            },
            {
                name:'b',
                content:'部分商品'
            }
        ],
        'select2':[
            {
                name:'1',
                content:'全部商品'
            },
            {
                name:'2',
                content:'部分商品'
            }
        ],
        'select3':[
            {
                name:'1',
                content:'全部商品'
            },
            {
                name:'2',
                content:'部分商品'
            }
        ],
        'select4':[
            {
                name:'1',
                content:'全部商品'
            },
            {
                name:'2',
                content:'部分商品'
            }
        ],
        'select5':[
            {
                name:'1',
                content:'全部商品'
            },
            {
                name:'2',
                content:'部分商品'
            }
        ],
        'select6':[
            {
                name:'1',
                content:'全部商品'
            },
            {
                name:'2',
                content:'部分商品'
            }
        ],
    }
    const html = (
        <orui-space direction="vertical">
            <orui-title text="dropDown基本使用">
                <orui-dropdown
                    data={basic_data}
                    value={basic_value}/>
            </orui-title>
            <orui-title text="dropDown自定义图标">
                <orui-dropdown
                    data={basic_data}
                    value={basic_value}
                    arrow={arrow}/>
            </orui-title>
            <orui-title text="dropDown横向滚动">
                <orui-dropdown
                    data={scroll_data}/>
            </orui-title>
        </orui-space>
    )
    return html
}