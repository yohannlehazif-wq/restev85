self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('restev-v1').then((cache) => {
      return cache.addAll([
        './',
        './index.html',
        './logo_restev_carre.png',
        './logo_restev_long.png'
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
