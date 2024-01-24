import { ORUI } from "../../components/base/index.js";
export function Home() {
    const click = () => {
        console.log('click');
    };
    return (ORUI.createElement(ORUI.createFragment, null,
        ORUI.createElement("orui-tab-bar-layout", null,
            ORUI.createElement("orui-outlet", null))));
}
