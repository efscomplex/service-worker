const  CACHE_NAME = 'v1-cachename'
const CACHE_FILES = ['/index.html','/styles.css']


function cachingAssets(files, name = "v1") {
    caches.delete(name)
    return caches
                .open(name)
                .then( cache => cache.addAll(files) )
}

self.addEventListener('install', event => {
    event.waitUntil(
        cachingAssets(CACHE_FILES, CACHE_NAME)
            .then( () => console.log('Service Worker is now installed!') )
            .catch(console.log)
    )
})

/* self.addEventListener('fetch', fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(
            response => ( response ? response : fetch(fetchEvent.request) )
        )
    )
}) */
self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request)
        .then(function (response) {
            // Cache hit - return response
            if (response) {
                return response;
            }
            return fetch(event.request);
        })
    );
});