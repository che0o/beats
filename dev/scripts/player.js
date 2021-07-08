let video;
let durationControl;
let soundControl;
let intervalId;
let soundLevel;

const playBtn = document.querySelector(".video__player--img");
const soundBtn = document.querySelector(".sound");
const playerPlayBtn = document.querySelector(".duration__img");

video = document.getElementById("player");

video.addEventListener("loadeddata", function () {

    video.addEventListener("click", playStop);

    let playButtons = document.querySelectorAll(".play");
    for (let i = 0; i < playButtons.length; i++) {
        playButtons[i].addEventListener("click", playStop);
    
    }

    durationControl = document.getElementById("durationLevel");
    durationControl.min = 0;
    durationControl.value = 0;
    durationControl.max = video.duration;
    durationControl.addEventListener("input", setVideoTime);

    const speakControl = document.getElementById("speak");
    speakControl.addEventListener("click", soundOf)

    soundControlLevel = document.getElementById("speakLevel");

    soundControlLevel.min = 0;
    soundControlLevel.max = 10;
    soundControlLevel.value = soundControlLevel.max;

    soundControlLevel.addEventListener("input", changeSoundVolume);

});

video.addEventListener("ended", function () {
    playBtn.classList.toggle("active");
    video.currentTime = 0;
    playerPlayBtn.classList.remove("active");
});


function playStop() {
    playBtn.classList.toggle("active");
    if (video.paused) {
        video.play();
        playerPlayBtn.classList.add("active");
        intervalId = setInterval(updateTime, 1000 / 60);
        updateTime();
    } else {
        video.pause();
        playerPlayBtn.classList.remove("active");
        clearInterval(intervalId);
    }
}

function setVideoTime() {
    video.currentTime = durationControl.value;
    updateTime();
}

function updateTime() {
    durationControl.value = video.currentTime;
    const step = video.duration / 100;
    const percent = video.currentTime / step;

    durationControl.style.background = `linear-gradient(90deg, #E01F3D 0%, #E01F3D ${percent}%, #333 ${percent}%)`;
}

function soundOf() {
    if (video.volume === 0) {
        video.volume = soundLevel;
        soundControlLevel.value = soundLevel * 10;
        soundBtn.classList.remove("active");
    } else {
        soundLevel = video.volume;
        video.volume = 0;
        soundControlLevel.value = 0;
        soundBtn.classList.add("active");
    }
}

function changeSoundVolume() {
    video.volume = soundControlLevel.value / 10;

    if (video.volume === 0) {
        soundBtn.classList.add("active");
    } else {
        soundBtn.classList.remove("active");
    }
}