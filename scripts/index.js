// import {slides} from '../data/slides.js';

welcomeImageAnimation();

function welcomeImageAnimation(){
    const welcomeImage = document.querySelector('.welcome-image');

    setTimeout(() => {
        welcomeImage.classList.add('welcome-image-show');
    }, 1000);
}

let isDragging = false;
let startX;
let startScrollLeft;

const carousel = document.querySelector(".carousel");
const arrowLeft = document.querySelector(".scroll-left");
const arrowRight = document.querySelector(".scroll-right");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const carouselChildrens = [...carousel.children];

let cardPerView = Math.round(carousel.offsetWidth  / firstCardWidth);

carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

arrowLeft.addEventListener("click", () => {
    carousel.scrollLeft += arrowLeft.className === "scroll-left" ? -firstCardWidth : firstCardWidth;
})

arrowRight.addEventListener("click", () => {
    carousel.scrollLeft += arrowLeft.className === "scroll-right" ? -firstCardWidth : firstCardWidth;
})

carousel.addEventListener("mousedown", (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
});

carousel.addEventListener("mousemove", (e) => {
    if(!isDragging){
        return;
    }
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
});

document.addEventListener("mouseup", () => {
    isDragging = false;
    carousel.classList.remove("dragging");
});

carousel.addEventListener("scroll", () => {
    if(carousel.scrollLeft === 0){
        carousel.classList.remove("transition");
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
        carousel.classList.add("transition");
    } else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth){
        carousel.classList.remove("transition");
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
        carousel.classList.add("transition");
    }
});