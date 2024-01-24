import { ORUI } from "../base/index.js";
import {get_control} from "../utils/index.js";

export function NavBarDemo() {
    const html = (
        <orui-space direction="vertical">
            <orui-title text="navBar基本使用方法">
                <orui-nav-bar ui_name="basicNavBar" title="标题" onBack={() => {
                    console.log('点击了back部分')
                }}/>
            </orui-title>
            <orui-title text="navBar返回按钮显示文字">
                <orui-nav-bar ui_name="showTextNavBar" back="返回" title="标题"/>
            </orui-title>
            <orui-title text="navBar返回按钮不显示图标">
                <orui-nav-bar ui_name="showTextNavBar" show_back_arrow="false" back="返回" title="标题"/>
            </orui-title>
            <orui-title text="navBar自定义按钮返回图标">
                <orui-nav-bar ui_name="showTextNavBar" back_arrow="/components/images/close.svg" back="返回" title="标题"/>
            </orui-title>
            <orui-title text="navBar自定义左侧内容">
                <orui-nav-bar ui_name="showTextNavBar" back_arrow="/components/images/close.svg" back="返回" title="标题">
                    <span slot="left">清除</span>
                </orui-nav-bar>
            </orui-title>
            <orui-title text="navBar自定义右侧内容">
                <orui-nav-bar ui_name="showTextNavBar" back_arrow="/components/images/close.svg" back="返回" title="标题">
            <span slot="right">
                <span class="orui-custom-icon-container">
                    <div class="orui-custom-icon-item">
                        <orui-icon path="/components/images/search.svg" color="var(--orui-color-text)"/>
                    </div>
                     <div class="orui-custom-icon-item">
                        <orui-icon path="/components/images/more.svg" color="var(--orui-color-text)"/>
                    </div>
                </span>
            </span>
                </orui-nav-bar>
            </orui-title>
            <orui-title text="navBar超长title">
                <orui-nav-bar ui_name="showTextNavBar" back_arrow="/components/images/close.svg" back="返回" title="超长标题超长标题超长标题超长标题超长标题超长标题超长标题超长标题超长标题超长标题超长标题超长标题超长标题超长标题"/>
            </orui-title>
            <orui-title text="navBar副标题">
                <orui-nav-bar ui_name="showTextNavBar" back_arrow="/components/images/close.svg" back="返回" title="标题">
                    <div slot="center" style="font-size: var(--orui-font-size-2)">副标题</div>
                </orui-nav-bar>
            </orui-title>
            <orui-title text="navBar自定义高度以及边框">
                <orui-nav-bar ui_name="showTextNavBar" back_arrow="/components/images/close.svg" back="返回" title="标题" custom_style="--height: 2rem"/>
            </orui-title>
        </orui-space>
    )
    return html
}