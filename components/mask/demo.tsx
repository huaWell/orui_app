import {ORUI} from "../base/index.js";
import {use_get_control} from "../utils/index.js";



export function MaskDemo() {
    const html = (
        <orui-grid>
            <orui-row grow="0">
                <orui-title text="基础使用">
                    <orui-space wrap="true">
                        <orui-mask visible="false" ui_name="mask" onClick={
                            () => {
                                mask.visible = false;
                            }
                        }/>
                        <orui-button text="显示mask" onClick={() => {
                            mask.visible = true;
                        }}/>
                    </orui-space>
                </orui-title>
            </orui-row>
            <orui-row grow="0">
                <orui-title text="修改颜色">
                    <orui-space wrap="true">
                        <orui-mask visible="false" ui_name="mask1" color="gray" onClick={
                            () => {
                                mask1.visible = false;
                            }
                        }/>
                        <orui-button text="显示mask" onClick={() => {
                            mask1.visible = true;
                        }}/>
                    </orui-space>
                </orui-title>
            </orui-row>
        </orui-grid>
    );

    const get_control = use_get_control(html);
    const mask = get_control('mask');
    const mask1 = get_control('mask1');

    return html
}