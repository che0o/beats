let hamburger = document.querySelector(".hamburger");
let overlay = document.querySelector(".overlay");
let body = document.querySelector("body");

let links = document.querySelectorAll(".menu__link");


function hideMenu(){
    hamburger.classList.remove("hamburger--active");
    overlay.classList.remove("overlay--active");
}

links.forEach(function(link){
    link.addEventListener('click', hideMenu);
});


function toggleMenu(){
    hamburger.classList.toggle("hamburger--active");
    overlay.classList.toggle("overlay--active");
}

hamburger.addEventListener("click", toggleMenu);