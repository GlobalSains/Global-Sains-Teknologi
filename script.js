// Fungsi untuk memeriksa apakah elemen terlihat di viewport
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Menambahkan kelas 'visible' ketika elemen berada di viewport
function handleScroll() {
  const elements = document.querySelectorAll('.fade-in');
  elements.forEach((element) => {
    if (isElementInViewport(element)) {
      element.classList.add('visible');
    }
  });
}

// Menambahkan event listener untuk scroll
window.addEventListener('scroll', handleScroll);

// Memanggil fungsi handleScroll saat pertama kali load halaman
window.addEventListener('load', handleScroll);
