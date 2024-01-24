import { ORUI } from "../base/index.js";

export function GridDemo() {
    const html = (
        <orui-grid>
            <orui-row>
                <orui-col style="background: var(--orui-color-primary)"></orui-col>
                <orui-col style="background: var(--orui-color-success)"></orui-col>
            </orui-row>
            <orui-row>
                <orui-col style="background: var(--orui-color-warning)"></orui-col>
                <orui-col style="background: var(--orui-color-danger)"></orui-col>
                <orui-col style="background: var(--orui-color-yellow)"></orui-col>
            </orui-row>
            <orui-row>
                <orui-col style="background: var(--orui-color-orange)"></orui-col>
                <orui-col style="background: var(--orui-color-wathet)"></orui-col>
                <orui-col style="background: var(--orui-color-text)"></orui-col>
                <orui-col style="background: var(--orui-color-text-secondary)"></orui-col>
            </orui-row>
            <orui-row style="background: var(--orui-color-weak)"></orui-row>
        </orui-grid>
    );
    return html
}