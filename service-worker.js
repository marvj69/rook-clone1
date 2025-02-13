const CACHE_NAME = 'rook-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/service-worker.js',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png',
  'https://cdn.tailwindcss.com'  // Tailwind CDN URL for offline caching
];

// Install Event: Cache the specified resources and force activation of the new SW
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache:', CACHE_NAME);
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        // Force the waiting service worker to become the active service worker immediately
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('Failed to cache during install:', error);
      })
  );
});

// Fetch Event: Serve cached content when offline and update cache with new network responses
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached response if found
        if (response) {
          return response;
        }
        // Clone the request as it is a stream
        const fetchRequest = event.request.clone();
        return fetch(fetchRequest)
          .then((networkResponse) => {
            // Ensure we received a valid response
            if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
              return networkResponse;
            }
            // Clone the response as it is a stream
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });
            return networkResponse;
          });
      })
      .catch(() => {
        // Fallback to index.html if both cache and network fail
        return caches.match('/index.html');
      })
  );
});

// Activate Event: Delete old caches and immediately claim control of all clients
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (!cacheWhitelist.includes(cacheName)) {
              console.log('Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        // Claim clients so that the new service worker starts controlling them immediately
        return self.clients.claim();
      })
  );
});
