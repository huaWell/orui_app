import { ORUI } from "../../components/base/index.js";
import { get_control } from "../../components/utils/index.js";
export function Tab3() {
    const option = {
        title: {
            show: false,
        },
        tooltip: {
            trigger: 'item',
        },
        legend: {
            show: false
        },
        color: ['#1e71ff', '#1862e0', 'rgba(4,40,151,0.92)'],
        series: [
            {
                name: 'task',
                type: 'pie',
                radius: '50%',
                data: [
                    { value: 1048, name: '未完成' },
                    { value: 735, name: '已完成' },
                    { value: 580, name: '延期' },
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    const _mock_data = [
        {
            date: '2023-1-5',
            finish: 10,
            all: 20
        },
        {
            date: '2023-1-5',
            finish: 10,
            all: 20
        },
        {
            date: '2023-1-5',
            finish: 10,
            all: 20
        },
        {
            date: '2023-1-5',
            finish: 10,
            all: 20
        },
        {
            date: '2023-1-5',
            finish: 10,
            all: 20
        }
    ];
    const row_render = (item) => {
        const html = (ORUI.createElement("orui-list-item", { data: item, style: 'display:flex;justify-content:center;width:100%' },
            ORUI.createElement("link", { rel: 'stylesheet', href: '/pages/tab2/index.css' }),
            ORUI.createElement("div", { className: 'dialog-list-item' },
                ORUI.createElement("orui-space", { direction: 'vertical' },
                    ORUI.createElement("div", null,
                        "\u65E5\u671F\uFF1A",
                        item.date),
                    ORUI.createElement("div", null,
                        "\u672A\u5B8C\u6210\u4EFB\u52A1\u6570\u91CF\uFF1A",
                        item.all - item.finish),
                    ORUI.createElement("div", null,
                        "\u5B8C\u6210\u7387\uFF1A",
                        item.finish / item.all * 100,
                        "%")))));
        return html;
    };
    const html = (ORUI.createElement(ORUI.createFragment, null,
        ORUI.createElement("orui-grid", { style: 'background:var(--orui-background-color)' },
            ORUI.createElement("orui-row", { grow: '0', ui_name: 'echarts_container' }),
            ORUI.createElement("orui-row", { grow: "0" },
                ORUI.createElement("orui-title", { text: '\u7EDF\u8BA1\u6570\u636E' },
                    ORUI.createElement("div", null,
                        ORUI.createElement("orui-grid", null, _mock_data.map((item) => row_render(item)))))))));
    const _echarts_container = get_control('echarts_container', html);
    setTimeout(() => {
        const my_echart = window.echarts.init(_echarts_container, null, { height: 300 });
        my_echart.setOption(option);
    }, 1000);
    return html;
}
