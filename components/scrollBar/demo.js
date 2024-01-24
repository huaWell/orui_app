import { ORUI } from "../base/index.js";
export function ScrollBarDemo() {
    const data = [];
    for (let i = 0; i < 100; i++) {
        const obj = {
            name: 'name' + i,
            display_name: 'label' + i
        };
        data.push(obj);
    }
    const html = (ORUI.createElement("orui-title", { text: 'scrollBar\u57FA\u672C\u4F7F\u7528' },
        ORUI.createElement("orui-scroll-bar", { ui_name: "scrollBar", data: data, style: "width: 200px;width: 200px", value: "name3" })));
    return html;
}
