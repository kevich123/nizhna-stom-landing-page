// Основні скрипти сайту
// Після завантаження DOM ініціалізуємо навігацію та слайдер
document.addEventListener('DOMContentLoaded', () => {
  /* ======= Бургер‑меню ======= */
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navLinks.classList.toggle('open');
    });
  }

  /* ======= Слайдер галереї ======= */
  const slidesContainer = document.querySelector('.slides');
  const slides = document.querySelectorAll('.slide');
  const nextBtn = document.querySelector('.slider-btn.next');
  const prevBtn = document.querySelector('.slider-btn.prev');
  let currentSlide = 0;

  // Функція для оновлення положення слайдів
  function updateSlider() {
    const offset = -currentSlide * 100;
    if (slidesContainer) {
      slidesContainer.style.transform = `translateX(${offset}%)`;
    }
  }

  // Перехід до наступного слайда
  function goNext() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlider();
  }

  // Перехід до попереднього слайда
  function goPrev() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlider();
  }

  // Призначаємо обробники подій на кнопки
  if (nextBtn) nextBtn.addEventListener('click', goNext);
  if (prevBtn) prevBtn.addEventListener('click', goPrev);

  // Ініціалізуємо слайдер при завантаженні
  updateSlider();
});