const menuButton = document.querySelector('.burger');
const menuSlide = document.querySelector('.menu-slide');
menuButton.addEventListener('click', function () {
  menuButton.classList.toggle('open-menu');
  menuSlide.classList.toggle('menu-slide-open');
});
