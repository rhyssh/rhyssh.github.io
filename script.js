function showLove() {
  const love = document.createElement("p");
  love.innerHTML = "&#10084;";
  love.classList.add("love-big");

  // generate posisi dan rotasi random
  const posisi = Math.round(event.clientx / window.innerWidth) * 180;
  const posisi1 = Math.floor(event.clientY / window.innerHeight) * 180;
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
