var app = document.getElementById('app');


var typewriter = new Typewriter(app, {
    loop: true,
    delay: 75,
});

typewriter
    .pauseFor(2500)
    .typeString('is a student at Semarang State University.')
    .pauseFor(300)
    .deleteAll()
    .typeString('Software Engginer')
    .pauseFor(300)
    .deleteAll()
    .typeString('Cyber Security Enthusiast')
    .pauseFor(1000)
    .start();