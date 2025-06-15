function initCarousel(selector, interval = 4000) {
  const carousel = document.querySelector(selector);
  if (!carousel) return;

  const images = carousel.querySelectorAll(".carousel-images img");
  const dots = carousel.querySelectorAll(".dot");
  const prevBtn = carousel.querySelector(".carousel-btn.prev");
  const nextBtn = carousel.querySelector(".carousel-btn.next");

  let currentIndex = 0;
  let timer;

  function showSlide(index) {
    images.forEach((img, i) => {
      img.classList.toggle("active", i === index);
      if (dots[i]) dots[i].classList.toggle("active", i === index);
    });
    currentIndex = index;
  }

  function nextSlide() {
    const nextIndex = (currentIndex + 1) % images.length;
    showSlide(nextIndex);
  }

  function startAutoplay() {
    stopAutoplay();
    timer = setInterval(nextSlide, interval);
  }

  function stopAutoplay() {
    if (timer) clearInterval(timer);
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      showSlide((currentIndex - 1 + images.length) % images.length);
      startAutoplay();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      nextSlide();
      startAutoplay();
    });
  }

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      showSlide(i);
      startAutoplay();
    });
  });

  showSlide(currentIndex);
  startAutoplay();
}

// Initialise les deux carrousels
document.addEventListener("DOMContentLoaded", () => {
  initCarousel(".carousel-designers");
  initCarousel(".carousel-logo");
});
