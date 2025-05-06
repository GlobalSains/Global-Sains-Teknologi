// Fungsi untuk menambahkan efek fade-in saat scroll
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

// Jalankan saat scroll
window.addEventListener('scroll', fadeInOnScroll);

// Jalankan saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
  fadeInOnScroll();

  // Carousel Otomatis dan Manual
  const carousel = document.querySelector('.employee-photo-carousel');
  const track = carousel.querySelector('.carousel-track');
  const images = track.querySelectorAll('.employee-image');
  const dots = carousel.querySelectorAll('.dot');

  let index = 0;
  const total = images.length;

  function updateDots() {
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  }

  function autoScroll() {
    index = (index + 1) % total;
    track.scrollTo({
      left: images[index].offsetLeft,
      behavior: 'smooth'
    });
    updateDots();
  }

  // Geser otomatis tiap 5 detik
  let interval = setInterval(autoScroll, 5000);

  // Deteksi scroll manual dan update bubble
  carousel.addEventListener('scroll', () => {
    clearInterval(interval);
    interval = setInterval(autoScroll, 5000);

    let closestIndex = 0;
    let closestDistance = Math.abs(track.scrollLeft - images[0].offsetLeft);
    for (let i = 1; i < images.length; i++) {
      const distance = Math.abs(track.scrollLeft - images[i].offsetLeft);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = i;
      }
    }
    index = closestIndex;
    updateDots();
  });

  // Dot diklik
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      index = i;
      track.scrollTo({
        left: images[index].offsetLeft,
        behavior: 'smooth'
      });
      updateDots();
    });
  });
});
