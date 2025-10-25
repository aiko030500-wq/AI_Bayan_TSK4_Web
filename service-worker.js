
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('ai-bayan-cache-v2').then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './module1.html',
        './module2.html',
        './module3.html',
        './module4.html',
        './chat.html',
        './manifest.json',
        './assets/background_glow.jpg',
        './assets/logo_girl.png',
        './assets/icon512.png'
      ]);
    })
  );
  self.skipWaiting();
});
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
