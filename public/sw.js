self.addEventListener('install', (e) => {
    
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(["./"]);
        })
    );
});


self.addEventListener('fetch', (e) => {
    console.log(`Intercepting ${e.request.url}`);
});