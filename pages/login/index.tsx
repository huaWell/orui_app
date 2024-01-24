import {ORUI} from "../../components/base/index.js"
import {navigate_to} from "../../components/router/index.js";

export function Login() {

    const click = () => {
        window.localStorage.setItem('token', '123456');
        navigate_to('/home/todo');
    };

    return (
        <orui-space style="width: 100%;height: 100%" justify="center" align="center">
            <orui-button
                text="LOGIN"
                block="1"
                block_width="60%"
                type="fill"
                color="primary"
                size="large"
                onClick={click}
            />
        </orui-space>
    )
}