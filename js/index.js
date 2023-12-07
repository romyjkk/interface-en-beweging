const buttonVergrootglas = document.getElementById("vergrootglas");
const buttonBoos = document.getElementById("boos");
const buttonPistool = document.getElementById("pistool");
let video = document.getElementById("video");

buttonVergrootglas.addEventListener("click", playVergrootglas);
buttonBoos.addEventListener("click", playBoos);
buttonPistool.addEventListener("click", playPistool);

function playVergrootglas() {
  video.src = "videos/wow.mp4";
}

function playBoos() {
  video.src = "videos/boos.mp4";
}

function playPistool() {
  video.src = "videos/gun.mp4";
}
