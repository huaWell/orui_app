import { ORUI } from "../base/index.js"

export function TabDemo() {
    const html = (
        <orui-space direction="vertical">
            <orui-title text="tabs基本使用">
                <orui-tabs ui_name="basic_tab" id="my_tab">
                    <orui-tab-item key="1"  title="1">
                        111111
                    </orui-tab-item>
                    <orui-tab-item key="2"  title="2">
                        2222222
                    </orui-tab-item>
                    <orui-tab-item key="3" title="3">
                        3333333
                    </orui-tab-item>
                    <orui-tab-item key="4"  title="4">
                        444444444
                    </orui-tab-item>
                </orui-tabs>
            </orui-title>
            <orui-title text="tabs超长tab自动滚动">
                <orui-tabs ui_name="auto_scroll_tab" id="my_tab">
                    <orui-tab-item key="1"  title="超极长的tabname">
                        111111
                    </orui-tab-item>
                    <orui-tab-item key="2"  title="超极长的tabname1">
                        2222222
                    </orui-tab-item>
                    <orui-tab-item key="3"  title="超极长的tabname2">
                        3333333
                    </orui-tab-item>
                    <orui-tab-item key="4"  title="超极长的tabname3">
                        444444444
                    </orui-tab-item>
                </orui-tabs>
            </orui-title>
            <orui-title text="tabs自定义下划线长度">
                <orui-tabs underline_width="25px">
                    <orui-tab-item key="1"  title="超极长的超极长的">
                        111111
                    </orui-tab-item>
                    <orui-tab-item key="2" title="超极长的超极长的">
                        2222222
                    </orui-tab-item>
                    <orui-tab-item key="3" title="超极长的超极长的">
                        3333333
                    </orui-tab-item>
                    <orui-tab-item key="4" title="超极长的超极长的">
                        444444444
                    </orui-tab-item>
                </orui-tabs>
            </orui-title>
            <orui-title text="tabs方向靠右">
                <orui-tabs underline_width="25px" direction="right">
                    <orui-tab-item key="1" title="超极长的超极长的">
                        111111
                    </orui-tab-item>
                    <orui-tab-item key="2" title="超极长的超极长的">
                        2222222
                    </orui-tab-item>
                    <orui-tab-item key="3" title="超极长的超极长的">
                        3333333
                    </orui-tab-item>
                    <orui-tab-item key="4" title="超极长的超极长的">
                        444444444
                    </orui-tab-item>
                </orui-tabs>
            </orui-title>
        </orui-space>
    )
    return html
}