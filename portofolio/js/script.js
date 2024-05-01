const pp = document.getElementById('pp');
const textHero = document.getElementById('text-hero');
const navbar = document.getElementById('navbar');
const statusi = document.getElementsByClassName('name-1')
const hamburger = document.getElementById('hamburger-icon')
const hamburgerMenu = document.getElementById('hamburger-menu')
const menuMobile = document.getElementById('menu-mobile');
const skillButton = document.getElementById('menu-skill')
const toolButton = document.getElementById('menu-tool')
const skillsContent = document.getElementById('skills')
const toolsContent = document.getElementById('tools')
const skillContainer = document.getElementById('skill-bungkus')
const toolContainer = document.getElementById('tool-bungkus')
let currIndex = 0
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


skillButton.addEventListener('click', function () {
    if (currIndex !== 0) {
        toolButton.classList.remove('bg-[#e6c16b42]')
        skillButton.classList.add('bg-[#e6c16b42]')

        // animasi
        toolContainer.classList.add('animate__animated', 'animate__fadeOutRightBig')


        // content
        setTimeout(() => {
            skillsContent.classList.remove('hidden')
            toolsContent.classList.add('hidden')
            toolContainer.classList.remove('animate__animated', 'animate__fadeOutRightBig')
            skillContainer.classList.add('animate__animated', 'animate__fadeInLeftBig')
        }, 90);

        // current
        currIndex = 0
    }
});

toolButton.addEventListener('click', function () {
    if (currIndex !== 1) {
        skillButton.classList.remove('bg-[#e6c16b42]')
        toolButton.classList.add('bg-[#e6c16b42]')

        // animasi
        skillContainer.classList.add('animate__animated', 'animate__fadeOutLeftBig')


        // content
        setTimeout(() => {
            toolsContent.classList.remove('hidden')
            skillsContent.classList.add('hidden')
            skillContainer.classList.remove('animate__animated', 'animate__fadeOutLeftBig')
            toolContainer.classList.add('animate__animated', 'animate__fadeInRightBig')
        }, 90);

        // curindex
        currIndex = 1
    }
});