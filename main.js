// Toggle submenu email
const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const btnMobileMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

navbarEmail.addEventListener('click', toggleSubMenuEmail);
btnMobileMenu.addEventListener('click', showMobileMenu);

function toggleSubMenuEmail() {
   desktopMenu.classList.toggle('inactive');
}

function showMobileMenu() {
   mobileMenu.classList.toggle('show-mobile-menu')
}
