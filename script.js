/**
 * Saa'a / ساعة - Luxury Chronograph Landing Page
 * Fullscreen Edge-to-Edge Responsive Layout with Modern Bilingual Typography
 * Plain JavaScript (ES6+) with clear, beginner-friendly comments.
 */

// =============================================================================
// 1. DATA & CONTENT DEFINITIONS
// =============================================================================

/**
 * Translations dictionary for Arabic (ar) and English (en).
 * Keys correspond to `data-i18n` attributes in the HTML.
 */
const TRANSLATIONS = {
  ar: {
    page_title: "ساعة | Saa'a Luxury Chronographs",
    meta_desc: "ساعة - تشكيلة حصرية من ساعات الكرونوغراف الفاخرة ذات التصميم العصري والهندسة السويسرية الدقيقة.",
    brand_accent: "سـ&zwj;",
    brand_rest: "&zwj;اعة",
    feel_thrill: "عِش الإثارة",
    share_it: "شاركها",
    scroll_hint: "مرّر أو اسحب للتنقل بين الساعات",
    modal_badge: "المواصفات الملكية",
    modal_title: "إحساس الدقة المطلقة",
    modal_desc: "تجسيد للفخامة والحرفية المتقنة، حيث تلتقي دقة الساعات الميكانيكية بأعلى معايير التصميم العالمي.",
    spec_movement_lbl: "آلية الحركة",
    spec_case_lbl: "الهيكل والزجاج",
    spec_water_lbl: "مقاومة الماء",
    spec_water_val: "100 متر / 10 بار",
    spec_reserve_lbl: "احتياطي الطاقة",
    spec_reserve_val: "72 ساعة متواصلة",
    modal_reserve: "احجز نسختك الحصرية الآن",
    menu_collection: "المجموعة الفاخرة",
    menu_craft: "الحرفية والتاريخ",
    menu_boutiques: "المتاجر الحصرية",
    menu_bespoke: "التصميم المخصص",
    menu_contact: "تواصل معنا",
    menu_copy: "© 2026 ساعة. جميع الحقوق محفوظة.",
    toast_copied: "تم نسخ رابط الصفحة بنجاح!",
    toast_reserved: "شكرًا لك! تم تسجيل طلب الحجز وسيتم التواصل معك قريبًا."
  },
  en: {
    page_title: "Saa'a | Luxury Swiss Chronographs",
    meta_desc: "Saa'a - Exclusive collection of modern sport chronographs engineered with Swiss mechanical excellence.",
    brand_accent: "S",
    brand_rest: "aa'a",
    feel_thrill: "FEEL THE THRILL",
    share_it: "SHARE IT",
    scroll_hint: "Scroll or swipe to explore timepieces",
    modal_badge: "ROYAL SPECIFICATIONS",
    modal_title: "FEEL THE PRECISION",
    modal_desc: "A testament to master horology, blending mechanical complexity with ultra-refined contemporary aesthetics.",
    spec_movement_lbl: "Movement",
    spec_case_lbl: "Case & Crystal",
    spec_water_lbl: "Water Resistance",
    spec_water_val: "100m / 10 ATM",
    spec_reserve_lbl: "Power Reserve",
    spec_reserve_val: "72 Hours Continuous",
    modal_reserve: "Reserve Your Piece Today",
    menu_collection: "High Collection",
    menu_craft: "Craftsmanship & Heritage",
    menu_boutiques: "Flagship Boutiques",
    menu_bespoke: "Bespoke Horology",
    menu_contact: "Concierge Contact",
    menu_copy: "© 2026 Saa'a Timepieces. All rights reserved.",
    toast_copied: "Link copied to clipboard!",
    toast_reserved: "Thank you! Your reservation request has been received."
  }
};

/**
 * 3 Watch Products for the Slider:
 * Each item contains image, accent color, and text for both languages.
 */
const PRODUCTS = [
  {
    number: "01",
    accent: "#ff4b4b", // Reference coral red
    image: "images/watch-1.png",
    ar: {
      sub: "كل شيء",
      part1: "يدور حول",
      part2: "الوقت",
      tagline: "كرونوغراف كحلي داكن • فولاذ 42 مم • حركة أوتوماتيكية",
      specMovement: "كاليبر 4130 أوتوماتيكي سويسري",
      specCase: "فولاذ مقاوم للصدأ 316L وزجاج زفير",
      alt: "ساعة كرونوغراف هيريتدج زرقاء داكنة"
    },
    en: {
      sub: "IT'S ALL",
      part1: "ABOUT",
      part2: "TIME",
      tagline: "Deep Navy Chronograph • Steel 42mm • Automatic",
      specMovement: "In-House Calibre 4130 Automatic",
      specCase: "316L Stainless Steel & Sapphire Crystal",
      alt: "Saa'a Chrono Heritage Blue Luxury Wristwatch"
    }
  },
  {
    number: "02",
    accent: "#ff5a36", // Vibrant flame amber red
    image: "images/watch-2.png",
    ar: {
      sub: "اصنع الفارق",
      part1: "في كل",
      part2: "لحظة",
      tagline: "سيراميك داكن وذهب وردي • إصدار محدود مرقم",
      specMovement: "حركة توربيون سويسرية فائقة الدقة",
      specCase: "سيراميك أسود غير لامع وذهب وردي 18 قيراط",
      alt: "ساعة فانتوم السوداء بلمسات الذهب الوردي"
    },
    en: {
      sub: "MASTER THE",
      part1: "DARK",
      part2: "HOUR",
      tagline: "Ceramic Matte & Rose Gold • Limited Edition",
      specMovement: "Tourbillon Precision Movement",
      specCase: "Matte Black Ceramic & 18K Rose Gold",
      alt: "Saa'a Dark Phantom Ceramic and Rose Gold Watch"
    }
  },
  {
    number: "03",
    accent: "#e63946", // Deep ruby red
    image: "images/watch-3.png",
    ar: {
      sub: "ما وراء",
      part1: "حدود",
      part2: "الإتقان",
      tagline: "فولاذ مصقول أحادي • إطار تاكيميتر دقيق",
      specMovement: "كرونوغراف عالي التردد 36,000 ذبذبة/ساعة",
      specCase: "تيتانيوم وفولاذ وزجاج مضاد للانعكاس",
      alt: "ساعة تيتانيوم وفولاذ كلاسيك مصقول"
    },
    en: {
      sub: "BEYOND THE",
      part1: "PURE",
      part2: "MOTION",
      tagline: "Brushed Monolith • Tachymeter Precision Bezel",
      specMovement: "High-Frequency Chronograph 36,000 VpH",
      specCase: "Titanium & Stainless Steel, AR Crystal",
      alt: "Saa'a Titanium Steel Classic Chronograph"
    }
  }
];

// =============================================================================
// 2. STATE MANAGEMENT
// =============================================================================

let currentLang = "ar"; // Default language: Arabic
let currentSlide = 0;
let isAnimating = false;
let wheelCooldown = false;

// DOM Elements
const htmlEl = document.documentElement;
const langToggle = document.getElementById("langToggle");
const langPill = document.getElementById("langPill");
const logoAccent = document.getElementById("logoAccent");
const logoText = document.getElementById("logoText");

const slideNumber = document.getElementById("slideNumber");
const headingSub = document.getElementById("headingSub");
const headingPart1 = document.getElementById("headingPart1");
const headingPart2 = document.getElementById("headingPart2");
const productTagline = document.getElementById("productTagline");
const watchImage = document.getElementById("watchImage");

const progressTrack = document.getElementById("progressTrack");
const progressFill = document.getElementById("progressFill");
const progressSteps = document.querySelectorAll(".progress-step");
const prevSlideBtn = document.getElementById("prevSlideBtn");
const nextSlideBtn = document.getElementById("nextSlideBtn");

const thrillBtn = document.getElementById("thrillBtn");
const shareBtn = document.getElementById("shareBtn");
const thrillModal = document.getElementById("thrillModal");
const modalCloseBtn = document.getElementById("modalCloseBtn");
const modalOrderBtn = document.getElementById("modalOrderBtn");

const menuBtn = document.getElementById("menuBtn");
const menuOverlay = document.getElementById("menuOverlay");
const menuCloseBtn = document.getElementById("menuCloseBtn");
const toastNotification = document.getElementById("toastNotification");
const toastMsg = document.getElementById("toastMsg");

// Specs in modal
const specMovement = document.getElementById("specMovement");
const specCase = document.getElementById("specCase");

// =============================================================================
// 3. LANGUAGE SWITCHING & LOCAL STORAGE
// =============================================================================

/**
 * Loads previously saved language from localStorage or URL parameter (safe check).
 */
function initLanguage() {
  const urlParams = new URLSearchParams(window.location.search);
  const paramLang = urlParams.get("lang");
  const paramSlide = parseInt(urlParams.get("slide"), 10);

  let savedLang = null;
  try {
    savedLang = localStorage.getItem("saaa_lang");
  } catch (e) {
    console.warn("localStorage not available, defaulting to Arabic:", e);
  }

  // Priority: URL query param > localStorage > default "ar"
  if (paramLang === "en" || paramLang === "ar") {
    currentLang = paramLang;
  } else if (savedLang === "en" || savedLang === "ar") {
    currentLang = savedLang;
  } else {
    currentLang = "ar";
  }

  applyLanguage(currentLang, false);

  if (!isNaN(paramSlide) && paramSlide >= 0 && paramSlide < PRODUCTS.length) {
    currentSlide = paramSlide;
    renderSlideContent(currentSlide, false);
  }
}

/**
 * Applies language changes: updates dir, lang, fonts, texts, and mirrors layout.
 * @param {string} lang - 'ar' or 'en'
 * @param {boolean} animate - whether to animate elements
 */
function applyLanguage(lang, animate = true) {
  currentLang = lang;
  
  // Save to localStorage safely
  try {
    localStorage.setItem("saaa_lang", lang);
  } catch (e) {
    // Ignore storage errors in restricted contexts
  }

  // 1. Set HTML tag attributes
  htmlEl.setAttribute("lang", lang);
  htmlEl.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

  // Helper classes for sliding pill position
  if (lang === "en") {
    htmlEl.classList.add("lang-en-active");
    htmlEl.classList.remove("lang-ar-active");
  } else {
    htmlEl.classList.add("lang-ar-active");
    htmlEl.classList.remove("lang-en-active");
  }

  // 2. Update Brand Logo (using innerHTML for Arabic zero-width joiner)
  const dict = TRANSLATIONS[lang];
  logoAccent.innerHTML = dict.brand_accent;
  logoText.innerHTML = dict.brand_rest;

  // 3. Update Document Title and Meta Description
  document.title = dict.page_title;
  const metaDescEl = document.querySelector('meta[name="description"]');
  if (metaDescEl) {
    metaDescEl.setAttribute("content", dict.meta_desc);
  }

  // 4. Update all static translatable elements with data-i18n
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // 5. Update active slide content for the new language
  renderSlideContent(currentSlide, animate);
}

/**
 * Toggles between Arabic and English when clicking the pill switch.
 */
function toggleLanguage() {
  const newLang = currentLang === "ar" ? "en" : "ar";
  applyLanguage(newLang, true);
}

// =============================================================================
// 4. PRODUCT SLIDER ENGINE
// =============================================================================

/**
 * Updates UI elements for a specific slide index.
 * @param {number} index - 0, 1, or 2
 * @param {boolean} animate - whether to trigger entrance/exit animations
 */
function renderSlideContent(index, animate = true) {
  const product = PRODUCTS[index];
  const langData = product[currentLang];

  // 1. Update dynamic theme accent color in CSS
  document.documentElement.style.setProperty("--product-accent", product.accent);

  // 2. Animate and update slide number
  if (animate) {
    slideNumber.style.opacity = "0";
    slideNumber.style.transform = "translateY(15px)";
    setTimeout(() => {
      slideNumber.textContent = product.number;
      slideNumber.style.opacity = "1";
      slideNumber.style.transform = "translateY(0)";
    }, 200);
  } else {
    slideNumber.textContent = product.number;
  }

  // 3. Animate headings & taglines
  if (animate) {
    headingSub.style.opacity = "0";
    headingPart1.style.opacity = "0";
    headingPart2.style.opacity = "0";
    productTagline.style.opacity = "0";

    setTimeout(() => {
      headingSub.textContent = langData.sub;
      headingPart1.textContent = langData.part1;
      headingPart2.textContent = langData.part2;
      productTagline.textContent = langData.tagline;

      headingSub.style.opacity = "1";
      headingPart1.style.opacity = "1";
      headingPart2.style.opacity = "1";
      productTagline.style.opacity = "1";
    }, 220);
  } else {
    headingSub.textContent = langData.sub;
    headingPart1.textContent = langData.part1;
    headingPart2.textContent = langData.part2;
    productTagline.textContent = langData.tagline;
  }

  // 4. Update modal specs for current product
  if (specMovement) specMovement.textContent = langData.specMovement;
  if (specCase) specCase.textContent = langData.specCase;

  // 5. Animate watch image transition (rotation & scale)
  if (animate) {
    watchImage.classList.remove("watch-active", "watch-entering");
    watchImage.classList.add("watch-leaving");

    setTimeout(() => {
      watchImage.src = product.image;
      watchImage.alt = langData.alt;
      watchImage.classList.remove("watch-leaving");
      watchImage.classList.add("watch-entering");

      // Force reflow for CSS transition to trigger reliably
      void watchImage.offsetWidth;

      watchImage.classList.remove("watch-entering");
      watchImage.classList.add("watch-active");
    }, 280);
  } else {
    watchImage.src = product.image;
    watchImage.alt = langData.alt;
  }

  // 6. Update progress bar track & fill
  updateProgressBar(index);
}

/**
 * Updates the progress indicator position and active steps across layout modes.
 * @param {number} index - current slide index
 */
function updateProgressBar(index) {
  // Update step buttons
  progressSteps.forEach((step, idx) => {
    if (idx === index) {
      step.classList.add("active");
      step.setAttribute("aria-current", "true");
    } else {
      step.classList.remove("active");
      step.removeAttribute("aria-current");
    }
  });

  if (!progressTrack || !progressFill) return;

  const offset = index * 33.33;
  // Dynamic layout check: Is track oriented vertically or horizontally?
  const isVertical = progressTrack.offsetHeight > progressTrack.offsetWidth;

  if (isVertical) {
    progressFill.style.left = "0";
    progressFill.style.right = "auto";
    progressFill.style.width = "100%";
    progressFill.style.height = "33.33%";
    progressFill.style.top = offset + "%";
  } else {
    progressFill.style.top = "0";
    progressFill.style.height = "100%";
    progressFill.style.width = "33.33%";
    const isRTL = htmlEl.getAttribute("dir") === "rtl";
    if (isRTL) {
      progressFill.style.right = offset + "%";
      progressFill.style.left = "auto";
    } else {
      progressFill.style.left = offset + "%";
      progressFill.style.right = "auto";
    }
  }
}

/**
 * Switches to a target slide index with animation throttling.
 * @param {number} targetIndex - slide to navigate to
 */
function goToSlide(targetIndex) {
  if (isAnimating) return;
  
  // Wrap around slider (0 -> 1 -> 2 -> 0)
  if (targetIndex < 0) {
    targetIndex = PRODUCTS.length - 1;
  } else if (targetIndex >= PRODUCTS.length) {
    targetIndex = 0;
  }

  if (targetIndex === currentSlide) return;

  isAnimating = true;
  currentSlide = targetIndex;
  renderSlideContent(currentSlide, true);

  setTimeout(() => {
    isAnimating = false;
  }, 600);
}

function nextSlide() {
  goToSlide(currentSlide + 1);
}

function prevSlide() {
  goToSlide(currentSlide - 1);
}

// =============================================================================
// 5. INPUT LISTENERS (WHEEL, KEYBOARD, TOUCH SWIPE)
// =============================================================================

/**
 * Mouse Wheel Navigation with Debounce Cooldown
 */
window.addEventListener("wheel", (e) => {
  // Ignore if modal or menu drawer is open
  if (!thrillModal.hasAttribute("hidden") || !menuOverlay.hasAttribute("hidden")) {
    return;
  }

  if (wheelCooldown) return;

  // Threshold to avoid sensitive trackpad noise
  if (Math.abs(e.deltaY) > 25) {
    if (e.deltaY > 0) {
      nextSlide();
    } else {
      prevSlide();
    }
    wheelCooldown = true;
    setTimeout(() => {
      wheelCooldown = false;
    }, 700);
  }
}, { passive: true });

/**
 * Keyboard Navigation (Arrow Keys)
 */
window.addEventListener("keydown", (e) => {
  // Close modals on Escape
  if (e.key === "Escape") {
    closeModal();
    closeMenu();
    return;
  }

  // Prevent arrow navigation if modal is open
  if (!thrillModal.hasAttribute("hidden") || !menuOverlay.hasAttribute("hidden")) {
    return;
  }

  const isRTL = htmlEl.getAttribute("dir") === "rtl";

  if (e.key === "ArrowDown") {
    nextSlide();
  } else if (e.key === "ArrowUp") {
    prevSlide();
  } else if (e.key === "ArrowRight") {
    // In RTL, ArrowRight moves backwards visually; in LTR, ArrowRight moves forward
    if (isRTL) {
      prevSlide();
    } else {
      nextSlide();
    }
  } else if (e.key === "ArrowLeft") {
    if (isRTL) {
      nextSlide();
    } else {
      prevSlide();
    }
  }
});

/**
 * Mobile Touch Swipe Navigation
 */
let touchStartX = 0;
let touchStartY = 0;

window.addEventListener("touchstart", (e) => {
  if (!e.changedTouches || e.changedTouches.length === 0) return;
  touchStartX = e.changedTouches[0].screenX;
  touchStartY = e.changedTouches[0].screenY;
}, { passive: true });

window.addEventListener("touchend", (e) => {
  if (!e.changedTouches || e.changedTouches.length === 0) return;
  const touchEndX = e.changedTouches[0].screenX;
  const touchEndY = e.changedTouches[0].screenY;
  
  const diffX = touchEndX - touchStartX;
  const diffY = touchEndY - touchStartY;

  // Minimum threshold for deliberate horizontal swipe (more horizontal than vertical)
  if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY)) {
    const isRTL = htmlEl.getAttribute("dir") === "rtl";
    if (diffX < 0) {
      // Swiped left
      if (isRTL) prevSlide();
      else nextSlide();
    } else {
      // Swiped right
      if (isRTL) nextSlide();
      else prevSlide();
    }
  }
}, { passive: true });

// =============================================================================
// 6. MODAL & INTERACTIVE CONTROLS
// =============================================================================

function openModal() {
  thrillModal.removeAttribute("hidden");
  modalCloseBtn.focus();
}

function closeModal() {
  thrillModal.setAttribute("hidden", "true");
  thrillBtn.focus();
}

function openMenu() {
  menuOverlay.removeAttribute("hidden");
  menuBtn.setAttribute("aria-expanded", "true");
  menuCloseBtn.focus();
}

function closeMenu() {
  menuOverlay.setAttribute("hidden", "true");
  menuBtn.setAttribute("aria-expanded", "false");
  menuBtn.focus();
}

/**
 * Displays a non-intrusive luxury toast message.
 * @param {string} message
 */
let toastTimeout = null;
function showToast(message) {
  if (toastTimeout) clearTimeout(toastTimeout);
  toastMsg.textContent = message;
  toastNotification.classList.add("show");

  toastTimeout = setTimeout(() => {
    toastNotification.classList.remove("show");
  }, 3200);
}

/**
 * Native Share or Clipboard Copy Fallback
 */
async function handleShare() {
  const shareData = {
    title: document.title,
    text: TRANSLATIONS[currentLang].meta_desc,
    url: window.location.href
  };

  if (navigator.share) {
    try {
      await navigator.share(shareData);
      return;
    } catch (err) {
      if (err.name !== "AbortError") {
        console.warn("Share failed:", err);
      }
    }
  }

  // Fallback: Copy to clipboard
  try {
    await navigator.clipboard.writeText(window.location.href);
    showToast(TRANSLATIONS[currentLang].toast_copied);
  } catch (err) {
    showToast(TRANSLATIONS[currentLang].toast_copied);
  }
}

// =============================================================================
// 7. EVENT ATTACHMENTS & INITIALIZATION
// =============================================================================

// Language Toggle
langToggle.addEventListener("click", toggleLanguage);

// Progress Steps Click
progressSteps.forEach((step) => {
  step.addEventListener("click", () => {
    const targetIdx = parseInt(step.getAttribute("data-step"), 10);
    goToSlide(targetIdx);
  });
});

// Arrow Navigation
if (prevSlideBtn) prevSlideBtn.addEventListener("click", prevSlide);
if (nextSlideBtn) nextSlideBtn.addEventListener("click", nextSlide);

// Action Buttons
thrillBtn.addEventListener("click", openModal);
shareBtn.addEventListener("click", handleShare);
modalCloseBtn.addEventListener("click", closeModal);
thrillModal.addEventListener("click", (e) => {
  if (e.target === thrillModal) closeModal();
});

modalOrderBtn.addEventListener("click", () => {
  closeModal();
  showToast(TRANSLATIONS[currentLang].toast_reserved);
});

// Menu Drawer
menuBtn.addEventListener("click", openMenu);
menuCloseBtn.addEventListener("click", closeMenu);
menuOverlay.addEventListener("click", (e) => {
  if (e.target === menuOverlay) closeMenu();
});

// Close drawer when clicking any navigation link
document.querySelectorAll(".drawer-link").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

// Window Resize Handler (Recalculate progress bar orientation)
window.addEventListener("resize", () => {
  updateProgressBar(currentSlide);
});

// Startup initialization
document.addEventListener("DOMContentLoaded", () => {
  initLanguage();
  renderSlideContent(currentSlide, false);
});
