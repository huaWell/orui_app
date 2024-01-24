import { ORUI } from "../base/index.js";
export function InputDemo() {
    const html = (ORUI.createElement("orui-space", { direction: "vertical", style: "width: 100%" },
        ORUI.createElement("orui-title", { text: "\u666E\u901Ainput" },
            ORUI.createElement("orui-input", { placeholder: "\u8BF7\u8F93\u5165" })),
        ORUI.createElement("orui-title", { text: "\u5177\u6709\u5B57\u6570\u9650\u5236\u7684input" },
            ORUI.createElement("orui-input", { placeholder: "\u8BF7\u8F93\u5165", show_count: "1", max_length: "100", clearable: "true" })),
        ORUI.createElement("orui-title", { text: "input\u53EA\u663E\u793A\u5B57\u6570\uFF0C\u4E0D\u505A\u6700\u5927\u5B57\u6570\u9650\u5236" },
            ORUI.createElement("orui-input", { placeholder: "\u8BF7\u8F93\u5165", value: "11", show_count: "1", clearable: "true" })),
        ORUI.createElement("orui-title", { text: "password\u7C7B\u578B" },
            ORUI.createElement("orui-input", { placeholder: "\u8BF7\u8F93\u5165", type: "password", clearable: "true" })),
        ORUI.createElement("orui-title", { text: "\u7981\u7528input" },
            ORUI.createElement("orui-input", { placeholder: "\u8BF7\u8F93\u5165", disabled: "true", value: "1234567" })),
        ORUI.createElement("orui-title", { text: "\u53EA\u8BFBinput" },
            ORUI.createElement("orui-input", { placeholder: "\u8BF7\u8F93\u5165", readonly: "true", value: "1234567" })),
        ORUI.createElement("orui-title", { text: "textarea\u591A\u884C\u6587\u672C" },
            ORUI.createElement("orui-input", { placeholder: "\u8BF7\u8F93\u5165", type: "number", is_textarea: "true" })),
        ORUI.createElement("orui-title", { text: "textarea\u56FA\u5B9A\u884C\u6570" },
            ORUI.createElement("orui-input", { placeholder: "\u8BF7\u8F93\u5165", type: "number", is_textarea: "true", rows: "7" })),
        ORUI.createElement("orui-title", { text: "textarea\u663E\u793A\u5B57\u6570\u7EDF\u8BA1" },
            ORUI.createElement("orui-input", { placeholder: "\u8BF7\u8F93\u5165", type: "number", is_textarea: "true", rows: "2", show_count: "true" })),
        ORUI.createElement("orui-title", { text: "\u53EA\u8BFBtextarea" },
            ORUI.createElement("orui-input", { placeholder: "\u8BF7\u8F93\u5165", type: "number", is_textarea: "true", rows: "3", readonly: "true", value: "123" })),
        ORUI.createElement("orui-title", { text: "\u7981\u7528textarea" },
            ORUI.createElement("orui-input", { placeholder: "\u8BF7\u8F93\u5165", type: "number", is_textarea: "true", rows: "3", disabled: "true", value: "123" })),
        ORUI.createElement("orui-title", { text: "textarea\u5B57\u6570\u9650\u5236" },
            ORUI.createElement("orui-input", { placeholder: "\u8BF7\u8F93\u5165", type: "number", is_textarea: "true", rows: "3", show_count: "true", max_length: "100" }))));
    return html;
}
