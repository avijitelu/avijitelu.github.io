const mainNavbar = document.querySelector('.main-navbar');
const scrollHeight = 65;

function navbarBackgroundHandler(event) {
    if(this.scrollY > scrollHeight) {
        mainNavbar.style.backgroundColor = '#292929';
    } else {
        mainNavbar.style.backgroundColor = 'transparent';
    }
}

window.addEventListener('scroll', navbarBackgroundHandler);


const navbarBtn = document.querySelector('.navbar__btn');
const navbarNav = document.querySelector('.navbar__nav');

function navbarBtnHandler() {
    navbarNav.classList.toggle('show');
}

navbarBtn.addEventListener('click', navbarBtnHandler);