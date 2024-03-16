const link = document.getElementById('link');
const transisii = document.getElementsByClassName('transisi');
const animation = document.querySelector(".move div");

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

setInterval(bounce, 500); // Panggil fungsi bounce setiap 1 detik

function bounce() {
  // Ambil elemen dengan kelas 'link'
  var link = document.querySelector('.link');

  // Periksa apakah elemen memiliki kelas 'gerak'
  if (link.classList.contains('gerak')) {
    // Jika ada, hapus 'gerak' dan tambahkan 'gerak1'
    link.classList.remove('gerak');
    link.classList.add('gerak1');
  } else {
    // Jika tidak, hapus 'gerak1' dan tambahkan 'gerak'
    link.classList.remove('gerak1');
    link.classList.add('gerak');
  }
}

let halo = link.addEventListener('click', () => {
  animation.classList.add("page-transition");
  animation.parentElement.classList.remove("hide");

  setTimeout(() => {
    transisi();
  }, 800);
});

function transisi() {
  document.location.href = 'portofolio/index.html';
}