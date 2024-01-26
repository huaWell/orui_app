const addResourcesToCache = async (resources) => {
    const cache = await caches.open("v1");
    await cache.addAll(resources);

};

self.addEventListener("install", (event) => {
    event.waitUntil(
        addResourcesToCache([
            "./index.html",
            "./components/index.css",
            "./components/index.js",
            "./components/tab/index.css"
        ]),
    );
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