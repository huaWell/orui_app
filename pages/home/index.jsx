"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Home() {
    var click = function () {
        console.log('click');
    };
    return (<>
            <orui-tab-bar-layout>
                <orui-outlet></orui-outlet>
            </orui-tab-bar-layout>
        </>);
}
exports.Home = Home;
