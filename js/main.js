const mobileMenu = document.querySelector('[data-mobile-menu]');
const hamburgerBtn = document.querySelector('[data-hamburger-btn]');

hamburgerBtn.addEventListener('click', navToggle);

function navToggle() {
    mobileMenu.classList.toggle('visible');
    hamburgerBtn.classList.toggle('open');
    document.body.classList.toggle('no-scroll');
}