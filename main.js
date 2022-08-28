// Toggle submenu email
const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

navbarEmail.addEventListener('click', toggleSubMenuEmail);

function toggleSubMenuEmail() {
   desktopMenu.classList.toggle('inactive');
}
