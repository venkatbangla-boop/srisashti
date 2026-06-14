const CACHE_NAME = "sri-sashti-v30-gallery-images";
const ASSETS = [
  "/",
  "/index.html",
  "/manifest.webmanifest",
  "/assets/css/styles.css",
  "/assets/js/app.js",
  "/assets/images/musculoskeletal-pain-card.webp",
  "/assets/images/musculoskeletal-pain-wide.webp",
  "/assets/images/musculoskeletal-pain-thumb.webp",
  "/assets/images/shoulder-joint-care-card.webp",
  "/assets/images/shoulder-joint-care-wide.webp",
  "/assets/images/shoulder-joint-care-thumb.webp",
  "/assets/images/electrotherapy-modalities-card.webp",
  "/assets/images/electrotherapy-modalities-wide.webp",
  "/assets/images/electrotherapy-modalities-thumb.webp",
  "/assets/images/knee-pain-arthritis-card.webp",
  "/assets/images/knee-pain-arthritis-wide.webp",
  "/assets/images/knee-pain-arthritis-thumb.webp",
  "/assets/icons/icon-192.png",
  "/assets/icons/icon-512.png",
  "/assets/icons/apple-touch-icon.png",
  "/assets/icons/logo-transparent.png",
  "/favicon.ico"
];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.map(key => key !== CACHE_NAME && caches.delete(key)))));
  self.clients.claim();
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  if (new URL(event.request.url).origin !== self.location.origin) return;
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
      if (!response.ok) return response;
      const copy = response.clone();
      caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
      return response;
    }).catch(() => caches.match("/index.html")))
  );
});
