import {ORUI, ORUIElement} from "../base/index.js";
import {use_get_control} from "../utils/index.js";

export function PopupDemo() {

    const html = (
        <orui-grid>
            <orui-row grow="0">
                <orui-title text="弹出位置">
                    <orui-space wrap="true">
                        <orui-button ui_name="show_bottom" text="底部弹出" onClick={() => {
                            const popup = get_control('bottom');
                            popup.visible = true;
                        }}/>
                        <orui-popup ui_name="bottom"  position="bottom"/>
                        <orui-button ui_name="show_top" text="顶部弹出" onClick={() => {
                            const popup = get_control('top');
                            popup.visible = true;
                        }}/>
                        <orui-popup ui_name="top"  position="top" />
                        <orui-button ui_name="show_left" text="左侧弹出" onClick={() => {
                            const popup = get_control('left');
                            popup.visible = true;
                        }}/>
                        <orui-popup ui_name="left"  position="left"/>
                        <orui-button ui_name="show_right" text="右侧弹出" onClick={() => {
                            const popup = get_control('right');
                            popup.visible = true;
                        }}/>
                        <orui-popup ui_name="right"  position="right"/>
                        <orui-button ui_name="show_center" text="中间弹出" onClick={() => {
                            const popup = get_control('center');
                            popup.visible = true;
                        }}/>
                        <orui-popup ui_name="center"  position="center"/>
                    </orui-space>
                </orui-title>
            </orui-row>
            <orui-row grow="0">
                <orui-title text="自定义内容样式">
                    <orui-space wrap="true">
                        <orui-button ui_name="show_custom_width" text="自定义宽度" onClick={ () => {
                            const popup = get_control('custom_width');
                            popup.visible = true;
                        }}/>
                        <orui-popup ui_name="custom_width"  position="right" body_style="width: 80%"/>
                        <orui-button ui_name="show_custom_height" text="自定义高度" onClick={() => {
                            const popup = get_control('custom_height');
                            popup.visible = true;
                        }}/>
                        <orui-popup ui_name="custom_height"  position="bottom" body_style="height: 80%"/>
                    </orui-space>
                </orui-title>
            </orui-row>
            <orui-row grow="0">
                <orui-title text="多层弹窗">
                    <orui-button ui_name="show_parent_popup" text="显示弹窗" onClick={() => {
                        const popup = get_control('parent');
                        popup.visible = true;
                    }}/>
                    <orui-popup ui_name="parent">
                        <orui-button ui_name="show_child_popup" text="显示第二层" onClick={ () => {
                            const popup = get_control('child');
                            popup.visible = true;
                        }}/>
                    </orui-popup>
                    <orui-popup ui_name="child"  position="center">提示</orui-popup>
                </orui-title>
            </orui-row>
            <orui-row grow="0">
                <orui-title text="事件监听">
                    <orui-button ui_name="show_event_click" text="监听关闭事件" onClick={() => {
                        const show_event_click_popup = get_control('event_click');
                        show_event_click_popup.visible = true;
                    }}/>
                    <orui-popup ui_name="event_click" onClose={() => {
                        window.alert('点击了关闭');
                    }}/>
                </orui-title>
            </orui-row>
            <orui-row grow="0">
                <orui-title text="点击mask不关闭">
                    <orui-space wrap="true">
                        <orui-button ui_name="show_no_close_on_mask" text="点击mask不关闭" onClick={() => {
                                const no_close_on_mask_popup = get_control('no_close_on_mask');
                                no_close_on_mask_popup.visible = true;
                            }
                        }/>
                        <orui-popup ui_name="no_close_on_mask" show_operation_bar="true" close_on_mask_click="false">
                            <orui-icon path="/components/images/close_circle.svg" ui_name="close" slot="operation_bar_left" onClick={() => {
                                const no_close_on_mask_popup = get_control('no_close_on_mask');
                                no_close_on_mask_popup.visible = false;
                            }}/>
                        </orui-popup>
                    </orui-space>
                </orui-title>
            </orui-row>
            <orui-row grow="0">
                <orui-title text="没有mask">
                    <orui-space wrap="true">
                        <orui-button ui_name="show_no_mask" text="没有mask" onClick={() => {
                            const no_mask_popup = get_control("no_mask")
                            no_mask_popup.visible = true;
                        }}/>
                        <orui-popup ui_name="no_mask" position="top" mask="false" show_operation_bar="true">
                            <orui-icon path="/components/images/close_circle.svg" ui_name="close" slot="operation_bar_left" onClick={() => {
                                const no_mask_popup = get_control("no_mask")
                                no_mask_popup.visible = false;
                            }}/>
                        </orui-popup>
                    </orui-space>
                </orui-title>
            </orui-row>
            <orui-row grow="0">
                <orui-title text="自定义按钮">
                    <orui-space wrap="true">
                        <orui-button ui_name="show_custom_operation_bar" text="自定义按钮" onClick={() => {
                            const custom_operation_bar_popup = get_control('custom_operation_bar');
                            custom_operation_bar_popup.visible = true;
                        }}/>
                        <orui-popup ui_name="custom_operation_bar" show_operation_bar="true">
                            <orui-button text="取消" type="none" color="primary" ui_name="cancel" slot="operation_bar_left" onClick={() => {
                                const custom_operation_bar_popup = get_control('custom_operation_bar');
                                custom_operation_bar_popup.visible = false;
                            }}/>
                            <orui-button text="确认" type="none" color="primary" ui_name="confirm" slot="operation_bar_right" onClick={() => {
                                const custom_operation_bar_popup = get_control('custom_operation_bar');
                                custom_operation_bar_popup.visible = false;
                            }}/>
                            自定义按钮
                        </orui-popup>
                    </orui-space>
                </orui-title>
            </orui-row>
            <orui-row grow="0">
                <orui-title text="显示关闭按钮">
                    <orui-space wrap="true">
                        <orui-button ui_name="show_close_button" text="显示关闭按钮" onClick={() => {
                            const close_button_popup = get_control('close_button');
                            close_button_popup.visible = true;
                        }}/>
                        <orui-popup ui_name="close_button" show_operation_bar="true">
                            <orui-icon path="/components/images/close_circle.svg" ui_name="close" slot="operation_bar_right" onClick={() => {
                                const close_button_popup = get_control('close_button');
                                close_button_popup.visible = false;
                            }}/>
                        </orui-popup>
                        <orui-button ui_name="show_close_button_left" text="显示左侧的关闭按钮" onClick={() => {
                            const close_button_left_popup = get_control('close_button_left');
                            close_button_left_popup.visible = true;
                        }}/>
                        <orui-popup ui_name="close_button_left"  position="right" body_style="width: 100%" show_operation_bar="true">
                            <orui-icon path="/components/images/close_circle.svg" ui_name="close" slot="operation_bar_left" onClick={() => {
                                const close_button_left_popup = get_control('close_button_left');
                                close_button_left_popup.visible = false;
                            }}/>
                        </orui-popup>
                    </orui-space>
                </orui-title>
            </orui-row>
        </orui-grid>
    );

    const get_control = use_get_control(html);
    return html
}