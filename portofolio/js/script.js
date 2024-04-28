const pp = document.getElementById('pp');
const textHero = document.getElementById('text-hero');
const navbar = document.getElementById('navbar');
const statusi = document.getElementsByClassName('name-1')
const hamburger = document.getElementById('hamburger-icon')
const hamburgerMenu = document.getElementById('hamburger-menu')
const menuMobile = document.getElementById('menu-mobile');
console.log(pp);

document.addEventListener('DOMContentLoaded', function () {
    pp.classList.add('animate__animated', 'animate__fadeInRight');
    textHero.classList.add('animate__animated', 'animate__fadeInLeft');
    navbar.classList.add('animate__animated', 'animate__fadeInDown');

});

hamburger.addEventListener('click', () => {
    if (hamburger.getAttribute('src') === 'public/hamburger.svg') {
        hamburger.classList.add('animate__animated', 'animate__rotateIn')
        hamburger.setAttribute('src', 'public/close.svg');
        setTimeout(() => {
            hamburger.classList.remove('animate__animated', 'animate__rotateIn')
        }, 800);
        menuMobile.classList.remove('translate-x-full');
        menuMobile.classList.remove('invisible');
    } else {
        menuMobile.classList.add('translate-x-full');
        setTimeout(() => {
            hamburger.classList.add('animate__animated', 'animate__rotateInDownLeft')
            hamburger.setAttribute('src', 'public/hamburger.svg');
            menuMobile.classList.add('invisible');

        }, 100);
        setTimeout(() => {
            hamburger.classList.remove('animate__animated', 'animate__rotateInDownLeft')
        }, 800);


        // hamburger.classList.add('animate__animated', 'animate__rotateOut')

    }
});