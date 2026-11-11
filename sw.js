const CACHE = 'story-movies-v1';
const FILES = ['/', '/index.html', '/manifest.json'];
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).catch(()=>{}));
  self.skipWaiting();
});
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request).catch(()=> caches.match('/index.html')))
  );
});