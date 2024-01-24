import { ORUI } from "../base/index.js";

export function ProgressBarDemo() {
    const html = (
        <orui-space direction="vertical">
            <orui-title text="progressBar基本使用方法">
                <orui-progress-bar ui_name="basicProgressBar" value="40" show_text="true"/>
            </orui-title>
            <orui-title text="progressBar显示进度文字">
                <orui-progress-bar value="40" show_text="true"/>
            </orui-title>
            <orui-title text="progressBar自定义进度文字">
                <orui-progress-bar  value="40" show_text="true" text="已完成3/5步"/>
            </orui-title>
            <orui-title text="progressBar指定线条宽度">
                <orui-space direction="vertical">
                    <orui-progress-bar  value="40" custom_style="--track-width: 0.25rem;"/>
                    <orui-progress-bar  value="60" custom_style="--track-width: 1rem;"/>
                </orui-space>
            </orui-title>
            <orui-title text="直角进度条">
                <orui-progress-bar  value="40" rounded="false"/>
            </orui-title>
            <orui-title text="progressBar指定线条颜色">
                <orui-space direction="vertical">
                    <orui-progress-bar value="40" custom_style="--fill-color: var(--orui-color-success);"/>
                    <orui-progress-bar value="60" custom_style="--fill-color: var(--orui-color-warning)"/>
                    <orui-progress-bar value="40" custom_style="--fill-color: var(--orui-color-danger);"/>
                    <orui-progress-bar value="60" custom_style="--fill-color: linear-gradient(to right, var(--orui-color-primary), var(--orui-color-success))"/>
                </orui-space>
            </orui-title>
            <orui-title text="指定轨道颜色">
                <orui-progress-bar value="40" custom_style="--track-color: #CDE2FF;"/>
            </orui-title>
        </orui-space>
    )
    return html
}