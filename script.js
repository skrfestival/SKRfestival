
const translations = {
  fr: {
    accueil: "Quand la Corée devient une histoire à vivre, ici en France.",
    festival: "SKR Festival",
  },
  en: {
    accueil: "When Korea becomes a story to live, here in France.",
    festival: "SKR Festival",
  },
  ko: {
    accueil: "한국이 프랑스에서 살아 숨 쉬는 이야기로.",
    festival: "SKR 페스티벌",
  }
};

function setLanguage(lang) {
  document.querySelector("#accueil h1").textContent = translations[lang].accueil;
  document.querySelector("#festival h2").textContent = translations[lang].festival;
}
