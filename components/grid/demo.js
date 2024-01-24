import { ORUI } from "../base/index.js";
export function GridDemo() {
    const html = (ORUI.createElement("orui-grid", null,
        ORUI.createElement("orui-row", null,
            ORUI.createElement("orui-col", { style: "background: var(--orui-color-primary)" }),
            ORUI.createElement("orui-col", { style: "background: var(--orui-color-success)" })),
        ORUI.createElement("orui-row", null,
            ORUI.createElement("orui-col", { style: "background: var(--orui-color-warning)" }),
            ORUI.createElement("orui-col", { style: "background: var(--orui-color-danger)" }),
            ORUI.createElement("orui-col", { style: "background: var(--orui-color-yellow)" })),
        ORUI.createElement("orui-row", null,
            ORUI.createElement("orui-col", { style: "background: var(--orui-color-orange)" }),
            ORUI.createElement("orui-col", { style: "background: var(--orui-color-wathet)" }),
            ORUI.createElement("orui-col", { style: "background: var(--orui-color-text)" }),
            ORUI.createElement("orui-col", { style: "background: var(--orui-color-text-secondary)" })),
        ORUI.createElement("orui-row", { style: "background: var(--orui-color-weak)" })));
    return html;
}
