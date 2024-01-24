import { ORUI } from "../base/index.js";

export function CheckListDemo() {
    const data1 =  [
        {
            name: 'A',
            content: 'A'
        },
        {
            name: 'B',
            content: 'B'
        },
        {
            name: 'C',
            content: 'C',
            disabled: true
        },
        {
            name: 'D',
            content: 'D',
            readonly: true
        }
    ]
    const data2 =  [
        {
            name: 'A',
            content: 'A'
        },
        {
            name: 'B',
            content: 'B'
        },
        {
            name: 'C',
            content: 'C'
        }
    ]
    const value = ['B']
    const html = (
        <orui-space direction="vertical">
            <orui-title text="checkList基本使用">
                <orui-check-list data={data1} value={value}/>
            </orui-title>
            <orui-title text="可多选">
                <orui-check-list data={data2} value={value} multiple="true"/>
            </orui-title>
            <orui-title text="不可清除">
                <orui-check-list data={data2} value={value} clearable="false"/>
            </orui-title>
            <orui-title text="自定义右侧内容">
                <orui-check-list
                    data={data2}
                    value={value}
                    extra="<orui-icon path='/components/images/smile.svg'></orui-icon>"
                    active_extra="<orui-icon path='/components/images/smile.svg' color='var(--orui-color-primary)'></orui-icon>"/>
            </orui-title>
            <orui-title text="整组只读">
                <orui-check-list data={data2}  value={value} readonly="true"/>
            </orui-title>
            <orui-title text="整组禁用">
                <orui-check-list data={data2} value={value} disabled="true"/>
            </orui-title>
        </orui-space>
    )
    return html
}