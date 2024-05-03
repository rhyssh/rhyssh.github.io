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
const webButton = document.getElementById('web-button')
const designButton = document.getElementById('design-button')
const galleryButton = document.getElementById('gallery-button')
const webContainer = document.getElementById('web-bungkus')
const designContainer = document.getElementById('design-bungkus')
const galleryContainer = document.getElementById('gallery-bungkus')
const cards = document.querySelectorAll('.card2')
const cardsD = document.querySelectorAll('.card3')
const cardsG = document.querySelectorAll('.card4')
const more = document.getElementById('more')
const less = document.getElementById('less')
const moreD = document.getElementById('more-d')
const lessD = document.getElementById('less-d')
const moreG = document.getElementById('more-G')
const lessG = document.getElementById('less-G')
const username = document.getElementById('username')
const email = document.getElementById('email')
const pesan = document.getElementById('pesan')
const kirim = document.getElementById('kirim')
const alert = document.getElementById('alert')

let currIndexskill = 0
let currIndexproject = 0
// console.log(pp);

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
    if (currIndexskill !== 0) {
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
        currIndexskill = 0
    }
});

toolButton.addEventListener('click', function () {
    if (currIndexskill !== 1) {
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
        currIndexskill = 1
    }
});

function ganti(target, targetContent, teman, saudara, temanContent, saudaraContent, index) {

    if (currIndexproject !== index) {
        teman.classList.remove('bg-[#e6c16b42]')
        saudara.classList.remove('bg-[#e6c16b42]')
        target.classList.add('bg-[#e6c16b42]')

        // console.log(currIndexproject)


        setTimeout(() => {
            targetContent.classList.remove('hidden')
            temanContent.classList.add('hidden')
            saudaraContent.classList.add('hidden')
        }, 90);

        currIndexproject = index
    }
}
webButton.addEventListener('click', () => {
    ganti(webButton, webContainer, designButton, galleryButton, designContainer, galleryContainer, 0)
})

designButton.addEventListener('click', () => {
    ganti(designButton, designContainer, webButton, galleryButton, webContainer, galleryContainer, 1)
})

galleryButton.addEventListener('click', () => {
    ganti(galleryButton, galleryContainer, webButton, designButton, webContainer, designContainer, 2)
})

function lebih(cards, more, less) {
    cards.forEach(card => {
        card.classList.remove('hidden')
    });
    more.classList.add('hidden')
    less.classList.remove('hidden')
}

function dikit(cards, less, more) {
    cards.forEach(card => {
        card.classList.add('hidden');
    });
    less.classList.add('hidden')
    more.classList.remove('hidden')
}

more.addEventListener('click', () => {
    // console.log('ini more')
    lebih(cards, more, less)
})
less.addEventListener('click', () => {
    dikit(cards, less, more)
});

moreD.addEventListener('click', () => {
    // console.log('ini more')
    lebih(cardsD, moreD, lessD)
})
lessD.addEventListener('click', () => {
    dikit(cardsD, lessD, moreD)
});

moreG.addEventListener('click', () => {
    // console.log('ini more')
    lebih(cardsG, moreG, lessG)
})
lessG.addEventListener('click', () => {
    dikit(cardsG, lessG, moreG)
});

kirim.addEventListener('click', () => {
    if (username.value === '' || pesan.value === '') {
        alert.classList.remove('hidden');
        setTimeout(() => {
            location.href = '#';
        }, 100);
    } else {
        var gabungan = 'Nama:%0A' + username.value + '%0AEmail:%0A' + email.value + '%0APesan:%0A' + pesan.value;

        var token = '6916554317:AAFYiMSaG-EEp1EZetgKhGrtcmgXG1OBjNk'; // Ganti dengan token bot yang kamu buat
        var grup = '-1002020558670'; // Ganti dengan chat id dari bot yang kamu buat

        $.ajax({
            url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
            method: `POST`,
        })
    }
});