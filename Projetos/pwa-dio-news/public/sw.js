var CACHE_NAME = 'pwa-news'
var urlToCache = [
    '/',
    '/index.html'
]

this.addEventListener('install', event =>{
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then( cache =>{
            console.log('Opened cache')
            return cache.addAll(urlToCache)
        })
    )
})

this.addEventListener('active', event => {
    var cacheWhiteList = ['pwa-task-manager']
    event.waitUntil(
        caches.keys().then(cacheNames =>{
            return  Promise.all(
                cacheNames.map(cacheName => {
                    if(cacheWhiteList.indexOf(cacheName) === -1){
                        return caches.delete(cacheName)
                    }
                }))
        })
    )
})

this.addEventListener('fetch' ,event => {
    console.log("fetch", event)
    event.respondWith(
        caches.open(CACHE_NAME).then(cache =>{
            return cache.match(event.request).then(response => {
                return  response || fetch(event.request).then(response =>{
                    cache.put(event.request, response.clone());
                    return response
                })
            })
        })
    )
})