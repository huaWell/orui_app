const addResourcesToCache = async (resources) => {
    const cache = await caches.open("v1");
    for (let i of resources) {
        try {
            await cache.add(i);
        } catch (err) {
            console.warn('sw: cache.add',i);
        }
    }

};

self.addEventListener("install", (event) => {
    console.log("Service worker installed");
    const urlsToCache = [
        "./index.html",
        "./index.js",
        "./components/index.js",
        " ./components/svg-inject.min.js",
        " ./components/icon/index.js",
        " ./components/button/index.js",
        " ./components/input/index.js",
        " ./components/tab/index.js",
        " ./components/space/index.js",
        " ./components/template/index.js",
        " ./components/grid/index.js",
        " ./components/row/index.js",
        " ./components/col/index.js",
        " ./components/list/index.js",
        " ./components/listItem/index.js",
        " ./components/radio/index.js",
        " ./components/searchBar/index.js",
        " ./components/title/index.js",
        " ./components/pullToRefresh/index.js",
        " ./components/slider/index.js",
        " ./components/popup/index.js",
        " ./components/mask/index.js",
        " ./components/selector/index.js",
        " ./components/stepper/index.js",
        " ./components/scrollBar/index.js",
        " ./components/pickerView/index.js",
        " ./components/form/index.js",
        " ./components/formItem/index.js",
        " ./components/cascadePickerView/index.js",
        " ./components/datePickerView/index.js",
        " ./components/picker/index.js",
        " ./components/datePicker/index.js",
        " ./components/cascadePicker/index.js",
        " ./components/tabBar/index.js",
        " ./components/navBar/index.js",
        " ./components/progressBar/index.js",
        " ./components/divider/index.js",
        " ./components/swipeAction/index.js",
        " ./components/toast/index.js",
        " ./components/dialog/index.js",
        " ./components/checkList/index.js",
        " ./components/dropdown/index.js",
        ' ./components/router/index.js',
        ' ./components/layout/index.js',
        ' ./components/page/index.js',
        ' ./components/cache/index.js',

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
    event.waitUntil(
        addResourcesToCache(urlsToCache),
    );
});


async function cacheFirst(request) {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
        return cachedResponse;
    }
    try {
        const networkResponse = await fetch(request);
        if (networkResponse.ok) {
            const cache = await caches.open("v1");
            cache.put(request, networkResponse.clone());
        }
        return networkResponse;
    } catch (error) {
        return Response.error();
    }
}

// self.addEventListener("fetch", event => {
//     event.respondWith(
//         caches.match(event.request)
//             .then(cachedResponse => {
//                     // It can update the cache to serve updated content on the next request
//                     if(cachedResponse) {
//                         console.log(cachedResponse);
//                     }
//                     return cachedResponse || fetch(event.request);
//                 }
//             )
//     )
// });


self.addEventListener("fetch", (event) => {
    event.respondWith(cacheFirst(event.request));
});