function fadeInOnScroll() {
  const elements = document.querySelectorAll('.fade-in');
  elements.forEach(el => {
    const pos = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (pos < windowHeight - 100) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', fadeInOnScroll);

document.addEventListener('DOMContentLoaded', () => {
  fadeInOnScroll();

  const carousel = document.querySelector('.employee-photo-carousel');
  const track = carousel.querySelector('.carousel-track');
  const images = track.querySelectorAll('.employee-image');
  const indicators = document.querySelectorAll('.carousel-indicator');

  let index = 0;
  const total = images.length;

  function updateIndicators(currentIndex) {
    indicators.forEach((ind, i) => {
      ind.classList.toggle('active', i === currentIndex);
    });
  }

  function scrollToImage(i) {
    index = (i + total) % total;
    track.scrollTo({
      left: images[index].offsetLeft,
      behavior: 'smooth'
    });
    updateIndicators(index);
  }

  indicators.forEach((indicator, i) => {
    indicator.addEventListener('click', () => {
      scrollToImage(i);
    });
  });

  function autoScroll() {
    scrollToImage(index + 1);
  }

  let interval = setInterval(autoScroll, 5000);

  carousel.addEventListener('scroll', () => {
    clearInterval(interval);
    interval = setInterval(autoScroll, 5000);

    let closest = 0;
    let minDist = Math.abs(track.scrollLeft - images[0].offsetLeft);
    for (let i = 1; i < total; i++) {
      const dist = Math.abs(track.scrollLeft - images[i].offsetLeft);
      if (dist < minDist) {
        minDist = dist;
        closest = i;
      }
    }
    index = closest;
    updateIndicators(index);
  });
});
