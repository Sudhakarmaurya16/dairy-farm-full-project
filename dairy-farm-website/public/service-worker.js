const CACHE_NAME = "samrat-dairy-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/manifest.json",
  // Aap yahan apni logo images bhi add kar sakte hain, e.g., '/brand.png'
];

// 1. Install Service Worker
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});

// 2. Fetch Requests (Offline Support)
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Agar cache me file mile toh wahi de do, nahi toh network se lao
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});

// 3. Activate Service Worker (Cleanup Old Caches)
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
