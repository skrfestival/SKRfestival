// Fonction pour initialiser un carrousel spécifique
function initCarousel(carouselSelector, interval = 3000) {
  const carousel = document.querySelector(carouselSelector);
  if (!carousel) return;

  const images = carousel.querySelectorAll(".carousel-images img");
  const dots = carousel.querySelectorAll(".carousel-dots .dot");
  const btnPrev = carousel.querySelector(".carousel-btn.prev");
  const btnNext = carousel.querySelector(".carousel-btn.next");

  let currentIndex = 0;
  let autoplay;

  function showSlide(index) {
    if (index >= images.length) index = 0;
    if (index < 0) index = images.length - 1;

    carousel.querySelector(".carousel-images").style.transform = `translateX(-${index * 100}%)`;

    dots.forEach(dot => dot.classList.remove("active"));
    if (dots[index]) dots[index].classList.add("active");

    currentIndex = index;
  }

  function nextSlide() {
    showSlide(currentIndex + 1);
  }

  function prevSlide() {
    showSlide(currentIndex - 1);
  }

  function startAutoplay() {
    autoplay = setInterval(nextSlide, interval);
  }

  function stopAutoplay() {
    clearInterval(autoplay);
  }

  // Event listeners
  btnNext?.addEventListener("click", () => {
    nextSlide();
    stopAutoplay();
    startAutoplay();
  });

  btnPrev?.addEventListener("click", () => {
    prevSlide();
    stopAutoplay();
    startAutoplay();
  });

  dots.forEach((dot, i) =>
    dot.addEventListener("click", () => {
      showSlide(i);
      stopAutoplay();
      startAutoplay();
    })
  );

  carousel.addEventListener("mouseenter", stopAutoplay);
  carousel.addEventListener("mouseleave", startAutoplay);

  // Start
  showSlide(0);
  startAutoplay();
}

// Initialise les deux carrousels
document.addEventListener("DOMContentLoaded", () => {
  initCarousel(".carousel-logo", 3500);
  initCarousel(".carousel-designers", 4000);
});
