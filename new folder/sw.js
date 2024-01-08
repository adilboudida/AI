// sw.js
// This is the service worker that gets registered by the above code

const cacheName = 'v1';

// List of files to be cached
const cacheFiles = [
  '/',
  '/index.html',
  'styles/styles.css',
  'img/13 (4) - Copie.JPG'
];

// Listen for the installation event and cache all files
self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Installed');

  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching cacheFiles');
      return cache.addAll(cacheFiles);
    })
  );
});

// Listen for the activation event and remove any old caches
self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activated');

  e.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(cacheNames.map(function(thisCacheName) {
        if (thisCacheName !== cacheName) {
          console.log('[ServiceWorker] Removing Cached Files from', thisCacheName);
          return caches.delete(thisCacheName);
        }
      }));
    })
  );
});

// Listen for fetch events and serve cached files if available
self.addEventListener('fetch', function(e) {
  console.log('[ServiceWorker] Fetch', e.request.url);

  e.respondWith(
    caches.match(e.request).then(function(response) {
      if (response) {
        console.log('[ServiceWorker] Found in cache', e.request.url);
        return response;
      }

      // If not in cache, fetch from network
      console.log('[ServiceWorker] Not found in cache, fetching from network', e.request.url);
      return fetch(e.request);
    })
  );
});












