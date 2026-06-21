# FULL WEBSITE AUDIT REPORT

## 1. Executive Summary

This audit reviewed the current static website project for Sri Sashti Physiotherapy Clinic without changing any website source files. Source inspection covered `index.html`, `assets/css/styles.css`, `assets/js/app.js`, `service-worker.js`, `manifest.webmanifest`, `robots.txt`, `sitemap.xml`, and both branch landing pages.

Overall status: the site is functional, the key assets resolve correctly, favicon and manifest wiring are present, branch pages return `200`, and the homepage layout is intact. The main risks are local SEO consistency, accessibility of the custom booking/branch sheets, and stale sitemap metadata.

## 2. Health Score

Health score: **82 / 100**

## 3. Critical Issues

No critical issues were found.

Count: **0**

## 4. High Priority Issues

### High 1. Senjeri branch NAP and schema details are inconsistent across pages

- Issue: The Senjeri branch address/locality is not represented consistently between the homepage schema/footer and the dedicated Senjeri branch landing page.
- Location/file: `index.html:96-118`, `index.html:730`, `index.html:777`, `senjeri-pirivu-physiotherapy-clinic/index.html:50-53`, `senjeri-pirivu-physiotherapy-clinic/index.html:143`, `senjeri-pirivu-physiotherapy-clinic/index.html:210`
- Evidence: Homepage JSON-LD uses `addressLocality: "Senjeri"` plus `Shop 301, Pollachi / Palladam Main Road, near snacks shop, next to medical shop`. The Senjeri branch page schema and visible copy use `Pollachi / Palladam Main Road` and `Senjeri Pirivu`.
- Risk: Inconsistent NAP data can weaken local SEO trust signals and create ambiguity for Google Business Profile matching.
- Suggested fix: Normalize the Senjeri branch name, locality, street address, and display address across homepage JSON-LD, footer NAP, map section, and the dedicated branch page.
- Priority: High

### High 2. Hidden booking and branch sheets remain focusable while marked hidden

- Issue: The custom sheets are implemented as `div`/`form` dialogs with `role="dialog"` and `aria-hidden`, but interactive descendants remain in the DOM focus order when hidden.
- Location/file: `index.html:787-839`, `assets/js/app.js:240-257`, `assets/js/app.js:298-317`
- Evidence: Hidden sheets use `aria-hidden="true"` instead of `hidden`, `inert`, or native `<dialog>`. Browser audit found 10 focusable controls inside hidden sheets before opening them.
- Risk: Keyboard and assistive-technology users can encounter off-screen interactive controls, which is an accessibility and usability defect.
- Suggested fix: Use native `<dialog>` or apply `hidden`/`inert` to closed sheets, then restore focus and interactivity only when opened.
- Priority: High

Count: **2**

## 5. Medium Priority Issues

### Medium 1. Sitemap `lastmod` values are stale relative to current content

- Issue: All sitemap entries still show `2026-06-18`.
- Location/file: `sitemap.xml:3-5`
- Evidence: The current project contains newer content/state than the sitemap dates indicate.
- Risk: Search engines may not recrawl updated pages as promptly as expected.
- Suggested fix: Update `lastmod` whenever homepage or branch landing pages materially change.
- Priority: Medium

### Medium 2. Homepage copy mixes two-branch messaging with Palladam-only wording

- Issue: The homepage presents itself as a dual-branch site, but several SEO/content blocks still talk only about Palladam.
- Location/file: `index.html:231`, `index.html:287`, `index.html:666-669`, `index.html:759`
- Evidence: Examples include the hero image alt text ending with `in Palladam` and multiple FAQ/visit-copy lines using phrases like `physiotherapist in Palladam` and `Post operative rehabilitation Palladam`.
- Risk: This creates brand/location ambiguity on the primary domain and can dilute Senjeri branch relevance.
- Suggested fix: Keep the homepage branch-neutral or clearly dual-branch, and move branch-specific phrasing to the dedicated branch landing pages.
- Priority: Medium

### Medium 3. Branch toggle label is shortened to `Senjeri` while the rest of the site uses `Senjeri Pirivu`

- Issue: One UI label shortens the branch name while other UI, schema, and branch pages use the full name.
- Location/file: `index.html:251`
- Evidence: The toggle button text is `Senjeri`, but selected summaries, booking options, branch page title, and schema use `Senjeri Pirivu`.
- Risk: Minor user confusion and weaker naming consistency for local search relevance.
- Suggested fix: Use one canonical branch label everywhere, preferably `Senjeri Pirivu`.
- Priority: Medium

### Medium 4. Carousel cloning inflates DOM slide counts beyond the number of intended source cards

- Issue: The looping gallery implementation clones first and last slides into the DOM.
- Location/file: `assets/js/app.js:408-417`, `assets/js/app.js:422-519`
- Evidence: Current source has 3 Treatment Moments cards and 5 Clinic View cards in intended content, but browser inspection shows 5 and 7 DOM nodes respectively because of loop clones.
- Risk: This can confuse analytics, QA scripts, and some assistive-tech interpretations if future markup changes are not careful.
- Suggested fix: Keep clones `aria-hidden` as now, and document in QA notes that DOM counts exceed logical slide counts. If needed, mark clones with a dedicated attribute such as `data-clone="true"`.
- Priority: Medium

Count: **4**

## 6. Low Priority Issues

### Low 1. Branch landing pages do not include Twitter card metadata

- Issue: The homepage includes Twitter metadata, but the branch landing pages currently do not.
- Location/file: `palladam-physiotherapy-clinic/index.html`, `senjeri-pirivu-physiotherapy-clinic/index.html`
- Evidence: Both branch pages include Open Graph fields but no `twitter:*` tags.
- Risk: Reduced consistency in social previews for branch-specific shares.
- Suggested fix: Add `twitter:card`, `twitter:title`, `twitter:description`, and `twitter:image` to both branch pages.
- Priority: Low

### Low 2. Hero watermark image has empty `alt` without direct `aria-hidden` on the image itself

- Issue: Decorative hero watermark handling depends on the parent wrapper being `aria-hidden`.
- Location/file: `index.html:194-196`
- Evidence: The image uses `alt=""` and sits inside a hidden wrapper, which is acceptable, but the implementation is easier to regress accidentally than fully decorative image handling.
- Risk: Low current risk, but future markup edits could expose the image incorrectly.
- Suggested fix: Keep it as-is or add explicit decorative treatment consistently if this section is touched later.
- Priority: Low

### Low 3. Local preview on `localhost:4173` can be misleading because it is backed by an older working tree/service worker

- Issue: The pre-existing local preview on port `4173` did not reflect the current folder contents during this audit.
- Location/file: Local environment behavior observed during audit, not a repository file defect
- Evidence: `localhost:4173` served older gallery markup while a fresh preview from the current folder on `localhost:4175` matched the audited files.
- Risk: QA can produce false positives if an old preview instance is reused.
- Suggested fix: Before future audits, use a fresh preview process or clear old service worker state.
- Priority: Low

Count: **3**

## 7. No-Issue Confirmations

- Homepage structure was not found to have duplicate `id` attributes.
- Referenced local paths in `index.html`, `assets/css/styles.css`, `assets/js/app.js`, `manifest.webmanifest`, `service-worker.js`, `robots.txt`, and `sitemap.xml` resolved correctly during source inspection.
- `robots.txt` allows crawling and does not block icons or `assets/`.
- `manifest.webmanifest` is present and wired from the homepage and branch pages.
- Branch landing pages for Palladam and Senjeri Pirivu both returned `200` in local preview.
- Booking and branch action sheets opened successfully in a fresh local preview.
- Desktop and mobile preview showed no horizontal overflow in the audited current-folder preview.
- No runtime console exceptions or failed asset requests were seen in the fresh local preview.

## 8. File/Path Problems

No broken local file references were found in the audited files.

Confirmed present and referenced:

- `favicon.ico`
- `favicon-48x48.png`
- `favicon-96x96.png`
- `assets/icons/icon-192.png`
- `assets/icons/icon-512.png`
- `assets/icons/apple-touch-icon.png`
- `assets/images/prenatal-care-gallery.webp`
- `assets/images/postnatal-care-gallery.webp`
- `assets/images/urinary-incontinence-pelvic-floor-care-gallery.webp`

## 9. Gallery/Image Placement Report

### Treatment Moments

Intended source cards in `index.html:422-458`:

1. `assets/images/prenatal-care-gallery.webp` → Prenatal Care
2. `assets/images/postnatal-care-gallery.webp` → Postnatal Care
3. `assets/images/urinary-incontinence-pelvic-floor-care-gallery.webp` → Urinary Incontinence & Pelvic Floor Care

Assessment:

- The source markup uses only the three required women’s health gallery images for Treatment Moments.
- Browser DOM count is `5` because the carousel script clones first and last slides for looping.

### Doctor-Led Care

Intended source cards in `index.html:554-580`:

1. `assets/images/prenatal-care-gallery.webp` → Prenatal Care
2. `assets/images/postnatal-care-gallery.webp` → Postnatal Care
3. `assets/images/urinary-incontinence-pelvic-floor-care-gallery.webp` → Urinary Incontinence & Pelvic Floor Care

Assessment:

- The source markup uses only the same three required images.

### Clinic View

Intended source cards in `index.html:582-629`:

1. Consultation area
2. Treatment bed area
3. Electrotherapy setup
4. Exercise guidance area
5. Recovery support space

Assessment:

- Clinic View is a separate clinic-space slider, not a treatment-moments gallery.
- Browser DOM count is `7` because the looping gallery adds two clones.

## 10. Booking/WhatsApp Flow Report

- The branch action sheet opened correctly in fresh preview on desktop and mobile.
- The booking sheet opened correctly in fresh preview on desktop and mobile.
- Booking summary defaulted to `Selected: Palladam • Back Pain Care`.
- Booking options include the three women’s health entries:
  - `Prenatal Care`
  - `Postnatal Care`
  - `Urinary Incontinence & Pelvic Floor Care`
- Main risk in this area is accessibility of hidden dialogs, not functional failure.

## 11. Mobile/Responsive Report

- Fresh mobile preview used `390 x 844`.
- Bottom mobile nav displayed correctly on mobile and stayed hidden on desktop.
- No horizontal overflow was detected in fresh desktop or mobile preview.
- Key call/WhatsApp/book triggers remained available.

## 12. PWA/Service Worker Report

- Current service worker cache version: `sri-sashti-v56-gallery-favicon-hardening`
- Manifest present: `manifest.webmanifest`
- Manifest app name values:
  - `name`: `Sashti Physio`
  - `short_name`: `Sashti Physio`
- Manifest icons are present and correctly referenced.
- Favicon tags are present on homepage and branch pages.
- Service worker asset list includes current favicon and icon files.
- PWA risk found: none critical. Main caution is stale local preview behavior if an older preview/service worker instance is reused.

## 13. SEO/Local SEO Report

Confirmed good:

- Canonical tags are present on homepage and both branch pages.
- Homepage includes Open Graph, Twitter card tags, and JSON-LD.
- Branch pages include Open Graph and branch-specific JSON-LD.
- `robots.txt` is open and points to sitemap.

Issues found:

- Senjeri branch NAP/schema inconsistency across pages.
- Sitemap `lastmod` values are stale.
- Homepage contains multiple Palladam-only phrases despite being the dual-branch root.

## 14. Accessibility Report

Confirmed good:

- Skip link is present.
- Buttons inspected in the main flow had labels or visible text.
- No duplicate IDs were found.

Issues found:

- Hidden custom dialogs remain focusable while `aria-hidden="true"`.
- Carousel clones increase DOM complexity and should stay carefully hidden from assistive tech.

## 15. Performance Report

Confirmed good:

- No failed local asset requests were seen in fresh preview.
- Hero image is preloaded.
- Primary images use lazy loading where appropriate.

Watch-outs:

- Carousel cloning slightly increases DOM node count.
- Large image-heavy sections should continue to be monitored, but no immediate breakage was observed.

## 16. Security/Privacy Report

Confirmed good:

- No inline third-party trackers were identified in the audited files.
- External links that open a new tab use `rel="noopener"` in the inspected areas.

No significant security issues were found in this static site audit.

## 17. Content/Clinic Info Consistency Report

Main consistency findings:

- Palladam branch details are internally consistent.
- Senjeri branch details are not fully consistent between homepage, homepage schema/footer, and the dedicated branch page.
- Dual-branch homepage wording still includes several Palladam-only phrases.
- One branch selector label uses `Senjeri` instead of `Senjeri Pirivu`.

## 18. Recommended Fix Order

1. Normalize Senjeri branch NAP and locality details everywhere.
2. Fix hidden dialog accessibility with `dialog`, `hidden`, or `inert`.
3. Update homepage copy so branch-neutral sections do not over-index on Palladam.
4. Refresh sitemap `lastmod` values.
5. Normalize the `Senjeri Pirivu` label everywhere.
6. Add Twitter card metadata to branch pages if branch-page social sharing matters.

## 19. Do Not Change Warnings

The following were not changed during this audit and should stay protected during future fixes unless explicitly approved:

- Homepage layout and section order
- Header
- Hero
- Treatment cards
- Doctor section
- Booking flow structure
- Tamil toggle
- Footer layout
- PWA app name
- SEO title
- Bottom mobile Call / WhatsApp / Book buttons

## 20. Final Checklist Before Next Commit/Push

- Confirm one canonical Senjeri branch address/locality string.
- Update homepage JSON-LD, footer NAP, branch section, and Senjeri branch page to match.
- Improve closed-sheet accessibility behavior.
- Refresh sitemap dates.
- Re-test on a fresh preview instance after clearing old service worker state.
- Re-verify gallery logic using logical slide counts, not raw DOM counts.

## Summary Counts

- Critical: **0**
- High: **2**
- Medium: **4**
- Low: **3**

## Top 5 Issues

1. Senjeri branch NAP/schema inconsistency across homepage and branch page.
2. Hidden booking and branch sheets remain focusable while marked hidden.
3. Homepage mixes dual-branch positioning with Palladam-only copy.
4. Sitemap `lastmod` values are stale.
5. `Senjeri` vs `Senjeri Pirivu` branch naming is inconsistent in the homepage UI.

## Local Preview Result

- Existing preview on `http://localhost:4173/` was stale and not used for final judgment.
- Fresh current-folder preview on `http://localhost:4175/` was used for validation.
- Fresh preview result: homepage, branch pages, booking sheet, branch action sheet, mobile bottom nav, and asset loading all worked without console exceptions or failed requests.

