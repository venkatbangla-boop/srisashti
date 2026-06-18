
const $ = (s, p=document) => p.querySelector(s);
const $$ = (s, p=document) => [...p.querySelectorAll(s)];

const iconMarkup = {
  "icon-call": '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M7.5 4.5 9.8 7c.5.6.5 1.4-.1 1.9l-1.1 1c1 2.1 2.6 3.7 4.7 4.8l1.1-1.1c.5-.5 1.4-.6 1.9-.1l2.6 2.2c.6.5.7 1.4.2 2l-.9 1.3c-.5.7-1.4 1-2.2.8C10.2 18.4 5.6 13.8 4.2 8c-.2-.8.1-1.7.8-2.2l1.2-.9c.4-.4.9-.5 1.3-.4Z"/><path d="M14.5 5.5c2 .5 3.5 2 4 4"/><path d="M14.7 2.7c3.4.7 6 3.3 6.7 6.7"/></svg>',
  "icon-whatsapp-chat": '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M5.3 18.7 6.2 15A7.5 7.5 0 1 1 9 17.7l-3.7 1Z"/><path d="M9.2 8.6c.3-.4.7-.4 1-.1l1 1.1c.2.2.2.6 0 .9l-.4.5c.5 1 1.3 1.8 2.3 2.3l.5-.4c.3-.2.7-.2.9 0l1.1 1c.3.3.3.7-.1 1-.5.5-1.2.7-2 .5-2.4-.6-4.3-2.5-4.9-4.9-.1-.7.1-1.4.6-1.9Z"/></svg>',
  "icon-directions": '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 21s6-5.4 6-11a6 6 0 1 0-12 0c0 5.6 6 11 6 11Z"/><circle cx="12" cy="10" r="2.2"/></svg>',
  "icon-book-calendar": '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="4" y="5" width="16" height="15" rx="2"/><path d="M8 3v4M16 3v4M4 10h16"/><path d="m9 15 2 2 4-4"/></svg>',
  "icon-install-app": '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 3v10"/><path d="m8 9 4 4 4-4"/><path d="M5 16v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3"/></svg>',
  "icon-treatment": '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4 15h16"/><path d="M6 15v4h12v-4"/><path d="M8 15V9a4 4 0 0 1 8 0v6"/><path d="M12 7v4M10 9h4"/></svg>',
  "icon-doctor": '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="7" r="3"/><path d="M5 21v-2a7 7 0 0 1 14 0v2"/><path d="M9 12v4a3 3 0 0 0 6 0v-4"/><path d="M7 17h3M14 17h3"/></svg>',
  "icon-branch": '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4 21V8l8-4 8 4v13"/><path d="M9 21v-6h6v6"/><path d="M9 10h2M13 10h2M9 13h2M13 13h2"/><path d="M12 6v3M10.5 7.5h3"/></svg>',
  "icon-gallery": '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="4" y="5" width="16" height="14" rx="2"/><circle cx="9" cy="10" r="1.4"/><path d="m6 17 4-4 3 3 2-2 3 3"/></svg>'
};

const guides = {
  en: {
    "Back pain": ["Back pain care", "We check stiffness, posture strain and daily movement difficulty, then guide therapy and exercises."],
    "Back Pain Care": ["Back Pain Care", "We check stiffness, posture strain and daily movement difficulty, then guide therapy and exercises."],
    "Neck pain": ["Neck pain care", "We assess neck tightness, posture strain and movement restriction, then plan suitable therapy and home care."],
    "Neck Pain Care": ["Neck Pain Care", "We assess neck tightness, posture strain and movement restriction, then plan suitable therapy and home care."],
    "Knee pain": ["Knee pain care", "We focus on walking comfort, joint strength, flexibility and pain-reduction support."],
    "Sports injury": ["Sports injury rehab", "We support safe recovery, strengthening, balance and return-to-activity planning."],
    "Sports Injury Rehab": ["Sports Injury Rehab", "We support safe recovery, strengthening, balance and return-to-activity planning."],
    "Fracture rehab": ["Fracture rehabilitation", "After fracture healing, physiotherapy helps reduce stiffness, improve strength and restore movement safely."],
    "Fracture Rehabilitation": ["Fracture Rehabilitation", "After fracture healing, physiotherapy helps reduce stiffness, improve strength and restore movement safely."],
    "Arthritis care": ["Arthritis care", "Supportive physiotherapy helps with joint stiffness, knee pain, arthritis-related weakness and walking difficulty."],
    "Knee pain and arthritis care": ["Knee pain and arthritis care", "Supportive physiotherapy helps with knee pain, arthritis-related stiffness, walking difficulty and joint strength recovery."],
    "Knee Pain & Arthritis Care": ["Knee Pain & Arthritis Care", "Supportive physiotherapy helps with knee pain, arthritis-related stiffness, walking difficulty and joint strength recovery."],
    "Musculoskeletal pain": ["Musculoskeletal pain care", "We support muscle, joint, ligament and posture-related pain that affects work, sleep and daily movement."],
    "Musculoskeletal Pain": ["Musculoskeletal Pain", "We support muscle, joint, ligament and posture-related pain that affects work, sleep and daily movement."],
    "Shoulder & Joint Care": ["Shoulder & Joint Care", "We support frozen shoulder, joint stiffness, shoulder pain and movement restriction after assessment."],
    "Electrotherapy modalities": ["Electrotherapy modalities", "TENS, IFT, ultrasound and muscle stimulation may be used after assessment to support pain relief and recovery."],
    "Electrotherapy Modalities": ["Electrotherapy Modalities", "TENS, IFT, ultrasound and muscle stimulation may be used after assessment to support pain relief and recovery."],
    "Core stability exercise": ["Core stability exercise", "Targeted core strengthening helps support the spine, posture, balance and long-term back pain prevention."],
    "Core Stability Exercise": ["Core Stability Exercise", "Targeted core strengthening helps support the spine, posture, balance and long-term back pain prevention."],
    "Post-surgery recovery": ["Post-surgery recovery", "Physiotherapy helps with stiffness, weakness, mobility and gradual functional recovery."],
    "Pre and Post Operative Rehabilitation": ["Pre and Post Operative Rehabilitation", "Physiotherapy helps with stiffness, weakness, mobility and gradual functional recovery before and after surgery."],
    "Bell's palsy": ["Bell's palsy care", "Assessment-based facial stimulation and physiotherapy support may be used to help facial muscle activation, comfort and guided recovery."],
    "Facial Palsy & Neuro Care": ["Facial Palsy & Neuro Care", "Assessment-based physiotherapy support may be used for facial palsy, nerve-related weakness and guided movement recovery."],
    "Other": ["Physiotherapy consultation", "Send your problem details on WhatsApp. The clinic will guide the suitable branch and appointment timing."]
  },
  ta: {
    "Back pain": ["முதுகு வலி பராமரிப்பு", "முதுகு வலி, posture strain, stiffness மற்றும் தினசரி இயக்க சிரமங்களுக்கு therapy மற்றும் exercise guidance வழங்கப்படும்."],
    "Back Pain Care": ["முதுகு வலி பராமரிப்பு", "முதுகு வலி, posture strain, stiffness மற்றும் தினசரி இயக்க சிரமங்களுக்கு therapy மற்றும் exercise guidance வழங்கப்படும்."],
    "Neck pain": ["கழுத்து வலி பராமரிப்பு", "கழுத்து இறுக்கம், posture strain மற்றும் movement restriction-க்கு therapy மற்றும் home care வழிகாட்டுதல்."],
    "Neck Pain Care": ["கழுத்து வலி பராமரிப்பு", "கழுத்து இறுக்கம், posture strain மற்றும் movement restriction-க்கு therapy மற்றும் home care வழிகாட்டுதல்."],
    "Knee pain": ["முழங்கால் வலி பராமரிப்பு", "முழங்கால் வலி, walking comfort, joint strength மற்றும் flexibility மேம்பாட்டில் கவனம்."],
    "Sports injury": ["விளையாட்டு காயம் மறுவாழ்வு", "Sports injury-க்கு safe recovery, strengthening, balance மற்றும் return-to-activity plan."],
    "Sports Injury Rehab": ["விளையாட்டு காயம் மறுவாழ்வு", "Sports injury-க்கு safe recovery, strengthening, balance மற்றும் return-to-activity plan."],
    "Fracture rehab": ["எலும்பு முறிவு மறுவாழ்வு", "Fracture healing-க்குப் பின் stiffness குறைத்து strength மற்றும் movement restore செய்ய உதவும்."],
    "Fracture Rehabilitation": ["எலும்பு முறிவு மறுவாழ்வு", "Fracture healing-க்குப் பின் stiffness குறைத்து strength மற்றும் movement restore செய்ய உதவும்."],
    "Arthritis care": ["ஆர்திரைடிஸ் பராமரிப்பு", "மூட்டு இறுக்கம், முழங்கால் வலி, arthritis காரணமான பலவீனம் மற்றும் நடக்கும் சிரமங்களுக்கு supportive physiotherapy வழங்கப்படும்."],
    "Knee pain and arthritis care": ["முழங்கால் வலி மற்றும் ஆர்திரைடிஸ் பராமரிப்பு", "முழங்கால் வலி, arthritis காரணமான இறுக்கம், நடக்கும் சிரமம் மற்றும் joint strength recovery-க்கு supportive physiotherapy வழங்கப்படும்."],
    "Knee Pain & Arthritis Care": ["முழங்கால் வலி & ஆர்திரைடிஸ் பராமரிப்பு", "முழங்கால் வலி, arthritis காரணமான இறுக்கம், நடக்கும் சிரமம் மற்றும் joint strength recovery-க்கு supportive physiotherapy வழங்கப்படும்."],
    "Musculoskeletal pain": ["தசைமூட்டு வலி பராமரிப்பு", "தசை, மூட்டு, ligament மற்றும் posture-ஆல் வரும் வலி வேலை, தூக்கம் மற்றும் தினசரி இயக்கத்தை பாதிக்கும்போது உதவி வழங்கப்படும்."],
    "Musculoskeletal Pain": ["தசைமூட்டு வலி பராமரிப்பு", "தசை, மூட்டு, ligament மற்றும் posture-ஆல் வரும் வலி வேலை, தூக்கம் மற்றும் தினசரி இயக்கத்தை பாதிக்கும்போது உதவி வழங்கப்படும்."],
    "Shoulder & Joint Care": ["தோள் & மூட்டு பராமரிப்பு", "Frozen shoulder, joint stiffness, shoulder pain மற்றும் movement restriction-க்கு support வழங்கப்படும்."],
    "Electrotherapy modalities": ["எலக்ட்ரோதெரபி முறைகள்", "Assessment பின் TENS, IFT, ultrasound மற்றும் muscle stimulation போன்ற முறைகள் வலி நிவாரணம் மற்றும் recovery-க்கு பயன்படுத்தப்படலாம்."],
    "Electrotherapy Modalities": ["எலக்ட்ரோதெரபி முறைகள்", "Assessment பின் TENS, IFT, ultrasound மற்றும் muscle stimulation போன்ற முறைகள் வலி நிவாரணம் மற்றும் recovery-க்கு பயன்படுத்தப்படலாம்."],
    "Core stability exercise": ["மைய தசை நிலைத்தன்மை பயிற்சி", "முதுகெலும்பு, posture, balance மற்றும் நீண்டகால முதுகு வலி தடுப்புக்கு targeted core strengthening உதவும்."],
    "Core Stability Exercise": ["மைய தசை நிலைத்தன்மை பயிற்சி", "முதுகெலும்பு, posture, balance மற்றும் நீண்டகால முதுகு வலி தடுப்புக்கு targeted core strengthening உதவும்."],
    "Post-surgery recovery": ["அறுவை சிகிச்சைக்குப் பின் மீட்பு", "Surgery-க்குப் பின் stiffness, weakness மற்றும் mobility recovery-க்கு physiotherapy support."],
    "Pre and Post Operative Rehabilitation": ["அறுவை சிகிச்சைக்கு முன் மற்றும் பின் மறுவாழ்வு", "Surgery முன் மற்றும் பின் stiffness, weakness மற்றும் mobility recovery-க்கு physiotherapy support."],
    "Bell's palsy": ["பெல்ஸ் பால்ஸி பராமரிப்பு", "Assessment அடிப்படையில் facial stimulation மற்றும் physiotherapy support மூலம் முக தசை செயல்பாடு, நிம்மதி மற்றும் guided recovery-க்கு உதவி வழங்கப்படலாம்."],
    "Facial Palsy & Neuro Care": ["முக நரம்பு பலவீனம் & நரம்பியல் பராமரிப்பு", "Assessment அடிப்படையில் facial palsy, nerve-related weakness மற்றும் guided movement recovery-க்கு physiotherapy support வழங்கப்படலாம்."],
    "Other": ["பிசியோதெரபி ஆலோசனை", "உங்கள் பிரச்சனையை WhatsApp-ல் அனுப்புங்கள். சரியான கிளை மற்றும் appointment timing guidance கிடைக்கும்."]
  }
};

let lang = localStorage.getItem("ss_lang") || "en";
let selectedProblem = "Back Pain Care";
let lastFocus = null;
const animatedCounts = new WeakSet();
let deferredInstallPrompt = null;
let branchActionType = "call";
let branchActionProblem = "";

const branchContacts = {
  palladam: {
    name: "Palladam",
    phone: "+91 78457 07427",
    tel: "tel:+917845707427",
    whatsapp: "917845707427"
  },
  senjeri: {
    name: "Senjeri Pirivu",
    phone: "+91 73972 85636",
    tel: "tel:+917397285636",
    whatsapp: "917397285636"
  }
};

const branchActionCopy = {
  call: {
    title: {
      en: "Choose branch to call",
      ta: "அழைக்க கிளையைத் தேர்வு செய்யவும்"
    },
    subtitle: {
      en: "Select the clinic branch you want to call.",
      ta: "அழைக்க வேண்டிய கிளையைத் தேர்வு செய்யவும்."
    },
    icon: "icon-call"
  },
  whatsapp: {
    title: {
      en: "Choose branch for WhatsApp",
      ta: "WhatsApp செய்ய கிளையைத் தேர்வு செய்யவும்"
    },
    subtitle: {
      en: "Select the clinic branch to continue on WhatsApp.",
      ta: "WhatsApp-ல் தொடர கிளையைத் தேர்வு செய்யவும்."
    },
    icon: "icon-whatsapp-chat"
  }
};

function getInstallButtons() {
  return [$("#installAppBtn"), $("#installAppBtnMobile")].filter(Boolean);
}

function updateInstallButtons() {
  const buttons = getInstallButtons();
  buttons.forEach(button => {
    button.hidden = !deferredInstallPrompt;
  });
}

async function promptInstall() {
  if (!deferredInstallPrompt) return;
  const promptEvent = deferredInstallPrompt;
  deferredInstallPrompt = null;
  updateInstallButtons();
  promptEvent.prompt();
  try {
    await promptEvent.userChoice;
  } catch (error) {
    console.error(error);
  }
}

function trackEvent(name) {
  if (!name) return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: "site_interaction", action: name });
  if (typeof gtag === "function") gtag("event", name);
}

function initDoctorExperience() {
  $$("[data-experience-start]").forEach(el => {
    const start = new Date(`${el.dataset.experienceStart}T00:00:00`);
    if (Number.isNaN(start.getTime())) return;

    const today = new Date();
    let years = today.getFullYear() - start.getFullYear();
    const beforeAnniversary =
      today.getMonth() < start.getMonth() ||
      (today.getMonth() === start.getMonth() && today.getDate() < start.getDate());
    if (beforeAnniversary) years -= 1;

    el.textContent = lang === "ta"
      ? `${years}+ ஆண்டுகள் மருத்துவ அனுபவம்`
      : `${years}+ years clinical experience`;
  });
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
  initDoctorExperience();
  updateQuickResult(selectedProblem, false);
  updateSelectedSummary();
  updateBranchActionLabels();
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
  if (!$(".booking-sheet.open")) document.body.classList.remove("sheet-open");
  if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
}

function updateBranchActionLabels() {
  const action = branchActionType === "call" ? "call" : "whatsapp";
  const copy = branchActionCopy[action];
  const title = $("[data-branch-action-title]");
  const subtitle = $("[data-branch-action-subtitle]");

  if (title) {
    title.dataset.en = copy.title.en;
    title.dataset.ta = copy.title.ta;
    title.textContent = copy.title[lang] || copy.title.en;
  }

  if (subtitle) {
    subtitle.dataset.en = copy.subtitle.en;
    subtitle.dataset.ta = copy.subtitle.ta;
    subtitle.textContent = copy.subtitle[lang] || copy.subtitle.en;
  }

  $$("[data-branch-action-label]").forEach(label => {
    const en = label.dataset[`${action}En`];
    const ta = label.dataset[`${action}Ta`];
    label.dataset.en = en;
    label.dataset.ta = ta;
    label.textContent = lang === "ta" ? ta : en;
  });

  $$("[data-branch-action-icon]").forEach(icon => {
    icon.classList.toggle("icon-call", action === "call");
    icon.classList.toggle("icon-whatsapp-chat", action === "whatsapp");
    icon.innerHTML = iconMarkup[copy.icon] || "";
  });

  $$("[data-branch-choice]").forEach(button => {
    button.classList.toggle("is-whatsapp", action === "whatsapp");
  });
}

function openBranchActionSheet(actionType, selectedProblemValue) {
  const sheet = $("#branchActionSheet");
  if (!sheet) return;
  branchActionType = actionType === "call" ? "call" : "whatsapp";
  branchActionProblem = selectedProblemValue || "";
  lastFocus = document.activeElement;
  updateBranchActionLabels();
  sheet.classList.add("open");
  sheet.setAttribute("aria-hidden", "false");
  document.body.classList.add("sheet-open");
  trackEvent(`branch_action_sheet_${branchActionType}_open`);
  setTimeout(() => $(".branch-option", sheet)?.focus(), 250);
}

function closeBranchActionSheet() {
  const sheet = $("#branchActionSheet");
  if (!sheet) return;
  sheet.classList.remove("open");
  sheet.setAttribute("aria-hidden", "true");
  if (!$(".booking-sheet.open")) document.body.classList.remove("sheet-open");
  if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
}

function getWhatsAppMessage(branchName, problem) {
  const text = problem
    ? `Hello Sri Sashti Physiotherapy Clinic, I want to book an appointment for ${problem}. Preferred branch: ${branchName}.`
    : `Hello Sri Sashti Physiotherapy Clinic, I want to book an appointment. Preferred branch: ${branchName}.`;
  return encodeURIComponent(text);
}

function runBranchAction(branchKey) {
  const branch = branchContacts[branchKey];
  if (!branch) return;
  const isCall = branchActionType === "call";
  trackEvent(`branch_${branchActionType}_${branchKey}`);
  closeBranchActionSheet();
  if (isCall) {
    window.location.href = branch.tel;
    return;
  }
  const problem = branchActionProblem || (branchActionType === "book" ? selectedProblem : "");
  const text = getWhatsAppMessage(branch.name, problem);
  window.open(`https://wa.me/${branch.whatsapp}?text=${text}`, "_blank", "noopener");
}

function trapFocus(e) {
  const sheet = $(".booking-sheet.open");
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

function hydrateIcons(root = document) {
  $$(".icon", root).forEach(icon => {
    const iconClass = [...icon.classList].find(name => iconMarkup[name]);
    if (!iconClass) return;
    if (icon.dataset.iconReady === "true") return;
    icon.innerHTML = iconMarkup[iconClass];
    icon.dataset.iconReady = "true";
  });
}

function initAutoGalleries() {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const galleries = $$(".auto-gallery");

  galleries.forEach(gallery => {
    if (gallery.dataset.galleryReady === "true") return;
    const track = $(".auto-gallery-track", gallery);
    const originalSlides = $$(".auto-gallery-slide", track);
    const prevBtn = $(".auto-gallery-prev", gallery);
    const nextBtn = $(".auto-gallery-next", gallery);
    const dotsWrap = $(".auto-gallery-dots", gallery);
    if (!track || !originalSlides.length || !dotsWrap) return;
    gallery.classList.add("is-loop-gallery", "is-continuous-gallery");

    function prepareClone(slide) {
      slide.classList.remove("reveal");
      slide.classList.add("show");
      slide.setAttribute("aria-hidden", "true");
      $$("[id]", slide).forEach(el => el.removeAttribute("id"));
      return slide;
    }

    if (originalSlides.length > 1) {
      const firstClone = prepareClone(originalSlides[0].cloneNode(true));
      const lastClone = prepareClone(originalSlides[originalSlides.length - 1].cloneNode(true));
      track.insertBefore(lastClone, originalSlides[0]);
      track.appendChild(firstClone);
    }

    const slideCount = originalSlides.length;

    function renderedToLogical(index) {
      if (slideCount <= 1) return 0;
      if (index === 0) return slideCount - 1;
      if (index === slideCount + 1) return 0;
      return index - 1;
    }

    let current = 0;
    let currentRendered = slideCount > 1 ? 1 : 0;
    let autoplayTimer = null;
    let resumeTimer = null;
    let scrollingByCode = false;
    const autoplayEnabled = gallery.dataset.autoplay === "true";
    const autoplayInterval = Number.parseInt(gallery.dataset.interval || "4800", 10);
    const interactionResumeDelay = 7000;
    const slideSettleDelay = reducedMotion.matches ? 0 : 520;
    let userInteracting = false;

    function clearTimers() {
      window.clearInterval(autoplayTimer);
      window.clearTimeout(resumeTimer);
      autoplayTimer = null;
      resumeTimer = null;
    }

    function updateDots() {
      $$("button", dotsWrap).forEach((dot, index) => {
        const active = index === current;
        dot.setAttribute("aria-current", active ? "true" : "false");
      });
    }

    function getSlides() {
      return $$(".auto-gallery-slide", track);
    }

    function getLoopMetrics() {
      const slides = getSlides();
      const stride = slideCount > 1 && slides.length > 1
        ? slides[1].offsetLeft - slides[0].offsetLeft
        : 0;
      return {
        slides,
        lowerBound: slides[0]?.offsetLeft ?? 0,
        upperBound: slides[slideCount + 1]?.offsetLeft ?? 0,
        cycleWidth: stride * slideCount
      };
    }

    function jumpToRenderedSlide(index) {
      const slides = getSlides();
      currentRendered = index;
      current = renderedToLogical(index);
      track.scrollTo({
        left: slides[currentRendered].offsetLeft,
        behavior: "auto"
      });
      updateDots();
    }

    function normalizeLoopPosition() {
      if (slideCount <= 1) return;
      const { lowerBound, upperBound, cycleWidth } = getLoopMetrics();
      if (!cycleWidth) return;
      if (track.scrollLeft <= lowerBound) {
        track.scrollLeft += cycleWidth;
        currentRendered = slideCount;
        current = slideCount - 1;
      } else if (track.scrollLeft >= upperBound) {
        track.scrollLeft -= cycleWidth;
        currentRendered = 1;
        current = 0;
      }
      updateDots();
    }

    function syncCurrentFromScroll() {
      const slides = getSlides();
      if (!slides.length) return;
      const viewportCenter = track.scrollLeft + (track.clientWidth / 2);
      const nearest = slides.reduce((best, slide, index) => {
        const slideCenter = slide.offsetLeft + (slide.offsetWidth / 2);
        const distance = Math.abs(viewportCenter - slideCenter);
        return distance < best.distance ? { index, distance } : best;
      }, { index: currentRendered, distance: Number.POSITIVE_INFINITY });
      const logical = renderedToLogical(nearest.index);
      if (nearest.index !== currentRendered || logical !== current) {
        currentRendered = nearest.index;
        current = logical;
        updateDots();
      }
    }

    function goToRenderedSlide(index, behavior = "smooth") {
      const slides = getSlides();
      const targetIndex = Math.max(0, Math.min(index, slides.length - 1));
      currentRendered = targetIndex;
      current = renderedToLogical(targetIndex);
      scrollingByCode = true;
      track.scrollTo({
        left: slides[currentRendered].offsetLeft,
        behavior: reducedMotion.matches ? "auto" : behavior
      });
      updateDots();
      window.setTimeout(() => {
        scrollingByCode = false;
        normalizeLoopPosition();
      }, slideSettleDelay);
    }

    function pauseAutoplay() {
      clearTimers();
    }

    function startAutoplay() {
      if (!autoplayEnabled || reducedMotion.matches || document.hidden || userInteracting || slideCount <= 1) return;
      window.clearInterval(autoplayTimer);
      autoplayTimer = window.setInterval(() => {
        if (document.hidden || userInteracting) return;
        goToRenderedSlide(currentRendered + 1);
      }, Number.isFinite(autoplayInterval) ? autoplayInterval : 4800);
    }

    function scheduleResume() {
      if (!autoplayEnabled || reducedMotion.matches) return;
      window.clearTimeout(resumeTimer);
      resumeTimer = window.setTimeout(startAutoplay, interactionResumeDelay);
    }

    originalSlides.forEach((_, index) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.setAttribute("aria-label", `Go to slide ${index + 1}`);
      dot.addEventListener("click", () => {
        pauseAutoplay();
        goToRenderedSlide(index + 1);
        scheduleResume();
      });
      dotsWrap.appendChild(dot);
    });

    prevBtn?.addEventListener("click", () => {
      pauseAutoplay();
      goToRenderedSlide(currentRendered - 1);
      scheduleResume();
    });

    nextBtn?.addEventListener("click", () => {
      pauseAutoplay();
      goToRenderedSlide(currentRendered + 1);
      scheduleResume();
    });

    gallery.addEventListener("mouseenter", pauseAutoplay);
    gallery.addEventListener("mouseleave", scheduleResume);
    gallery.addEventListener("focusin", pauseAutoplay);
    gallery.addEventListener("focusout", scheduleResume);
    gallery.addEventListener("pointerdown", () => {
      userInteracting = true;
      pauseAutoplay();
    }, { passive: true });
    gallery.addEventListener("pointerup", () => {
      userInteracting = false;
      scheduleResume();
    }, { passive: true });
    gallery.addEventListener("pointercancel", () => {
      userInteracting = false;
      scheduleResume();
    }, { passive: true });
    gallery.addEventListener("touchstart", () => {
      userInteracting = true;
      pauseAutoplay();
    }, { passive: true });
    gallery.addEventListener("touchend", () => {
      userInteracting = false;
      scheduleResume();
    }, { passive: true });

    let scrollTimer = null;
    track.addEventListener("scroll", () => {
      if (!getSlides().length) return;
      if (!scrollingByCode && !userInteracting) {
        pauseAutoplay();
        scheduleResume();
      }
      window.clearTimeout(scrollTimer);
      scrollTimer = window.setTimeout(() => {
        normalizeLoopPosition();
        syncCurrentFromScroll();
      }, 120);
    }, { passive: true });

    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        pauseAutoplay();
      } else {
        scheduleResume();
      }
    });

    reducedMotion.addEventListener?.("change", () => {
      pauseAutoplay();
      if (!reducedMotion.matches) startAutoplay();
    });

    jumpToRenderedSlide(currentRendered);
    startAutoplay();
    gallery.dataset.galleryReady = "true";
  });
}

function initLogoSplash() {
  const splash = $("#logoSplash");
  if (!splash) return;

  const storageKey = "sashtiLogoSplashSeen";
  let alreadySeen = false;
  try {
    alreadySeen = sessionStorage.getItem(storageKey) === "true";
    if (!alreadySeen) sessionStorage.setItem(storageKey, "true");
  } catch (error) {
    alreadySeen = false;
  }

  if (alreadySeen) {
    splash.remove();
    return;
  }

  const video = $(".logo-splash-video", splash);
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let closed = false;
  let closeTimer = null;

  function closeSplash(delay = 0) {
    window.clearTimeout(closeTimer);
    closeTimer = window.setTimeout(() => {
      if (closed) return;
      closed = true;
      video?.pause();
      document.body.classList.remove("logo-splash-active");
      splash.classList.add("is-hiding");
      window.setTimeout(() => {
        splash.classList.add("is-clearing");
        window.setTimeout(() => splash.remove(), reducedMotion ? 0 : 160);
      }, reducedMotion ? 0 : 90);
    }, delay);
  }

  splash.hidden = false;
  document.body.classList.add("logo-splash-active");

  if (video) {
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    if (video.readyState >= 2) splash.classList.add("video-ready");
    video.addEventListener("loadeddata", () => splash.classList.add("video-ready"), { once:true });
    video.addEventListener("canplay", () => splash.classList.add("video-ready"), { once:true });
    video.addEventListener("playing", () => splash.classList.add("video-ready"), { once:true });
    video.addEventListener("error", () => closeSplash(1100), { once:true, capture:true });
  }

  if (reducedMotion) {
    video?.removeAttribute("autoplay");
    video?.pause();
    closeSplash(700);
    return;
  }

  const playPromise = video?.play();
  if (playPromise && typeof playPromise.catch === "function") {
    playPromise.catch(() => closeSplash(900));
  }

  closeSplash(1500);
}

function initIdleLogoSaver() {
  console.info("[IdleSaver] initialized");

  const saver = document.getElementById("idleLogoSaver");
  if (!saver) {
    console.warn("[IdleSaver] overlay not found");
    return;
  }

  if (window.__idleLogoSaverCleanup) {
    window.__idleLogoSaverCleanup();
  }

  const IDLE_SAVER_TEST_MODE = false;
  const IDLE_SAVER_DESKTOP_DELAY = IDLE_SAVER_TEST_MODE ? 5000 : 60000;
  const IDLE_SAVER_MOBILE_DELAY = IDLE_SAVER_TEST_MODE ? 7000 : 75000;
  const IDLE_SAVER_MAX_VISIBLE = 12000;
  const SESSION_LIMIT = 2;
  const COUNT_KEY = "sashtiIdleSaverCount";

  let idleTimer = null;
  let hideTimer = null;
  let isVisible = false;
  const video = saver.querySelector("video");

  const isMobile = () => window.matchMedia("(max-width: 768px)").matches;
  const delay = () => isMobile() ? IDLE_SAVER_MOBILE_DELAY : IDLE_SAVER_DESKTOP_DELAY;
  const prefersReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (video) {
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.loop = true;
    video.setAttribute("loop", "");
    video.addEventListener("loadeddata", () => saver.classList.remove("video-failed"));
    video.addEventListener("error", () => saver.classList.add("video-failed"));
  } else {
    saver.classList.add("video-failed");
  }

  function getCount() {
    return Number(sessionStorage.getItem(COUNT_KEY) || "0");
  }

  function setCount(value) {
    sessionStorage.setItem(COUNT_KEY, String(value));
  }

  function isActuallyVisible(el) {
    if (!el) return false;
    const styles = window.getComputedStyle(el);
    return styles.display !== "none" && styles.visibility !== "hidden" && Number(styles.opacity) !== 0;
  }

  function hasActiveBlockingUi() {
    const selectors = [
      "#bookingSheet[aria-hidden='false']",
      "#branchActionSheet[aria-hidden='false']",
      "#branchSelector[aria-hidden='false']",
      ".booking-sheet.open",
      ".booking-sheet.is-open",
      ".branch-action-sheet.open",
      ".branch-action-sheet.is-open",
      ".branch-selector.open",
      ".branch-selector.is-open",
      "[role='dialog'][aria-hidden='false']",
      "dialog[open]"
    ];

    return selectors.some(selector => isActuallyVisible(document.querySelector(selector)));
  }

  function isTypingTarget(target) {
    if (!target) return false;
    const tag = target.tagName;
    return tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || target.isContentEditable;
  }

  function canShow() {
    let blockedReason = "";
    if (document.hidden) blockedReason = "document hidden";
    else if (getCount() >= SESSION_LIMIT) blockedReason = "session limit";
    else if (hasActiveBlockingUi()) blockedReason = "active blocking ui";
    else if (isTypingTarget(document.activeElement)) blockedReason = "typing target focused";

    if (blockedReason) {
      console.info("[IdleSaver] blocked", blockedReason);
      console.info("[IdleSaver] canShow", false);
      return false;
    }
    console.info("[IdleSaver] canShow", true);
    return true;
  }

  function show() {
    if (!canShow()) {
      restart();
      return;
    }

    console.info("[IdleSaver] showing");
    isVisible = true;
    setCount(getCount() + 1);
    saver.classList.add("is-visible");
    saver.setAttribute("aria-hidden", "false");

    if (video && !prefersReducedMotion()) {
      video.muted = true;
      video.defaultMuted = true;
      video.playsInline = true;
      video.loop = true;
      video.setAttribute("loop", "");
      try {
        video.currentTime = 0;
      } catch (error) {
        // Metadata may not be ready yet; playback can still start.
      }
      video.play().catch(() => {
        console.warn("[IdleSaver] video play failed");
        saver.classList.add("video-failed");
      });
    } else if (prefersReducedMotion()) {
      saver.classList.add("video-failed");
    }

    clearTimeout(hideTimer);
    hideTimer = setTimeout(hide, IDLE_SAVER_MAX_VISIBLE);
  }

  function hide() {
    if (!isVisible) return;
    console.info("[IdleSaver] hiding");
    isVisible = false;
    saver.classList.remove("is-visible");
    saver.setAttribute("aria-hidden", "true");

    if (video) video.pause();

    clearTimeout(hideTimer);
    restart();
  }

  function restart() {
    clearTimeout(idleTimer);
    idleTimer = setTimeout(show, delay());
    console.info("[IdleSaver] timer started", delay());
  }

  function activity(event) {
    if (event && isTypingTarget(event.target)) {
      restart();
      return;
    }
    hide();
    restart();
  }

  const activityEvents = ["mousemove", "mousedown", "scroll", "touchstart", "touchmove", "pointerdown", "pointermove", "keydown", "click", "focusin", "input"];
  const listenerOptions = { passive:true };
  activityEvents.forEach(eventName => {
    window.addEventListener(eventName, activity, listenerOptions);
  });

  const onVisibilityChange = () => {
    if (document.hidden) {
      hide();
      clearTimeout(idleTimer);
    } else {
      restart();
    }
  };
  document.addEventListener("visibilitychange", onVisibilityChange);

  window.__idleLogoSaverCleanup = function () {
    clearTimeout(idleTimer);
    clearTimeout(hideTimer);
    activityEvents.forEach(eventName => {
      window.removeEventListener(eventName, activity, listenerOptions);
    });
    document.removeEventListener("visibilitychange", onVisibilityChange);
  };

  window.showIdleLogoSaverTest = function () {
    sessionStorage.setItem(COUNT_KEY, "0");
    if (!saver) {
      console.warn("[IdleSaver] overlay not found");
      return;
    }
    saver.classList.add("is-visible");
    saver.setAttribute("aria-hidden", "false");
    isVisible = true;

    if (video && !prefersReducedMotion()) {
      video.muted = true;
      video.defaultMuted = true;
      video.playsInline = true;
      video.loop = true;
      video.setAttribute("loop", "");
      try {
        video.currentTime = 0;
      } catch (error) {
        // Metadata may not be ready yet; playback can still start.
      }
      video.play().catch(() => console.warn("[IdleSaver] video play failed"));
    } else if (prefersReducedMotion()) {
      saver.classList.add("video-failed");
    }

    console.info("[IdleSaver] manual test shown");
  };

  restart();

  if (new URLSearchParams(window.location.search).get("idleTest") === "1") {
    setTimeout(() => window.showIdleLogoSaverTest?.(), 2000);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initLogoSplash();
  hydrateIcons();
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

  document.addEventListener("click", e => {
    const trigger = e.target.closest("[data-open-booking]");
    if (!trigger) return;
    const p = trigger.dataset.problemValue;
    if (p) updateQuickResult(p, false);
    openSheet();
  });

  document.addEventListener("click", e => {
    const trigger = e.target.closest("[data-branch-action]");
    if (!trigger) return;
    e.preventDefault();
    const p = trigger.dataset.problemValue || "";
    if (p) updateQuickResult(p, false);
    openBranchActionSheet(trigger.dataset.branchAction, p);
  });

  $$("[data-branch-choice]").forEach(button => {
    button.addEventListener("click", () => runBranchAction(button.dataset.branchChoice));
  });

  $$("[data-close-booking]").forEach(el => el.addEventListener("click", closeSheet));
  $$("[data-close-branch-action]").forEach(el => el.addEventListener("click", closeBranchActionSheet));
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      closeSheet();
      closeBranchActionSheet();
    }
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

  getInstallButtons().forEach(button => {
    button.addEventListener("click", promptInstall);
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
      `Hello Sri Sashti Physiotherapy Clinic,%0A%0AI want appointment for ${encodeURIComponent(problem)}.%0APreferred branch: ${encodeURIComponent(branch)}.%0A%0A` +
      `Name: ${encodeURIComponent(name)}%0A` +
      `Mobile: ${encodeURIComponent(phone)}%0A` +
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
  updateQuickResult("Back Pain Care", false);
  updateInstallButtons();
  initAutoGalleries();
  initIdleLogoSaver();

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/service-worker.js").catch(console.error);
  }
});

window.addEventListener("beforeinstallprompt", event => {
  event.preventDefault();
  deferredInstallPrompt = event;
  updateInstallButtons();
});

window.addEventListener("appinstalled", () => {
  deferredInstallPrompt = null;
  updateInstallButtons();
});
