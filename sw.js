const CACHE = "fitness-v1";
const ARCHIVOS = [
  "/diario-ejercicio/",
  "/diario-ejercicio/index.html",
  "/diario-ejercicio/manifest.json"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(ARCHIVOS))
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});