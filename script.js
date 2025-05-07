// Auto-scroll slider
const slider = document.querySelector('.slider-container');
let scrollInterval = setInterval(() => {
  slider.scrollBy({ left: 220, behavior: 'smooth' });
  if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
    slider.scrollTo({ left: 0, behavior: 'smooth' });
  }
}, 3000);

// Bubble animation generator
const bubbleContainer = document.createElement('div');
bubbleContainer.classList.add('bubble-container');
document.body.appendChild(bubbleContainer);

function createBubble() {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');
  const size = Math.random() * 20 + 10;
  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;
  bubble.style.left = `${Math.random() * 100}%`;
  bubble.style.animationDuration = `${5 + Math.random() * 5}s`;
  bubbleContainer.appendChild(bubble);

  setTimeout(() => {
    bubble.remove();
  }, 10000);
}

setInterval(createBubble, 500);

// Create bubble effect in specific sections (About, Visi Misi)
function createSectionBubble(container) {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');
  const size = Math.random() * 20 + 10;
  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;
  bubble.style.left = `${Math.random() * 100}%`;
  bubble.style.animationDuration = `${5 + Math.random() * 5}s`;
  container.appendChild(bubble);

  setTimeout(() => {
    bubble.remove();
  }, 10000);
}

// Add bubbles to specific sections
const aboutBubbleContainer = document.querySelector('#about .bubble-container-section');
const visiMisiBubbleContainer = document.querySelector('#visi-misi .bubble-container-section');

// Create bubbles every 500ms for each section
setInterval(() => {
  createSectionBubble(aboutBubbleContainer);
  createSectionBubble(visiMisiBubbleContainer);
}, 500);

document.addEventListener('DOMContentLoaded', function () {
  const whatsappButton = document.getElementById('whatsapp-button');
  whatsappButton.style.opacity = 0;  // Mulai dengan transparan

  // Efek animasi muncul
  setTimeout(() => {
    whatsappButton.style.transition = "opacity 1s ease-in";
    whatsappButton.style.opacity = 1;  // Menjadi terlihat setelah 1 detik
  }, 500); // Menunggu setengah detik sebelum animasi dimulai
});
