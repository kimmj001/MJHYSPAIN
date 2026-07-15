const CACHE = 'barcelona-2026-v5-fixed-2';
const ASSETS = [
  "./assets/beach.jpg",
  "./assets/gothic.jpg",
  "./assets/montjuic.jpg",
  "./assets/montserrat.jpg",
  "./assets/parkguell.jpg",
  "./assets/passeig.jpg",
  "./assets/rambla.jpg",
  "./assets/sagrada.jpg",
  "./assets/stay.png",
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
  "./guide.js",
  "./icon-192.png",
  "./icon-512.png",
  "./index.html",
  "./manifest.webmanifest",
  "./style.css"
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(ASSETS))
  );
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
  const isLocal = url.origin === self.location.origin;

  if (isLocal) {
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
