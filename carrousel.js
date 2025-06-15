let currentSlideIndex = 0;

function showSlide(index, carouselSelector = '.carousel-images') {
  const container = document.querySelector(carouselSelector);
  if (!container) return;

  const slides = container.querySelectorAll('img');
  const dots = container.parentElement.querySelectorAll('.dot');

  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));

  currentSlideIndex = (index + slides.length) % slides.length;
  slides[currentSlideIndex].classList.add('active');
  dots[currentSlideIndex].classList.add('active');
}

function changeSlide(n) {
  const isDesigner = event.target.closest('.carousel-designers') !== null;
  const selector = isDesigner ? '.carousel-designers .carousel-images' : '.carousel-logo .carousel-images';
  showSlide(currentSlideIndex + n, selector);
}

function currentSlide(n) {
  const isDesigner = event.target.closest('.carousel-designers') !== null;
  const selector = isDesigner ? '.carousel-designers .carousel-images' : '.carousel-logo .carousel-images';
  showSlide(n, selector);
}

document.addEventListener('DOMContentLoaded', () => {
  showSlide(0, '.carousel-designers .carousel-images');
  showSlide(0, '.carousel-logo .carousel-images');
});
