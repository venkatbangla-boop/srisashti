# Mobile PWA Install Audit

Date: 2026-06-21

## Latest repo state

This static website project was updated from the confirmed bad state where Treatment Moments had only three women health slides, Doctor-Led Physiotherapy Care repeated those same three slides, and the public site was still PWA-installable through the linked web manifest and service worker registration.

## Gallery source slide count

Treatment Moments now has 11 original source slides before any carousel cloning:

1. Electrotherapy care
2. Shoulder mobility care
3. Musculoskeletal pain care
4. Knee and arthritis support
5. Core stability exercise
6. Post-operative rehabilitation
7. Facial palsy and neuro care
8. Doctor-led assessment
9. Prenatal Care
10. Postnatal Care
11. Urinary Incontinence & Pelvic Floor Care

## Doctor-Led final cards

Doctor-Led Physiotherapy Care now has exactly three process cards:

1. Assessment
2. Treatment Planning
3. Home Exercise Guidance

The Doctor-Led section no longer contains these women health gallery images:

- `assets/images/prenatal-care-gallery.webp`
- `assets/images/postnatal-care-gallery.webp`
- `assets/images/urinary-incontinence-pelvic-floor-care-gallery.webp`

## Clinic View final images

Clinic View was kept unchanged and uses only these images:

- `assets/images/clinic-view-consultation-area.webp`
- `assets/images/clinic-view-treatment-bed.webp`
- `assets/images/clinic-view-electrotherapy-setup.webp`
- `assets/images/clinic-view-exercise-area.webp`
- `assets/images/clinic-view-recovery-support-space.webp`

## Exact PWA install finding

The JavaScript prompt flow was already manual, but the live site was still installable because the homepage and branch pages linked `manifest.webmanifest`, and `assets/js/app.js` registered `/service-worker.js`.

Samsung Internet and Android browsers can show their own install suggestion for an installable site even when the custom JavaScript calls `.prompt()` only after a click. That can make customers feel they are being asked to install an app before comfortably viewing the website.

## Changes made to disable install-first behavior

- Removed the manifest link from `index.html`.
- Removed the manifest link from both branch pages.
- Kept favicon and app icon files in place.
- Disabled custom install buttons by always keeping `#installAppBtn` and `#installAppBtnMobile` hidden.
- Disabled install prompting by ensuring `deferredInstallPrompt.prompt()` is not called.
- Disabled service worker registration from `assets/js/app.js`.
- Added a safe one-time unregister block using `navigator.serviceWorker.getRegistrations()` so existing customer service workers can be removed without blocking page load.
- Updated `service-worker.js` cache name to `sri-sashti-v60-pwa-install-disabled`.

## Files changed

- `index.html`
- `palladam-physiotherapy-clinic/index.html`
- `senjeri-pirivu-physiotherapy-clinic/index.html`
- `assets/js/app.js`
- `service-worker.js`
- `MOBILE-PWA-INSTALL-AUDIT.md`

## Test result

Source checks:

- Treatment Moments source slides: 11.
- Doctor-Led cards: 3.
- Doctor-Led forbidden women health images: none.
- Clinic View images: unchanged and clinic-only.
- Manifest links: removed from homepage and branch pages.
- Service worker registration: disabled.
- Install prompt call: disabled.
- `npm run build`: passed.

Browser preview checks were run locally after the edits. The homepage opened normally first, with the hero visible immediately. No custom install banner or Install App button appeared. Call, WhatsApp, Book, branch selector, Tamil toggle, booking sheet, and gallery controls remained usable. No broken images or console errors were observed during the local verification pass.

## Confirmations

- Website opens normally first.
- No design or layout redesign was made.
- Header, hero, treatment card layout, doctor section layout, booking flow, Tamil toggle, footer, SEO title, branch pages, branch selector, and bottom mobile Call / WhatsApp / Book buttons were not redesigned.
- No push was done.
