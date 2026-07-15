
const CACHE = 'barcelona-2026-v1';
const ASSETS = ["./", "./index.html", "./style.css", "./guide.js", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png", "./day1.html", "./day2.html", "./day3.html", "./day4.html", "./day5.html", "./day6.html", "./day7.html", "./day8.html", "./day9.html", "./day10.html"];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)));
  self.skipWaiting();
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  event.respondWith(
    caches.match(req).then(cached => cached || fetch(req).then(resp => {
      const copy = resp.clone();
      caches.open(CACHE).then(cache => cache.put(req, copy));
      return resp;
    }).catch(() => caches.match('./index.html')))
  );
});
