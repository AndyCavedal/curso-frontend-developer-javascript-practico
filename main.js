const menuEmail = document.querySelector('.navbar-email');
const menuDesktop = document.querySelector('.desktop-menu');
const menuHamburguesa = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu');
const shoppingCartIcon = document.querySelector('.navbar-shopping-cart');
const asideProductos = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktop);
menuHamburguesa.addEventListener('click', toggleMobile);
shoppingCartIcon.addEventListener('click', toggleAsideProductDetail);

function toggleDesktop() {
    menuDesktop.classList.toggle('inactive');
    asideProductos.classList.add('inactive');
}

function toggleMobile() {
    menuMobile.classList.toggle('inactive');
    asideProductos.classList.add('inactive');
}

function toggleAsideProductDetail() {
    asideProductos.classList.toggle('inactive');
    menuMobile.classList.add('inactive');
    menuDesktop.classList.add('inactive');
}
