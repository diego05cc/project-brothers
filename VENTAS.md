(() => {
  "use strict";

  const PLACEHOLDER_PATTERN = /^\[[A-Z0-9_ÁÉÍÓÚÑ-]+_AQUI\]$/i;
  const languageButtons = [...document.querySelectorAll("[data-language-button]")];
  const translatedElements = [...document.querySelectorAll("[data-lang]")];

  document.documentElement.classList.add("js");

  function readSavedLanguage() {
    try {
      return window.localStorage.getItem("barrio-digital-language");
    } catch {
      return null;
    }
  }

  function saveLanguage(language) {
    try {
      window.localStorage.setItem("barrio-digital-language", language);
    } catch {
      // The language selector still works when storage is unavailable.
    }
  }

  function setLanguage(language, shouldSave = true) {
    const selectedLanguage = language === "en" ? "en" : "es";

    document.documentElement.lang = selectedLanguage;
    document.documentElement.dataset.language = selectedLanguage;
    document.body.dataset.language = selectedLanguage;

    translatedElements.forEach((element) => {
      const elementLanguages = element.dataset.lang
        .split(/\s+/)
        .filter(Boolean);
      element.hidden = !elementLanguages.includes(selectedLanguage);
    });

    languageButtons.forEach((button) => {
      const isSelected = button.dataset.languageButton === selectedLanguage;
      button.setAttribute("aria-pressed", String(isSelected));
      button.classList.toggle("is-active", isSelected);
    });

    if (shouldSave) {
      saveLanguage(selectedLanguage);
    }
  }

  function isPlaceholder(value) {
    return !value || PLACEHOLDER_PATTERN.test(value.trim());
  }

  function buildContactUrl(type, rawValue) {
    const value = rawValue.trim();

    if (isPlaceholder(value)) {
      return null;
    }

    if (type === "whatsapp") {
      const digits = value.replace(/\D/g, "");
      return digits ? `https://wa.me/${digits}` : null;
    }

    if (type === "phone") {
      const phone = value.replace(/[^\d+*#,;]/g, "");
      return phone ? `tel:${phone}` : null;
    }

    if (type === "email") {
      return value.includes("@") ? `mailto:${value}` : null;
    }

    if (type === "instagram") {
      if (/^https?:\/\//i.test(value)) {
        return value;
      }

      const username = value.replace(/^@/, "");
      return username ? `https://www.instagram.com/${username}/` : null;
    }

    if (type === "website") {
      return /^https?:\/\//i.test(value) ? value : `https://${value}`;
    }

    return null;
  }

  languageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setLanguage(button.dataset.languageButton);
    });
  });

  document.querySelectorAll("[data-contact-type][data-contact-value]").forEach((link) => {
    const contactUrl = buildContactUrl(
      link.dataset.contactType,
      link.dataset.contactValue,
    );

    if (!contactUrl) {
      link.dataset.contactPending = "true";
      link.setAttribute(
        "title",
        "Este enlace se activará cuando se reemplace el marcador con información real.",
      );
      return;
    }

    link.href = contactUrl;
    link.removeAttribute("data-contact-pending");

    if (/^https?:\/\//i.test(contactUrl)) {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }
  });

  document.querySelectorAll("[data-current-year]").forEach((element) => {
    element.textContent = new Date().getFullYear();
  });

  if (languageButtons.length > 0 && translatedElements.length > 0) {
    const savedLanguage = readSavedLanguage();
    const browserLanguage = navigator.language?.toLowerCase().startsWith("en")
      ? "en"
      : "es";
    setLanguage(savedLanguage || browserLanguage, false);
  }
})();
