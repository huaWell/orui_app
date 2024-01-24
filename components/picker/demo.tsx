import { ORUI } from "../base/index.js";
import {get_control} from "../utils/index.js";

export function Picker() {
    const _data = [
        {
            data:[
                {
                    name:'mon',
                    display_name:'周一'
                },
                {
                    name:'tur',
                    display_name:'周二'
                },
                {
                    name:'wed',
                    display_name:'周三'
                },
                {
                    name:'thur',
                    display_name:'周四'
                },
                {
                    name:'fri',
                    display_name:'周五'
                }
            ],
            name:"weekday",
        },
        {
            data:[
                {
                    name:'am',
                    display_name:'上午'
                },
                {
                    name:'pm',
                    display_name:'下午'
                }
            ],
            name:"time",
        }
    ]
    const html = (
        <orui-space direction="vertical">
            <orui-title text="picker基本使用方法">
                <orui-button ui_name="btn1" text="展示picker" onClick={show_basic_picker}/>
                <orui-picker
                    ui_name="basicPicker"
                    data={_data}
                    onChange={onChange}
                    onCancel={close_picker}
                    onConfirm={close_picker}
                />
            </orui-title>
            <orui-title text="picker自定义内容height">
                <orui-button ui_name="btn2" text="自定义内容高度picker" onClick={show_custom_height_picker}/>
                <orui-picker ui_name="custom_item_height_picker"
                             data={_data}
                             onChange={onChange}
                             onCancel={close_picker}
                             onConfirm={close_picker}
                             item_height="50"/>
            </orui-title>
            <orui-title text="picker点击蒙层不关闭">
                <orui-button ui_name="btn3" text="点击蒙层不关闭" onClick={show_not_close_mask_picker}/>
                <orui-picker
                    ui_name="not_close_mask_picker"
                    data={_data}
                    onChange={onChange}
                    onCancel={close_picker}
                    onConfirm={close_picker}
                    close_on_mask_click="false"/>
            </orui-title>
            <orui-title text="picker显示value值">
                <div style="display: flex;align-items: center">
                    <orui-button ui_name="btn4" text="显示value" onClick={show_value_picker}/><span ui_name="value_picker"/>
                </div>
                <orui-picker ui_name="show_value_picker"
                             data={_data}
                             onChange={onChange}
                             onConfirm={valueConfirm}
                             onCancel={close_picker}/>
            </orui-title>
        </orui-space>
    )
    const basicPicker = get_control('basicPicker',html)
    const customItemHeightPicker = get_control("custom_item_height_picker",html)
    const notCloseMaskPicker = get_control("not_close_mask_picker",html)
    const showValuePicker = get_control("show_value_picker",html)
    function show_basic_picker() {
        basicPicker.visible = true
    }
    function show_custom_height_picker() {
        customItemHeightPicker.visible = true
    }
    function show_not_close_mask_picker() {
        notCloseMaskPicker.visible = true
    }
    function show_value_picker() {
        showValuePicker.visible = true
    }
    function close_picker(){
        basicPicker.visible = false
        customItemHeightPicker.visible = false
        notCloseMaskPicker.visible = false
        showValuePicker.visible = false
    }
    function onChange(ev) {
        console.log(ev)
    }

    function valueConfirm() {
        const text = get_control('value_picker')
        let _value = ""
        const keys = Object.keys(showValuePicker.value)
        for(const key of keys){
            _value = _value + ' - ' + showValuePicker.value[key].display_name
        }
        text.innerHTML = _value.replace(' - ',"")
        close_picker()
    }
    return html
}