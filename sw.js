const CACHE = 'marketcast-v4';
const FILES = [
  '/marketcast-app/',
  '/marketcast-app/index.html',
  '/marketcast-app/manifest.json',
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(FILES))
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  e.waitUntil(clients.claim());
});

self.addEventListener('fetch', e => {
  e.respondWith(
    fetch(e.request, {cache: 'no-cache'})
      .catch(() => caches.match(e.request))
  );
});
