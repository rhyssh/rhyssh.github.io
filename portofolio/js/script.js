const pp = document.getElementById('pp');
const textHero = document.getElementById('text-hero');
const navbar = document.getElementById('navbar');
const statusi = document.getElementsByClassName('name-1');
console.log(pp);

document.addEventListener('DOMContentLoaded', function () {
    pp.classList.add('animate__animated', 'animate__fadeInRight');
    textHero.classList.add('animate__animated', 'animate__fadeInLeft');
    navbar.classList.add('animate__animated', 'animate__fadeInDown');

});
