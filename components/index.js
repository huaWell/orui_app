import "./svg-inject.min.js";
import "./icon/index.js";
import "./button/index.js";
import "./input/index.js";
import "./tab/index.js";
import "./space/index.js"
import "./template/index.js"
import "./grid/index.js"
import "./row/index.js"
import "./col/index.js"
import "./list/index.js";
import "./listItem/index.js";
import "./radio/index.js";
import "./searchBar/index.js";
import "./title/index.js";
import "./pullToRefresh/index.js";
import "./slider/index.js";
import "./popup/index.js";
import "./mask/index.js";
import "./selector/index.js";
import "./stepper/index.js";
import "./scrollBar/index.js";
import "./pickerView/index.js";
import "./form/index.js";
import "./formItem/index.js";
import "./cascadePickerView/index.js";
import "./datePickerView/index.js";
import "./picker/index.js";
import "./datePicker/index.js";
import "./cascadePicker/index.js";
import "./tabBar/index.js";
import "./navBar/index.js";
import "./progressBar/index.js";
import "./divider/index.js";
import "./swipeAction/index.js";
import "./toast/index.js";
import "./dialog/index.js";
import "./checkList/index.js";
import "./dropdown/index.js";
import './router/index.js';
import './layout/index.js';
import './page/index.js';
import './cache/index.js';

const registerServiceWorker = async () => {
    if ("serviceWorker" in navigator) {
        try {
            const registration = await navigator.serviceWorker.register("/service_worker.js", {
                scope: "/",
            });
            if (registration.installing) {
                console.log("正在安装 Service worker");
            } else if (registration.waiting) {
                console.log("已安装 Service worker installed");
            } else if (registration.active) {
                console.log("激活 Service worker");
            }
        } catch (error) {
            console.error(`注册失败：${error}`);
        }
    }
};

// …

registerServiceWorker();
