"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_js_1 = require("../../components/router/index.js");
// import styles from './index.module.css';
function PersonalCenter() {
    return __awaiter(this, void 0, void 0, function () {
        function page_change(item) {
            index_js_1.navigate_to(item.path);
        }
        var _icon_data, _data, row_render;
        return __generator(this, function (_a) {
            _icon_data = [
                [
                    {
                        icon: '/components/images/love.svg',
                        color: '#094ae6db',
                        title: 'xxx',
                    },
                    {
                        icon: '/components/images/love.svg',
                        color: '#2d98f5db',
                        title: 'xxxx'
                    },
                    {
                        icon: '/components/images/love.svg',
                        color: '#39bff2db',
                        title: 'xxxxx'
                    }
                ],
                [
                    {
                        icon: '/components/images/love.svg',
                        title: 'xxx',
                        color: '#094ae6db',
                    },
                    {
                        icon: '/components/images/love.svg',
                        color: '#2d98f5db',
                        title: 'xxxx'
                    },
                    {
                        icon: '/components/images/love.svg',
                        color: '#39bff2db',
                        title: 'xxxxx'
                    }
                ]
            ];
            _data = [
                {
                    name: 'sales_order',
                    path: '/sales_order',
                    title: '销售订单'
                },
                {
                    name: 'my_count',
                    path: '/my_count',
                    title: '我的账户'
                },
                {
                    name: 'online_ask',
                    path: '/online_ask',
                    title: '在线咨询'
                },
                {
                    name: 'about_us',
                    path: '/about_us',
                    title: '关于我们'
                },
                {
                    name: 'share',
                    path: '/share',
                    title: '分享'
                },
                {
                    name: 'record',
                    path: '/record',
                    title: '记录'
                }
            ];
            row_render = function (item) {
                return <orui-row onClick={function () { page_change(item); }}>
            <orui-col>
                <orui-row>
                    <orui-col style='margin-left: 16px;margin-right:12px' justify='center' grow={0}>
                        <orui-icon path='/components/images/smile.svg' width='22px' height='22px'/>
                    </orui-col>
                    <orui-col justify='center'>
                        {item.title}
                    </orui-col>
                </orui-row>
            </orui-col>
            <orui-col justify='center' grow='0' align='end' style='margin-right: 16px'>
                <orui-icon path='/components/images/right.svg'/>
            </orui-col>
        </orui-row>;
            };
            return [2 /*return*/, (<>
            <link rel="stylesheet" href='/pages/personalCenter/index.css'/>

            <orui-grid>
                <orui-row className='personal_center_header'>
                    <img className='user_setting' src='/pages/personalCenter/images/setting.svg'/>
                    <div className='user_information'>
                        <img className='user_avatar' src='/pages/personalCenter/images/avatar.svg'/>
                        <div className='user_information_card'>
                            <orui-row class='user_name'>
                                王某某
                            </orui-row>
                            <row class='user_carer'>
                                管理员
                            </row>
                        </div>
                    </div>
                    <div className='personal_center_center_card'>
                        <orui-grid style='padding:5px'>
                            {_icon_data.map(function (_data) {
                    return <orui-row>
                                        {_data.map(function (_item) {
                        return <orui-col>
                                                    <orui-row align='center' justify='center'>
                                                        <orui-icon color={_item.color} width='34px' height='34px' path={_item.icon}/>
                                                    </orui-row>
                                                    <orui-row align='center' justify='center'>
                                                        <div class='title'>
                                                            {_item.title}
                                                        </div>
                                                    </orui-row>
                                                </orui-col>;
                    })}
                                    </orui-row>;
                })}
                        </orui-grid>
                    </div>
                </orui-row>
                <orui-grid className='operation_list'>
                    {_data.map(function (_item) { return row_render(_item); })}
                </orui-grid>
            </orui-grid>
        </>)];
        });
    });
}
exports.PersonalCenter = PersonalCenter;
