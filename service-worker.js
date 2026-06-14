const CACHE_NAME = "sri-sashti-v35-premium-gallery-autoplay";
const ASSETS = [
  "/",
  "/index.html",
  "/manifest.webmanifest",
  "/assets/css/styles.css",
  "/assets/js/app.js",
  "/assets/images/gallery/clinic-view-consultation-area.webp",
  "/assets/images/gallery/clinic-view-exercise-guidance.webp",
  "/assets/images/gallery/gallery-back-pain-care.webp",
  "/assets/images/gallery/gallery-core-stability-exercise.webp",
  "/assets/images/gallery/gallery-doctor-assessment.webp",
  "/assets/images/gallery/gallery-electrotherapy-modalities.webp",
  "/assets/images/gallery/gallery-facial-palsy-neuro-care.webp",
  "/assets/images/gallery/gallery-fracture-rehabilitation.webp",
  "/assets/images/gallery/gallery-knee-arthritis-care.webp",
  "/assets/images/gallery/gallery-musculoskeletal-pain-care.webp",
  "/assets/images/gallery/gallery-neck-pain-care.webp",
  "/assets/images/gallery/gallery-post-operative-rehab.webp",
  "/assets/images/gallery/gallery-shoulder-mobility-care.webp",
  "/assets/images/gallery/gallery-sports-injury-rehab.webp",
  "/assets/images/card-crops/clinic-view-consultation-area.webp",
  "/assets/images/card-crops/clinic-view-exercise-guidance.webp",
  "/assets/images/card-crops/gallery-back-pain-care.webp",
  "/assets/images/card-crops/gallery-core-stability-exercise.webp",
  "/assets/images/card-crops/gallery-doctor-assessment.webp",
  "/assets/images/card-crops/gallery-electrotherapy-modalities.webp",
  "/assets/images/card-crops/gallery-facial-palsy-neuro-care.webp",
  "/assets/images/card-crops/gallery-fracture-rehabilitation.webp",
  "/assets/images/card-crops/gallery-knee-arthritis-care.webp",
  "/assets/images/card-crops/gallery-musculoskeletal-pain-care.webp",
  "/assets/images/card-crops/gallery-neck-pain-care.webp",
  "/assets/images/card-crops/gallery-post-operative-rehab.webp",
  "/assets/images/card-crops/gallery-shoulder-mobility-care.webp",
  "/assets/images/card-crops/gallery-sports-injury-rehab.webp",
  "/assets/icons/icon-192.png",
  "/assets/icons/icon-512.png",
  "/assets/icons/icon-96.png",
  "/assets/icons/apple-touch-icon.png",
  "/assets/icons/logo-transparent.png",
  "/assets/icons/ui/call.svg",
  "/assets/icons/ui/whatsapp-chat.svg",
  "/assets/icons/ui/directions.svg",
  "/assets/icons/ui/book-calendar.svg",
  "/assets/icons/ui/install-app.svg",
  "/assets/icons/ui/treatment.svg",
  "/assets/icons/ui/doctor.svg",
  "/assets/icons/ui/branch.svg",
  "/assets/icons/ui/gallery.svg",
  "/assets/icons/ui/home-exercise.svg",
  "/assets/icons/ui/trust-badge.svg",
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
