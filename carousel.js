// Fonction pour initialiser un carrousel spécifique
function initCarousel(containerSelector) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  const images = container.querySelectorAll(".carousel-images img");
  const dots = container.querySelectorAll(".carousel-dots .dot");
  let index = 0;

  function showSlide(i) {
    images.forEach((img, idx) => {
      img.classList.toggle("active", idx === i);
    });
    dots.forEach((dot, idx) => {
      dot.classList.toggle("active", idx === i);
    });
    index = i;
  }

  function nextSlide() {
    showSlide((index + 1) % images.length);
  }

  container.querySelector(".prev")?.addEventListener("click", () => {
    showSlide((index - 1 + images.length) % images.length);
  });

  container.querySelector(".next")?.addEventListener("click", () => {
    nextSlide();
  });

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => showSlide(i));
  });

  // Autoplay
  setInterval(nextSlide, 4000);

  showSlide(0);
}

// Initialisation de chaque carrousel
document.addEventListener("DOMContentLoaded", () => {
  initCarousel(".carousel-logo");
  initCarousel(".carousel-designers");
});
