You are working on the live static website for Sri Sashti Physiotherapy Clinic.

I have attached / added an asset bundle containing gallery images, card crops, UI SVG icons, and PWA icons.

Important rules:
Do NOT redesign the website.
Do NOT change the existing header, hero, colors, card style, spacing system, treatment card format, booking flow, reviews, branches, FAQ, footer, or bottom mobile Call / WhatsApp / Book buttons.
Only add premium add-on sections and replace duplicate-looking treatment/gallery images.
Use the existing design language: soft green/white background, rounded cards, same typography, same buttons, same mobile-first layout.

Asset bundle paths:
- Gallery images: assets/images/gallery/
- Card crop images: assets/images/card-crops/
- UI icons: assets/icons/ui/
- PWA icons: assets/icons/pwa/
- Asset map: ASSET-MAP.md

1. Copy assets into the existing project
Merge the included `assets/` folder into the live project root.
Do not delete existing assets.
Do not overwrite unrelated files unless the filename is the same and this update is intended.

2. Replace duplicate treatment card images
Open `index.html` and review Treatment Programs.
Fix duplicate-looking or mismatched image usage.
Use these mappings:

Musculoskeletal Pain:
Image: assets/images/card-crops/gallery-musculoskeletal-pain-care.webp
Title: Musculoskeletal Pain
Tag: Musculoskeletal
Alt: Musculoskeletal pain physiotherapy care at Sri Sashti Physiotherapy Clinic
Description: Care for muscle, joint, ligament and posture-related pain affecting daily movement, work and sleep.

Shoulder & Joint Care:
Image: assets/images/card-crops/gallery-shoulder-mobility-care.webp
Title: Shoulder & Joint Care
Tag: Joint Care
Alt: Shoulder and joint physiotherapy care at Sri Sashti Physiotherapy Clinic
Description: Care for frozen shoulder, joint stiffness, shoulder pain and mobility restriction.

Electrotherapy Modalities:
Image: assets/images/card-crops/gallery-electrotherapy-modalities.webp
Title: Electrotherapy Modalities
Tag: Modalities
Alt: Electrotherapy modalities at Sri Sashti Physiotherapy Clinic
Description: Modern physiotherapy modalities such as TENS, IFT, ultrasound and muscle stimulation are used when suitable after assessment to support pain relief and recovery.

Knee Pain & Arthritis Care:
Image: assets/images/card-crops/gallery-knee-arthritis-care.webp
Title: Knee Pain & Arthritis Care
Tag: Knee
Alt: Knee pain and arthritis physiotherapy care at Sri Sashti Physiotherapy Clinic
Description: Support for knee pain, arthritis, walking difficulty, stiffness and joint strength recovery.

Neck Pain Care:
Image: assets/images/card-crops/gallery-neck-pain-care.webp
Alt: Neck pain physiotherapy care at Sri Sashti Physiotherapy Clinic

Back Pain Care:
Image: assets/images/card-crops/gallery-back-pain-care.webp
Alt: Back pain physiotherapy care at Sri Sashti Physiotherapy Clinic

Core Stability Exercise:
Image: assets/images/card-crops/gallery-core-stability-exercise.webp
Alt: Core stability exercise physiotherapy at Sri Sashti Physiotherapy Clinic

Facial Palsy & Neuro Care:
Image: assets/images/card-crops/gallery-facial-palsy-neuro-care.webp
Alt: Facial palsy physiotherapy care at Sri Sashti Physiotherapy Clinic

Pre and Post Operative Rehabilitation:
Image: assets/images/card-crops/gallery-post-operative-rehab.webp
Alt: Post operative rehabilitation physiotherapy at Sri Sashti Physiotherapy Clinic

Do not use the same image filename for two nearby cards.
Do not use screenshots or red-arrow screenshots as treatment images.
Do not use laptop/consultation image for Electrotherapy.
Do not use neck image for Knee.
Do not use back image as Senior Care.

3. Add Treatment Moments slider
Add a new section after Treatment Programs or after Recovery Journey.
Use the same visual style as existing sections.

Section title:
Treatment Moments

Subtitle:
Real care moments from assessment, treatment, exercise guidance and recovery support.

Use a horizontal mobile-friendly swipe slider with 6 to 8 cards maximum.
Use these images and captions:

- assets/images/gallery/gallery-electrotherapy-modalities.webp
  Caption: Electrotherapy care
  Text: Modern modalities used when suitable after assessment to support pain relief and recovery.

- assets/images/gallery/gallery-shoulder-mobility-care.webp
  Caption: Shoulder mobility care
  Text: Hands-on shoulder and joint movement support.

- assets/images/gallery/gallery-musculoskeletal-pain-care.webp
  Caption: Musculoskeletal pain care
  Text: Care for muscle, joint, ligament and posture-related pain.

- assets/images/gallery/gallery-knee-arthritis-care.webp
  Caption: Knee and arthritis support
  Text: Support for knee pain, stiffness, walking difficulty and joint strength.

- assets/images/gallery/gallery-core-stability-exercise.webp
  Caption: Core stability exercise
  Text: Guided exercise to support spine, posture and long-term recovery.

- assets/images/gallery/gallery-post-operative-rehab.webp
  Caption: Post-operative rehabilitation
  Text: Step-by-step rehab after surgery for movement and confidence.

- assets/images/gallery/gallery-facial-palsy-neuro-care.webp
  Caption: Facial palsy and neuro care
  Text: Supportive care for nerve-related weakness and movement recovery.

4. Add Doctor-Led Care Gallery
Add a small trust section.

Title:
Doctor-Led Physiotherapy Care

Subtitle:
Every patient receives assessment, explanation and guided recovery support.

Cards:
- Assessment
  Image: assets/images/gallery/gallery-doctor-assessment.webp
  Text: We first understand your pain, movement difficulty and daily activity problem.

- Treatment
  Image: assets/images/gallery/gallery-electrotherapy-modalities.webp
  Text: Therapy and modalities are selected only after assessment.

- Home Exercise Guidance
  Image: assets/images/gallery/gallery-core-stability-exercise.webp
  Text: Simple exercises are guided for safe recovery at home.

5. Add Clinic View swipe tour
Do not call it real 360.
Use wording:
Clinic View
Subtitle: A quick look at consultation, treatment and exercise guidance areas.

Use:
- assets/images/gallery/clinic-view-consultation-area.webp
  Caption: Consultation area
- assets/images/gallery/gallery-electrotherapy-modalities.webp
  Caption: Electrotherapy setup
- assets/images/gallery/clinic-view-exercise-guidance.webp
  Caption: Exercise guidance area
- assets/images/gallery/gallery-doctor-assessment.webp
  Caption: Doctor-led assessment

Use a swipe gallery/card layout matching the site style.

6. Add First Visit Process section
Title: Your First Visit
Steps:
1. Tell us your problem — Share where you feel pain and how long it has been affecting you.
2. Assessment — Movement, stiffness, strength and pain area are checked.
3. Treatment plan — Doctor explains the care plan and expected follow-up.
4. Therapy session — Manual therapy, exercise or modalities are used as needed.
5. Home guidance — You receive simple exercise and care instructions.

7. Add or improve Patients & Attenders guide
If already present, improve it instead of duplicating.
Title: For Patients & Attenders
Cards:
- Bring reports — Bring prescriptions, X-rays, scans or surgery notes if available.
- Wear comfortable clothing — Comfortable clothing helps assessment and exercise movement.
- Call before visiting — Confirm appointment timing and nearest branch.
- Elderly / post-surgery patients — Family members can accompany patients who need support.

8. Add When Should You Visit section
Title: When Should You Visit?
Cards:
- Pain lasts more than a few days
- Walking, sleep or work is affected
- Neck or back pain keeps returning
- Knee pain while climbing stairs
- Stiffness after fracture or surgery
- Sports injury or ankle sprain
Add a Book Appointment button using existing button style.

9. Add UI icons without changing button design
Use only these SVG files from assets/icons/ui/.
Do not use external icon libraries.
Do not use Font Awesome.
Do not use CDN icons.
All SVG icons should inherit currentColor.

Suggested placements:
- Call button: assets/icons/ui/call.svg + Call
- WhatsApp button: assets/icons/ui/whatsapp-chat.svg + WhatsApp
- Directions button: assets/icons/ui/directions.svg + Directions
- Book button: assets/icons/ui/book-calendar.svg + Book
- Install App button: assets/icons/ui/install-app.svg + Install App
- Gallery section heading: assets/icons/ui/gallery.svg if it fits naturally
- Doctor-Led section heading: assets/icons/ui/doctor.svg if it fits naturally
- Branch cards: assets/icons/ui/branch.svg if it fits naturally

Keep icon size small:
Desktop: 16px to 18px
Mobile bottom buttons: 18px to 20px

Add CSS utility if not already present:
.icon {
  width: 1em;
  height: 1em;
  flex: 0 0 auto;
  display: inline-block;
}

10. PWA icon/app branding
Use assets/icons/pwa/ files if current app icon is not clean.
Manifest should show:
name: Sashti Physio
short_name: Sashti Physio
Use:
assets/icons/pwa/icon-192.png
assets/icons/pwa/icon-512.png
assets/icons/pwa/apple-touch-icon.png

Keep install app support working.

11. Tamil toggle
For new visible headings/text, add data-en and data-ta if the existing site uses data attributes for language switching.
Do not leave major new sections English-only if the rest of the page switches.
Use simple Tamil. Avoid complicated or misleading medical Tamil.

12. Smart WhatsApp booking
When clicking Book this care or gallery care cards, selected problem should match the clicked treatment.
WhatsApp message should include:
I want appointment for [selected treatment]. Preferred branch: [branch].

13. SEO natural update
Add naturally in content/alt text where suitable:
- physiotherapy clinic in Palladam
- physiotherapist in Palladam
- back pain treatment Palladam
- neck pain physiotherapy Palladam
- knee pain physiotherapy Palladam
- arthritis physiotherapy Palladam
- electrotherapy Palladam
- post operative rehabilitation Palladam
- musculoskeletal pain physiotherapy
- core stability exercise physiotherapy

Do not keyword stuff.
Do not change canonical/domain settings.

14. Keep domain settings unchanged
Do not change:
CNAME = srisashtiphysio.co.in
canonical = https://srisashtiphysio.co.in/
robots sitemap = https://srisashtiphysio.co.in/sitemap.xml
sitemap domain = https://srisashtiphysio.co.in/
phone numbers
Google Maps links

15. Service worker cache
After changing HTML/CSS/JS/images/icons, update cache name:
const CACHE_NAME = "sri-sashti-v33-gallery-icons-addon";
Make sure new images and icons fetch correctly.

16. Test locally
Check:
- no broken images
- no broken SVG icons
- no duplicate-looking adjacent treatment cards
- Treatment Moments slider scrolls smoothly on mobile
- Clinic View section does not claim real 360
- Tamil toggle works
- Quick Help works
- Book this care opens booking with correct treatment/problem
- WhatsApp message includes selected problem
- bottom Call / WhatsApp / Book buttons still fit on mobile
- PWA still works
- no console errors
- layout/design unchanged

17. Commit
Use:
git add .
git commit -m "Add gallery, clinic view and custom action icons"
git push

Final output:
Tell me:
- new sections added
- images used and filenames
- icons added and filenames
- duplicate images replaced
- service worker cache version
- confirmation existing design/layout was not changed
