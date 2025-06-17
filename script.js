
const translations = {
  fr: {
    accueil: "Accueil",
    skr: "SKR Festival",
    sponsors: "Sponsors",
    exposants: "Exposants",
    equipe: "Équipe",
    budget: "Budget",
    moodboard: "Moodboard",
    contact: "Contact"
  },
  en: {
    accueil: "Home",
    skr: "SKR Festival",
    sponsors: "Sponsors",
    exposants: "Exhibitors",
    equipe: "Team",
    budget: "Budget",
    moodboard: "Moodboard",
    contact: "Contact"
  },
  ko: {
    accueil: "홈",
    skr: "SKR 페스티벌",
    sponsors: "스폰서",
    exposants: "출전자",
    equipe: "팀",
    budget: "예산",
    moodboard: "무드보드",
    contact: "연락처"
  }
};

function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = translations[lang][key];
  });
}
