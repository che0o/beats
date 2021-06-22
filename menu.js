let hamburger = document.querySelector(".hamburger");
let overlay = document.querySelector(".overlay");
let body = document.querySelector("body");

let links = document.querySelectorAll(".menu__link");

links.forEach(function(e){
    e.addEventListener('click', toggleMenu)
});

function toggleMenu(){
    hamburger.classList.toggle("hamburger--active");
    overlay.classList.toggle("overlay--active");
    
}

hamburger.addEventListener("click", toggleMenu);