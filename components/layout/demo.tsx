import {ORUI} from "../base/index.js";

export function LayoutDemo() {
    return (
        <orui-tabs-layout className="content">
            <orui-outlet></orui-outlet>
        </orui-tabs-layout>
    )
}