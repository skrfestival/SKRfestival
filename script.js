
document.getElementById('menu-toggle').addEventListener('click', function() {
  document.getElementById('nav').classList.toggle('open');
});

// Countdown timer to Feb 21, 2026
const countdown = document.getElementById("countdown");
const eventDate = new Date("2026-02-21T00:00:00").getTime();

const interval = setInterval(() => {
  const now = new Date().getTime();
  const distance = eventDate - now;
  if (distance < 0) {
    clearInterval(interval);
    countdown.innerHTML = "SKR Festival is happening now!";
    return;
  }
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  countdown.innerHTML = `Countdown: ${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);
