const menuEmail = document.querySelector('.navbar-email');
const menuDesktop = document.querySelector('.desktop-menu');
const menuHamburguesa = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu');

menuHamburguesa.addEventListener('click', toggleMobile);
menuEmail.addEventListener('click', toggleDesktop);

function toggleDesktop() {
    menuDesktop.classList.toggle('inactive');
}

function toggleMobile() {
    menuMobile.classList.toggle('inactive');
}