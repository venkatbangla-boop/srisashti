
const $ = (s, p=document) => p.querySelector(s);
const $$ = (s, p=document) => [...p.querySelectorAll(s)];

const guides = {
  en: {
    "Back pain": ["Back pain care", "We check stiffness, posture strain and daily movement difficulty, then guide therapy and exercises."],
    "Neck pain": ["Neck pain care", "We assess neck tightness, posture strain and movement restriction, then plan suitable therapy and home care."],
    "Knee pain": ["Knee pain care", "We focus on walking comfort, joint strength, flexibility and pain-reduction support."],
    "Sports injury": ["Sports injury rehab", "We support safe recovery, strengthening, balance and return-to-activity planning."],
    "Fracture rehab": ["Fracture rehabilitation", "After fracture healing, physiotherapy helps reduce stiffness, improve strength and restore movement safely."],
    "Elderly mobility": ["Elderly mobility care", "We focus on walking confidence, balance, strength and fall-risk reduction."],
    "Posture correction": ["Ergonomic posture correction", "We guide desk habits, neck/back care, stretching and strengthening exercises."],
    "Post-surgery recovery": ["Post-surgery recovery", "Physiotherapy helps with stiffness, weakness, mobility and gradual functional recovery."],
    "Bell's palsy": ["Bell's palsy care", "Assessment-based facial stimulation and physiotherapy support may be used to help facial muscle activation, comfort and guided recovery."],
    "Other": ["Physiotherapy consultation", "Send your problem details on WhatsApp. The clinic will guide the suitable branch and appointment timing."]
  },
  ta: {
    "Back pain": ["முதுகு வலி பராமரிப்பு", "முதுகு வலி, posture strain, stiffness மற்றும் தினசரி இயக்க சிரமங்களுக்கு therapy மற்றும் exercise guidance வழங்கப்படும்."],
    "Neck pain": ["கழுத்து வலி பராமரிப்பு", "கழுத்து இறுக்கம், posture strain மற்றும் movement restriction-க்கு therapy மற்றும் home care வழிகாட்டுதல்."],
    "Knee pain": ["முழங்கால் வலி பராமரிப்பு", "முழங்கால் வலி, walking comfort, joint strength மற்றும் flexibility மேம்பாட்டில் கவனம்."],
    "Sports injury": ["விளையாட்டு காயம் மறுவாழ்வு", "Sports injury-க்கு safe recovery, strengthening, balance மற்றும் return-to-activity plan."],
    "Fracture rehab": ["எலும்பு முறிவு மறுவாழ்வு", "Fracture healing-க்குப் பின் stiffness குறைத்து strength மற்றும் movement restore செய்ய உதவும்."],
    "Elderly mobility": ["முதியோர் இயக்க பராமரிப்பு", "முதியோர் நோயாளிகளுக்கு walking confidence, balance, strength மற்றும் fall-risk reduction."],
    "Posture correction": ["உடல் நிலை திருத்தம்", "Desk habits, neck/back care, stretching மற்றும் strengthening exercise வழிகாட்டுதல்."],
    "Post-surgery recovery": ["அறுவை சிகிச்சைக்குப் பின் மீட்பு", "Surgery-க்குப் பின் stiffness, weakness மற்றும் mobility recovery-க்கு physiotherapy support."],
    "Bell's palsy": ["பெல்ஸ் பால்ஸி பராமரிப்பு", "Assessment அடிப்படையில் facial stimulation மற்றும் physiotherapy support மூலம் முக தசை செயல்பாடு, நிம்மதி மற்றும் guided recovery-க்கு உதவி வழங்கப்படலாம்."],
    "Other": ["பிசியோதெரபி ஆலோசனை", "உங்கள் பிரச்சனையை WhatsApp-ல் அனுப்புங்கள். சரியான கிளை மற்றும் appointment timing guidance கிடைக்கும்."]
  }
};

let lang = localStorage.getItem("ss_lang") || "en";
let selectedProblem = "Back pain";
let lastFocus = null;
const animatedCounts = new WeakSet();

function trackEvent(name) {
  if (!name) return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: "site_interaction", action: name });
  if (typeof gtag === "function") gtag("event", name);
}

function setLanguage(nextLang) {
  lang = nextLang;
  document.documentElement.lang = lang === "ta" ? "ta" : "en";

  $$("[data-en][data-ta]").forEach(el => {
    el.textContent = el.dataset[lang] || el.dataset.en;
  });

  $$("[data-placeholder-en][data-placeholder-ta]").forEach(el => {
    el.placeholder = el.dataset[`placeholder${lang === "ta" ? "Ta" : "En"}`] || el.placeholder;
  });

  const toggle = $("#languageToggle");
  if (toggle) toggle.textContent = lang === "en" ? "தமிழ்" : "English";

  localStorage.setItem("ss_lang", lang);
  updateQuickResult(selectedProblem, false);
  updateSelectedSummary();
}

function updateSelectedSummary() {
  const summary = $("#selectedSummary");
  if (!summary) return;
  const branch = $("#branch")?.value || "Palladam";
  const problem = $("#problem")?.value || selectedProblem;
  summary.textContent = lang === "ta"
    ? `தேர்வு: ${branch} • ${problem}`
    : `Selected: ${branch} • ${problem}`;
}

function updateQuickResult(problem, openBooking) {
  selectedProblem = problem;
  const title = $("#quickResultTitle");
  const text = $("#quickResultText");
  const result = $("#quickResult");
  const select = $("#problem");
  if (!title || !text || !result) return;

  const guide = (guides[lang] && guides[lang][problem]) || guides.en[problem] || guides.en["Back pain"];
  title.textContent = guide[0];
  text.textContent = guide[1];
  if (select) select.value = problem;

  $$(".pain-chip").forEach(btn => btn.classList.toggle("active", btn.dataset.problem === problem));

  result.classList.remove("is-updated");
  void result.offsetWidth;
  result.classList.add("is-updated");
  updateSelectedSummary();

  if (openBooking) {
    trackEvent(`quick_help_${problem.toLowerCase().replaceAll(" ", "_")}`);
    result.scrollIntoView({ behavior:"smooth", block:"center" });
    setTimeout(openSheet, 450);
  }
}

function openSheet() {
  const sheet = $("#bookingSheet");
  if (!sheet) return;
  lastFocus = document.activeElement;
  updateSelectedSummary();
  sheet.classList.add("open");
  sheet.setAttribute("aria-hidden", "false");
  document.body.classList.add("sheet-open");
  trackEvent("booking_sheet_open");
  setTimeout(() => $("#phone")?.focus(), 250);
}

function closeSheet() {
  const sheet = $("#bookingSheet");
  if (!sheet) return;
  sheet.classList.remove("open");
  sheet.setAttribute("aria-hidden", "true");
  document.body.classList.remove("sheet-open");
  if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
}

function trapFocus(e) {
  const sheet = $("#bookingSheet");
  if (!sheet?.classList.contains("open") || e.key !== "Tab") return;
  const focusable = $$('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])', sheet)
    .filter(el => !el.disabled && el.offsetParent !== null);
  if (!focusable.length) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault();
    last.focus();
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault();
    first.focus();
  }
}

function animateCount(el) {
  if (!el || animatedCounts.has(el)) return;
  animatedCounts.add(el);
  const raw = (el.dataset.count || "").trim();
  const target = Number.parseInt(raw, 10);
  const suffix = raw.includes("%") ? "%" : "";
  if (!Number.isFinite(target)) return;

  const duration = 900;
  const startTime = performance.now();

  function tick(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = `${Math.round(target * eased)}${suffix}`;
    if (progress < 1) requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}

document.addEventListener("DOMContentLoaded", () => {
  $("#year").textContent = new Date().getFullYear();

  $("#languageToggle")?.addEventListener("click", () => setLanguage(lang === "en" ? "ta" : "en"));

  $("#menuBtn")?.addEventListener("click", () => {
    const menu = $("#mobileMenu");
    const btn = $("#menuBtn");
    const open = menu.classList.toggle("open");
    btn.setAttribute("aria-expanded", open ? "true" : "false");
  });

  $$(".mobilemenu a").forEach(a => a.addEventListener("click", () => {
    $("#mobileMenu").classList.remove("open");
    $("#menuBtn")?.setAttribute("aria-expanded", "false");
  }));

  $$("[data-open-booking]").forEach(el => {
    el.addEventListener("click", () => {
      const p = el.dataset.problemValue;
      if (p) updateQuickResult(p, false);
      openSheet();
    });
  });

  $$("[data-close-booking]").forEach(el => el.addEventListener("click", closeSheet));
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeSheet();
    trapFocus(e);
  });

  $$("[data-branch]").forEach(btn => {
    btn.addEventListener("click", () => {
      $$("[data-branch]").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const select = $("#branch");
      if (select) select.value = btn.dataset.branch;
      updateSelectedSummary();
    });
  });

  $("#branch")?.addEventListener("change", updateSelectedSummary);
  $("#problem")?.addEventListener("change", e => updateQuickResult(e.target.value, false));

  $$(".pain-chip").forEach(chip => {
    chip.addEventListener("click", () => updateQuickResult(chip.dataset.problem, true));
  });

  $$("[data-track]").forEach(el => {
    el.addEventListener("click", () => trackEvent(el.dataset.track));
  });

  $("#bookingForm")?.addEventListener("submit", e => {
    e.preventDefault();
    const name = $("#name").value.trim();
    const phone = $("#phone").value.trim();
    const branch = $("#branch").value;
    const problem = $("#problem").value;
    const message = $("#message").value.trim();
    const branchPhone = branch === "Palladam" ? "917845707427" : "917397285636";
    const text =
      `Hello Sri Sashti Physiotherapy Clinic,%0A%0AI want to book a physiotherapy appointment.%0A%0A` +
      `Name: ${encodeURIComponent(name)}%0A` +
      `Mobile: ${encodeURIComponent(phone)}%0A` +
      `Preferred branch: ${encodeURIComponent(branch)}%0A` +
      `Problem: ${encodeURIComponent(problem)}%0A` +
      `Message: ${encodeURIComponent(message || "Please call me for appointment timing.")}`;
    trackEvent("whatsapp_booking_submit");
    window.open(`https://wa.me/${branchPhone}?text=${text}`, "_blank", "noopener");
  });

  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target.dataset.revealDelay) {
          entry.target.style.transitionDelay = entry.target.dataset.revealDelay;
        }
        entry.target.classList.add("show");
        entry.target.querySelectorAll("[data-count]").forEach(animateCount);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold:.12 });
  $$(".reveal").forEach(el => revealObserver.observe(el));

  $$("[data-count]").forEach(el => {
    const container = el.closest(".reveal");
    if (!container) animateCount(el);
  });

  $$(".program-card.reveal, .journey-card.reveal, .review-grid article, .family-grid article").forEach((el, index) => {
    el.dataset.revealDelay = `${Math.min(index * 70, 280)}ms`;
    if (!el.classList.contains("reveal")) el.classList.add("reveal");
    revealObserver.observe(el);
  });

  setLanguage(lang);
  updateQuickResult("Back pain", false);

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./service-worker.js").catch(console.error);
  }
});
