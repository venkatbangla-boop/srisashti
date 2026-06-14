const CACHE_NAME = "sri-sashti-v32-icons-gallery";
const ASSETS = [
  "/",
  "/index.html",
  "/manifest.webmanifest",
  "/assets/css/styles.css",
  "/assets/js/app.js",
  "/assets/images/gallery-electrotherapy-care.webp",
  "/assets/images/gallery-shoulder-mobility-care.webp",
  "/assets/images/gallery-musculoskeletal-pain-care.webp",
  "/assets/images/gallery-knee-arthritis-care.webp",
  "/assets/images/gallery-core-stability-exercise.webp",
  "/assets/images/gallery-post-operative-rehab.webp",
  "/assets/images/gallery-facial-palsy-care.webp",
  "/assets/images/gallery-doctor-assessment.webp",
  "/assets/images/clinic-view-consultation-area.webp",
  "/assets/images/clinic-view-treatment-bed.webp",
  "/assets/images/clinic-view-electrotherapy-setup.webp",
  "/assets/images/clinic-view-exercise-area.webp",
  "/assets/images/clinic-view-recovery-support-space.webp",
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
  "/assets/icons/ui/call.svg",
  "/assets/icons/ui/whatsapp-chat.svg",
  "/assets/icons/ui/directions.svg",
  "/assets/icons/ui/book-calendar.svg",
  "/assets/icons/ui/install-app.svg",
  "/assets/icons/ui/treatment.svg",
  "/assets/icons/ui/doctor.svg",
  "/assets/icons/ui/branch.svg",
  "/assets/icons/ui/gallery.svg",
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
