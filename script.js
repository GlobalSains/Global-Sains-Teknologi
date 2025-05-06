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

// Menambahkan event listener untuk scroll
window.addEventListener('scroll', fadeInOnScroll);

// Memastikan elemen-elemen fade-in muncul saat halaman dimuat
document.addEventListener('DOMContentLoaded', fadeInOnScroll);