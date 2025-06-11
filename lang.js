function switchLang(lang) {
  localStorage.setItem('skr-lang', lang);
  document.querySelectorAll('.lang').forEach(el => {
    el.classList.remove('active-lang');
  });
  document.querySelectorAll('.lang-' + lang).forEach(el => {
    el.classList.add('active-lang');
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const savedLang = localStorage.getItem('skr-lang') || 'fr';
  switchLang(savedLang);
});