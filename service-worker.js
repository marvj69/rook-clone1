const CACHE_NAME = 'rook-cache-v7';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/service-worker.js',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png',
  'https://cdn.tailwindcss.com'
];

// Install Event: Cache the specified resources and force the new service worker to become active
self.addEventListener('install', (event) => {
  // Activate the new service worker as soon as it finishes installing
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache:', CACHE_NAME);
        return cache.addAll(urlsToCache);
      })
      .catch((error) => {
        console.error('Failed to cache during install:', error);
      })
  );
});

// Fetch Event: Use network-first for navigation requests (index file) and cache-first for other assets
self.addEventListener('fetch', (event) => {
  // For navigation requests (e.g., the index file)
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          // Optionally update the cache with the new version of the page
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, networkResponse.clone());
          });
          return networkResponse;
        })
        .catch(() => {
          // If network fetch fails (e.g., offline), serve the cached index.html
          return caches.match('/index.html');
        })
    );
  } else {
    // For other assets, use cache-first strategy
    event.respondWith(
      caches.match(event.request)
        .then((response) => {
          if (response) {
            return response;
          }
          // Clone the request to use in the fetch call
          const fetchRequest = event.request.clone();
          return fetch(fetchRequest)
            .then((networkResponse) => {
              // Only cache valid responses (status 200 and basic type)
              if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
                return networkResponse;
              }
              // Clone the response for caching
              const responseToCache = networkResponse.clone();
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(event.request, responseToCache);
              });
              return networkResponse;
            });
        })
        .catch(() => {
          // Optional: add fallback for other assets if desired
        })
    );
  }
});

// Activate Event: Clean up old caches and ensure the new service worker takes control immediately
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      ))
      .then(() => self.clients.claim())
  );
});
