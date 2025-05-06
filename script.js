// FUNGSI FADE-IN SAAT SCROLL
function fadeInOnScroll() {
  const elements = document.querySelectorAll('.fade-in');

  elements.forEach(element => {
    const position = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (position < windowHeight - 100) {
      element.classList.add('visible');
    }
  });
}

// Jalankan saat scroll dan saat halaman dimuat
window.addEventListener('scroll', fadeInOnScroll);
document.addEventListener('DOMContentLoaded', () => {
  fadeInOnScroll();

  // CAROUSEL OTOMATIS & MANUAL
  const carousel = document.querySelector('.employee-photo-carousel');
  const track = carousel.querySelector('.carousel-track');
  const images = track.querySelectorAll('.employee-image');

  let index = 0;
  const total = images.length;

  function autoScroll() {
    index = (index + 1) % total;
    track.scrollTo({
      left: images[index].offsetLeft,
      behavior: 'smooth'
    });
  }

  // Set interval scroll otomatis tiap 5 detik
  let interval = setInterval(autoScroll, 5000);

  // Reset interval jika pengguna scroll manual
  carousel.addEventListener('scroll', () => {
    clearInterval(interval);
    interval = setInterval(autoScroll, 5000);
  });
});
