const link = document.getElementById('link');
console.log(link);

function showLove() {
  const love = document.createElement("p");
  love.innerHTML = "&#10084;";
  love.classList.add("love-big");

  // generate posisi dan rotasi random
  const posisi = Math.round(window.innerWidth / Math.random()) * 180;
  const posisi1 = Math.floor(window.innerHeight / Math.random()) * 180;
  const rotasi = Math.floor(Math.random() * 360) + 1;
  love.style.translateX = posisi + "%";
  love.style.translateY = posisi1 + "%";
  love.style.color = "lightpink";
  // love.style.transition = ".2s";
  love.style.transform = `rotate(${rotasi}deg)`;

  document.body.appendChild(love);

  // membuang element love setelah 2 detik
  setTimeout(function () {
    love.style.opacity = 0;
    setTimeout(function () {
      love.remove();
    }, 2000);
  }, 2000);
}

setTimeout(() => {
  if (link) {
    link.style.opacity = 1;
    link.style.transform = "translateY(30px)"
    animasi();
  } else {
    console.error("Variabel 'link' belum didefinisikan!");
  }
}, 1000);

const transformValue = window.getComputedStyle(link).getPropertyValue('transform');
console.log(transformValue);

function animasi() {

  if (condition) {

  }

}