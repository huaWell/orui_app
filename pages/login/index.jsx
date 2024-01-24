"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_js_1 = require("../../components/router/index.js");
function Login() {
    var click = function () {
        window.localStorage.setItem('token', '123456');
        index_js_1.navigate_to('/home/todo');
    };
    return (<orui-space style="width: 100%;height: 100%" justify="center" align="center">
            <orui-button text="LOGIN" block="1" block_width="60%" type="fill" color="primary" size="large" onClick={click}/>
        </orui-space>);
}
exports.Login = Login;
