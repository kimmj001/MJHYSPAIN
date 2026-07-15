const CACHE = 'barcelona-2026-v5-root-assets-1';
const ASSETS = [
  "./README.txt",
  "./beach.jpg",
  "./day1.html",
  "./day10.html",
  "./day2.html",
  "./day3.html",
  "./day4.html",
  "./day5.html",
  "./day6.html",
  "./day7.html",
  "./day8.html",
  "./day9.html",
  "./gothic.jpg",
  "./guide.js",
  "./icon-192.png",
  "./icon-512.png",
  "./index.html",
  "./manifest.webmanifest",
  "./montjuic.jpg",
  "./montserrat.jpg",
  "./parkguell.jpg",
  "./passeig.jpg",
  "./rambla.jpg",
  "./sagrada.jpg",
  "./stay.png",
  "./style.css"
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (url.origin === self.location.origin) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          const copy = response.clone();
          caches.open(CACHE).then(cache => cache.put(event.request, copy));
          return response;
        })
        .catch(() => caches.match(event.request))
    );
  }
});
