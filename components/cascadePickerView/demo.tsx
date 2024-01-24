import { ORUI } from "../base/index.js"

export function CascaderPickerViewDemo() {
    const _data = {
        data:[
            {
                name: '浙江',
                display_name: '浙江',
                children: {
                    data:[
                        {
                            name: '杭州',
                            display_name: '杭州',
                        },
                        {
                            name: '宁波',
                            display_name: '宁波',
                        }
                    ],
                    name:'another',
                }
            },
            {
                name: '江苏',
                display_name: '江苏',
                children: {
                    data:[
                        {
                            name: '南京',
                            display_name: '南京',
                        },
                        {
                            name: '苏州',
                            display_name: '苏州',
                        },
                    ],
                    name:'another'
                }
            },
        ],
        name:'province'
    }
    const _value = {
        "province": "江苏",
        "another": "苏州"
    }
    const lazy_data = {
        data:[
            {
                name: '浙江',
                display_name: '浙江',
            },
            {
                name: '江苏',
                display_name: '江苏',
            },
        ],
        name:'province',
    }
    const lazy_value = {
        "province": "江苏",
    }
    let is_init = false
    function lazy_load_fun(name) {
        return new Promise(resolve => {
            let res
            if(name == '浙江'){
                const obj = {
                    data:[
                        {
                            name: '杭州',
                            display_name: '杭州',
                        },
                        {
                            name: '宁波',
                            display_name: '宁波',
                        }
                    ],
                    name:'another',
                }
                //@ts-ignore
                obj.value = is_init?"":"宁波"
                is_init = true
                res = obj
            }else if(name == '江苏'){
                const obj =  {
                    data:[
                        {
                            name: '南京',
                            display_name: '南京',
                        },
                        {
                            name: '苏州',
                            display_name: '苏州',
                        },
                    ],
                    name:'another',
                }
                //@ts-ignore
                obj.value = is_init?"" : '苏州'
                is_init = true
                res = obj
            }else {
                res = {}
            }
            resolve(res)
        })
    }
    async function onChange(ev) {
        const {data,value} = ev.detail
        console.log(data,value,'change')
    }
    const html =(
        <orui-space direction="vertical">
            <orui-title text="pickerCascadePickerView基本使用方法">
                <orui-cascader-picker-view data={_data}
                                           ui_name="cascader_picker_view"/>
            </orui-title>
            <orui-title text="pickerCascerPickerView有默认值">
                <orui-cascader-picker-view data={_data}
                                           value={_value}
                                           ui_name="cascader_picker_view1"/>
            </orui-title>
            <orui-title text="pickerCascerPickerView懒加载">
                <orui-cascader-picker-view data={lazy_data}
                                           value={lazy_value}
                                           lazy_load={lazy_load_fun}
                                           onChange={onChange}
                                           ui_name="cascader_picker_view2"/>
            </orui-title>
        </orui-space>
    )
    return html
}