
const translations = {
  fr: {
    nav_home: "Accueil",
    nav_festival: "SKR Festival",
    nav_sponsor: "Sponsor",
    nav_exposant: "Exposant",
    nav_equipe: "Équipe",
    nav_budget: "Budget",
    nav_moodboard: "Moodboard",
    nav_contact: "Contact",
    home_title: "Accueil",
    home_content: "Contenu à remplir...",
    festival_title: "SKR Festival",
    festival_content: "Contenu à remplir...",
    sponsor_title: "Sponsor",
    sponsor_content: "Contenu à remplir...",
    exposant_title: "Exposant",
    exposant_content: "Contenu à remplir...",
    equipe_title: "Équipe",
    equipe_content: "Contenu à remplir...",
    budget_title: "Budget",
    budget_content: "Contenu à remplir...",
    moodboard_title: "Moodboard",
    moodboard_content: "Contenu à remplir...",
    contact_title: "Contact",
    contact_content: "Contenu à remplir...",
    legal_title: "Mentions légales",
    legal_content: "Contenu à remplir...",
    footer_legal: "Mentions légales"
  },
  en: {
    nav_home: "Home",
    nav_festival: "SKR Festival",
    nav_sponsor: "Sponsor",
    nav_exposant: "Exhibitor",
    nav_equipe: "Team",
    nav_budget: "Budget",
    nav_moodboard: "Moodboard",
    nav_contact: "Contact",
    home_title: "Home",
    home_content: "Content to be added...",
    festival_title: "SKR Festival",
    festival_content: "Content to be added...",
    sponsor_title: "Sponsor",
    sponsor_content: "Content to be added...",
    exposant_title: "Exhibitor",
    exposant_content: "Content to be added...",
    equipe_title: "Team",
    equipe_content: "Content to be added...",
    budget_title: "Budget",
    budget_content: "Content to be added...",
    moodboard_title: "Moodboard",
    moodboard_content: "Content to be added...",
    contact_title: "Contact",
    contact_content: "Content to be added...",
    legal_title: "Legal Notice",
    legal_content: "Content to be added...",
    footer_legal: "Legal Notice"
  },
  ko: {
    nav_home: "홈",
    nav_festival: "SKR 페스티벌",
    nav_sponsor: "스폰서",
    nav_exposant: "출전자",
    nav_equipe: "팀",
    nav_budget: "예산",
    nav_moodboard: "무드보드",
    nav_contact: "연락처",
    home_title: "홈",
    home_content: "내용 준비 중...",
    festival_title: "SKR 페스티벌",
    festival_content: "내용 준비 중...",
    sponsor_title: "스폰서",
    sponsor_content: "내용 준비 중...",
    exposant_title: "출전자",
    exposant_content: "내용 준비 중...",
    equipe_title: "팀",
    equipe_content: "내용 준비 중...",
    budget_title: "예산",
    budget_content: "내용 준비 중...",
    moodboard_title: "무드보드",
    moodboard_content: "내용 준비 중...",
    contact_title: "연락처",
    contact_content: "내용 준비 중...",
    legal_title: "법적 고지",
    legal_content: "내용 준비 중...",
    footer_legal: "법적 고지"
  }
};

function setLanguage(lang) {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

function toggleMenu() {
  const navList = document.querySelector("nav ul");
  navList.classList.toggle("show");
}
