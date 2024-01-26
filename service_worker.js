const addResourcesToCache = async (resources) => {
    const cache = await caches.open("v1");
    await cache.addAll(resources);

};

self.addEventListener("install", (event) => {
    console.log("Service worker installed");
    const urlsToCache = [
        "./index.html",
        "./components/index.js",
        " ./component/svg-inject.min.js",
        " ./component/icon/index.js",
        " ./component/button/index.js",
        " ./component/input/index.js",
        " ./component/tab/index.js",
        " ./component/space/index.js",
        " ./component/template/index.js",
        " ./component/grid/index.js",
        " ./component/row/index.js",
        " ./component/col/index.js",
        " ./component/list/index.js",
        " ./component/listItem/index.js",
        " ./component/radio/index.js",
        " ./component/searchBar/index.js",
        " ./component/title/index.js",
        " ./component/pullToRefresh/index.js",
        " ./component/slider/index.js",
        " ./component/popup/index.js",
        " ./component/mask/index.js",
        " ./component/selector/index.js",
        " ./component/stepper/index.js",
        " ./component/scrollBar/index.js",
        " ./component/pickerView/index.js",
        " ./component/form/index.js",
        " ./component/formItem/index.js",
        " ./component/cascadePickerView/index.js",
        " ./component/datePickerView/index.js",
        " ./component/picker/index.js",
        " ./component/datePicker/index.js",
        " ./component/cascadePicker/index.js",
        " ./component/tabBar/index.js",
        " ./component/navBar/index.js",
        " ./component/progressBar/index.js",
        " ./component/divider/index.js",
        " ./component/swipeAction/index.js",
        " ./component/toast/index.js",
        " ./component/dialog/index.js",
        " ./component/checkList/index.js",
        " ./component/dropdown/index.js",
        ' ./component/router/index.js',
        ' ./component/layout/index.js',
        ' ./component/page/index.js',
        ' ./component/cache/index.js',

        "./components/index.css",
        "./components/tab/index.css",
        "./components/button/index.css",
        "./components/cache/index.css",
        "./components/cascadePicker/index.css",
        "./components/cascadePickerView/index.css",
        "./components/checkList/index.css",
        "./components/col/index.css",
        "./components/datePicker/index.css",
        "./components/datePickerView/index.css",
        "./components/dialog/index.css",
        "./components/divider/index.css",
        "./components/dropdown/index.css",
        "./components/form/index.css",
        "./components/formItem/index.css",
        "./components/grid/index.css",
        "./components/input/index.css",
        "./components/list/index.css",
        "./components/listItem/index.css",
        "./components/mask/index.css",
        "./components/navBar/index.css",
        "./components/page/index.css",
        "./components/picker/index.css",
        "./components/pickerView/index.css",
        "./components/popup/index.css",
        "./components/progressBar/index.css",
        "./components/pullToRefresh/index.css",
        "./components/radio/index.css",
        "./components/router/index.css",
        "./components/row/index.css",
        "./components/scrollBar/index.css",
        "./components/searchBar/index.css",
        "./components/selector/index.css",
        "./components/slider/index.css",
        "./components/space/index.css",
        "./components/stepper/index.css",
        "./components/swipeAction/index.css",
        "./components/tab/index.css",
        "./components/tabBar/index.css",
        "./components/title/index.css",
        "./components/toast/index.css",
        "./components/utils/index.css"
    ];
    event.waitUntil((async () => {
        const cache = await caches.open("pwa-assets");
        return cache.addAll(urlsToCache);
    })());
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request)
            .then(cachedResponse => {
                    // It can update the cache to serve updated content on the next request
                    if(cachedResponse) {
                        console.log(cachedResponse);
                    }
                    return cachedResponse || fetch(event.request);
                }
            )
    )
});