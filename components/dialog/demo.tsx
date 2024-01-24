import { ORUI } from "../base/index.js";
import {DIALOG} from "./index.js";

export function DialogDemo() {
    //基础使用
    async function basic_alert(){
        await DIALOG.alert({
            content: '这是一个弹窗'
        });
        console.log('点击了弹窗');
    }

    //自定义按钮
    function custom_click ()  {
        DIALOG.show({
            content: '这是一个自定义按钮弹窗',
            actions: [
                {
                    color: 'primary',
                    text: '在线阅读',
                    on_click: () => {
                        console.log('点击了在线阅读');
                    }
                },
                {
                    color: 'primary',
                    text: '下载文件',
                    on_click: () => {
                        console.log('点击了下载文件, 此按钮是手动关闭');
                        DIALOG.close();
                    },
                    close_on_action: false//设为false后不自动关闭弹窗
                },
                [
                    {
                        color: 'primary',
                        text: '取消',
                        on_click: () => {
                            console.log('点击了取消');
                        }
                    },
                    {
                        color: 'danger',
                        text: '删除',
                        bold: true,
                        on_click: () => {
                            console.log('点击了删除');
                        }
                    }
                ]
            ]
        })
    }
    //确认弹窗
    async function confirm_click(){
        const result = await DIALOG.confirm({
            content: '这是一个确认框'
        });
        console.log(`点击了${result ? '确认' : '取消'}`);
    }
    //自定义内容
    function custom_content()  {
        DIALOG.alert({
            header: (
                <orui-icon
                    path="/components/images/exclamation_circle_fill.svg"
                    color="var(--orui-color-warning)"
                    width="4rem"
                    height="4rem"
                />
            ),
            title: '注意',
            content: (
                <div>
                    <span>请用手机拍摄手持工牌照，注意保持照片清晰</span>
                    <br/>
                    <span>
                        详情说明请查阅<a style="color: var(--orui-color-primary);">操作指引</a>
                    </span>
                </div>
            )
        })
    }
    //超长文本
    async function long_text () {
        let content = (
            <>
                <b>满江红<br/>岳飞</b><br/>
                怒发冲冠，凭阑处、潇潇雨歇。抬望眼，仰天长啸，壮怀激烈。三十功名尘与土，八千里路云和月。莫等闲，白了少年头，空悲切。<br/>
                靖康耻，犹未雪；臣子恨，何时灭？驾长车，踏破贺兰山缺。壮志饥餐胡虏肉，笑谈渴饮匈奴血。待从头，收拾旧山河，朝天阙。<br/>
                我愤怒得头发竖了起来，独自登高凭栏远眺，骤急的风雨刚刚停歇。抬头远望天空，禁不住仰天长啸，一片报国之心充满心怀。三十多年来虽已建立一些功名，但如同尘土微不足道，南北转战八千里，经过多少风云人生。
                好男儿，要抓紧时间为国建功立业，不要空空将青春消磨，等年老时徒自悲切。靖康之变的耻辱，至今仍然没有被雪洗。作为国家臣子的愤恨，何时才能泯灭！我要驾着战车向贺兰山进攻，连贺兰山也要踏为平地。
                我满怀壮志，打仗饿了就吃敌人的肉，谈笑渴了就喝敌人的鲜血。待我重新收复旧日山河，再带着捷报向国家报告胜利的消息！
            </>
        );

        const result = await DIALOG.confirm({
            content,
            title: '提示'
        });
        console.log(`点击了${result ? '确认' : '取消'}`);
    }
    const html = (
        <orui-grid>
            <orui-row grow="0">
                <orui-title text="基础使用">
                    <orui-space wrap="true">
                        <orui-button text="基础使用" onClick={basic_alert}/>
                    </orui-space>
                </orui-title>
            </orui-row>
            <orui-row grow="0">
                <orui-title text="自定义按钮">
                    <orui-space wrap="true">
                        <orui-button ui_name="custom" text="自定义按钮" onClick={custom_click}/>
                    </orui-space>
                </orui-title>
            </orui-row>
            <orui-row grow="0">
                <orui-title text="确认弹窗">
                    <orui-space wrap="true">
                        <orui-button ui_name="confirm" text="确认弹窗" onClick={confirm_click}/>
                    </orui-space>
                </orui-title>
            </orui-row>
            <orui-row grow="0">
                <orui-title text="内容区域">
                    <orui-space wrap="true">
                        <orui-button ui_name="custom_content" text="自定义内容区域" onClick={custom_content}/>
                        <orui-button ui_name="long_text" text="超长文本" onClick={long_text}/>
                    </orui-space>
                </orui-title>
            </orui-row>
        </orui-grid>
    );

    return html
}