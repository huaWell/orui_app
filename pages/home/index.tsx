import {ORUI} from "../../components/base/index.js";

export function Home(){
    const click = () => {
        console.log('click')
    };
    return (
        <>
            <orui-tab-bar-layout>
                <orui-outlet></orui-outlet>
            </orui-tab-bar-layout>
        </>
    )
}