import { ORUI } from "../base/index.js";

export function ButtonDemo() {
    const html = (
        <orui-grid>
            <orui-row grow="0">
                <orui-title text="block按钮">
                    <orui-button  text="test按钮" block="1" type="fill" size="large" onClick={(ev) => {console.log(ev)}}/>
                </orui-title>
            </orui-row>
            <orui-row grow="0">
                <orui-title text="不同尺寸的按钮">
                    <orui-space align="center" wrap="1">
                        <orui-button  text="mini" type="fill" color="default" size="mini"/>
                        <orui-button  text="small" type="fill" color="default" size="small"/>
                        <orui-button  text="normal" type="fill" color="default"/>
                        <orui-button  text="large" type="fill" color="default" size="large"/>
                    </orui-space>
                </orui-title>
            </orui-row>
            <orui-row grow="0">
                <orui-title text="不同颜色fill的按钮">
                    <orui-space align="center" wrap="1">
                        <orui-button  text="primary" type="fill" color="primary"/>
                        <orui-button  text="danger" type="fill" color="danger"/>
                        <orui-button  text="success" type="fill" color="success"/>
                        <orui-button  text="warning" type="fill" color="warning"/>
                    </orui-space>
                </orui-title>
            </orui-row>
            <orui-row grow="0">
                <orui-title text="不同颜色outline的按钮">
                    <orui-space align="center" wrap="1">
                        <orui-button  text="test按钮" type="outline" color="default"/>
                        <orui-button  text="test按钮" type="outline" color="primary"/>
                        <orui-button  text="test按钮" type="outline" color="danger"/>
                        <orui-button  text="test按钮" type="outline" color="success"/>
                        <orui-button  text="test按钮" type="outline" color="warning"/>
                    </orui-space>
                </orui-title>
            </orui-row>
            <orui-row grow="0">
                <orui-title text="不同颜色的不带边框按钮">
                    <orui-space align="center" wrap="1">
                        <orui-button  text="test按钮" type="none" color="default" id="test"/>
                        <orui-button  text="test按钮" type="none" color="primary"/>
                        <orui-button  text="test按钮" type="none" color="danger"/>
                        <orui-button  text="test按钮" type="none" color="success"/>
                        <orui-button  text="test按钮" type="none" color="warning"/>
                    </orui-space>
                </orui-title>
            </orui-row>
            <orui-row grow="0">
                <orui-title text="带icon按钮">
                    <orui-space align="center" wrap="1">
                        <orui-button  text="test按钮" type="fill" size="mini" color="primary" id="test" icon="/components/images/search.svg"/>
                        <orui-button  text="test按钮" type="fill" size="small" color="primary" id="test" icon="/components/images/search.svg"/>
                        <orui-button  text="test按钮" type="fill" size="normal" color="primary" id="test" icon="/components/images/search.svg"/>
                        <orui-button  text="test按钮" type="fill" size="large" color="primary" id="test" icon="/components/images/search.svg"/>
                    </orui-space>
                </orui-title>
            </orui-row>
            <orui-row grow="0">
                <orui-space align="center" wrap="1">
                    <orui-title text="icon位置自定义">
                        <orui-space>
                            <orui-button  text="test按钮" type="outline" size="mini" color="default" id="test" icon="/components/images/search.svg" icon_align="right"/>
                            <orui-button  text="" type="outline" size="mini" color="default" icon="/components/images/search.svg" icon_align="center"/>
                            <orui-button  text="" type="outline" size="mini" color="default" icon="/components/images/search.svg" icon_align="center"/>
                        </orui-space>
                    </orui-title>
                    <orui-title text="自定义font-weight">
                        <orui-space>
                            <orui-button  text="test按钮" type="none" size="mini" color="primary" custom_style="--font-weight: bold"/>
                        </orui-space>
                    </orui-title>
                </orui-space>
            </orui-row>
            <orui-row grow="0">
                <orui-title text="disabled">
                    <orui-button  text="test按钮" disable="true"/>
                </orui-title>
            </orui-row>
        </orui-grid>
    )
    return html
}