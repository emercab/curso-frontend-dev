// Toggle submenu email
const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const btnMobileMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const btnShoppingCar = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

navbarEmail.addEventListener('click', toggleSubMenuEmail);
btnMobileMenu.addEventListener('click', showMobileMenu);
btnShoppingCar.addEventListener('click', toggleAside);

function toggleSubMenuEmail() {
   aside.classList.remove('show-aside')
   desktopMenu.classList.toggle('inactive');
}

function showMobileMenu() {
   aside.classList.remove('show-aside')
   mobileMenu.classList.toggle('show-mobile-menu')
}

function toggleAside() {
   desktopMenu.classList.add('inactive');
   mobileMenu.classList.remove('show-mobile-menu');
   aside.classList.toggle('show-aside')
}