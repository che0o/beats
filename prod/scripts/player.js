let video;
let durationControl;
let soundControl;
let intervalId;

const playBtn = document.querySelector(".video__player--img");
const soundBtn = document.querySelector(".sound");
const playerPlayBtn = document.querySelector(".duration__img");

video = document.getElementById("player");

video.addEventListener("click", playStop);

let playButtons = document.querySelectorAll(".play");
for (let i = 0; i < playButtons.length; i++) {
    playButtons[i].addEventListener("click", playStop);
    
}

function playStop() {
    playBtn.classList.toggle("active");
    if (video.paused) {
        video.play();
        playerPlayBtn.classList.add("active");
    } else {
        video.pause();
        playerPlayBtn.classList.remove("active");
    }
}