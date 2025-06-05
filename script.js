function toggleMenu() {
  const nav = document.getElementById("menu");
  nav.classList.toggle("active");
}

// Compte à rebours jusqu'au 21 février 2026
function updateCountdown() {
  const eventDate = new Date("2026-02-21T00:00:00").getTime();
  const now = new Date().getTime();
  const distance = eventDate - now;

  const countdown = document.getElementById("countdown");

  if (distance < 0) {
    countdown.innerHTML = "The festival has started!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);
