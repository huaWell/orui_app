"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_js_1 = require("../../components/utils/index.js");
function Tab3() {
    var option = {
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
    var _mock_data = [
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
    var row_render = function (item) {
        var html = (<orui-list-item data={item} style='display:flex;justify-content:center;width:100%'>
                <link rel='stylesheet' href='/pages/tab2/index.css'/>
                <div className='dialog-list-item'>
                    <orui-space direction='vertical'>
                        <div>日期：{item.date}</div>
                        <div>未完成任务数量：{item.all - item.finish}</div>
                        <div>完成率：{item.finish / item.all * 100}%</div>
                    </orui-space>
                </div>
            </orui-list-item>);
        return html;
    };
    var html = (<>
          <orui-grid style='background:var(--orui-background-color)'>
              <orui-row grow='0' ui_name='echarts_container'/>
              <orui-row grow="0">
                  <orui-title text='统计数据'>
                      <div>
                          <orui-grid>
                              {_mock_data.map(function (item) { return row_render(item); })}
                          </orui-grid>
                      </div>
                  </orui-title>
              </orui-row>
          </orui-grid>
       </>);
    var _echarts_container = index_js_1.get_control('echarts_container', html);
    setTimeout(function () {
        var my_echart = window.echarts.init(_echarts_container, null, { height: 300 });
        my_echart.setOption(option);
    }, 1000);
    return html;
}
exports.Tab3 = Tab3;
