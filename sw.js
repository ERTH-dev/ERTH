// ============================================
// ERTH Service Worker - No Cache (Always Fresh)
// ============================================

// On install: skip waiting so this SW activates immediately
self.addEventListener('install', event => {
    self.skipWaiting();
});

// On activate: delete ALL existing caches and claim all clients
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys()
            .then(keys => Promise.all(keys.map(key => caches.delete(key))))
            .then(() => self.clients.claim())
    );
});

// On fetch: ALWAYS go to the network — never serve from cache
// This guarantees users always see the latest deployed version
self.addEventListener('fetch', event => {
    event.respondWith(fetch(event.request));
});
