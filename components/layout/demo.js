import { ORUI } from "../base/index.js";
export function LayoutDemo() {
    return (ORUI.createElement("orui-tabs-layout", { className: "content" },
        ORUI.createElement("orui-outlet", null)));
}
