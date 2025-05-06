let currentSlide = 0;
const slides = document.querySelectorAll('.employee-image-wrapper');

function moveSlide(direction) {
  currentSlide += direction;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  } else if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  updateSlidePosition();
}

function updateSlidePosition() {
  const track = document.querySelector('.carousel-track');
  const offset = -currentSlide * 100; // Set the width of each image to 100% of container
  track.style.transform = `translateX(${offset}%)`;
}

// Swipe functionality on mobile devices
let startX;
let endX;

const track = document.querySelector('.carousel-track-wrapper');
track.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

track.addEventListener('touchend', (e) => {
  endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) {
    moveSlide(1); // swipe left
  } else if (endX - startX > 50) {
    moveSlide(-1); // swipe right
  }
});

// Initialize first slide
updateSlidePosition();
