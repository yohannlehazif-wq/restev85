const CACHE_NAME = 'restev-cache-v2';

const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/logo_restev_carre.png',
  '/logo_restev_long.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});
