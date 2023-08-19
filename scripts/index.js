import {slides} from '../data/slides.js';

let index = 0;
let slideAnimation = false;

welcomeImageAnimation();
displaySlide(slides[index]);

function displaySlide(slide){
    const slider = document.querySelector('.slider');

    slider.innerHTML = `
        <div class="slide-image-container">
            <img src="images/${slide.image}" class="slide-image">
            <div class="content">${slide.text}</div>
        </div>
        <div class="scroll-left-animation"></div>
        <div class="scroll-right-animation"></div>
        <button class="scroll-left">
            <
        </button>
        <button class="scroll-right">
            >
        </button>
    `;
    const scrollLeft = document.querySelector('.scroll-left');

    scrollLeft.addEventListener('click', () => {
        if(!slideAnimation){
            index--;
            if(index < 0){
                index = slides.length-1;
            }
            sliderScrollLeft(slides[index]);
        }
    });

    const scrollRight = document.querySelector('.scroll-right');

    scrollRight.addEventListener('click', () => {
        if(!slideAnimation){
            index++;
            if(index >= slides.length){
                index = 0;
            }
            sliderScrollRight(slides[index]);
        }
    });
}

function welcomeImageAnimation(){
    const welcomeImage = document.querySelector('.welcome-image');

    setTimeout(() => {
        welcomeImage.classList.add('welcome-image-show');
    }, 1000);
}

function sliderScrollRight(slide){
    slideAnimation = true;
    setTimeout(() => {
        displaySlide(slides[index]);
        const nextSlide = document.querySelector('.scroll-right-animation');
        nextSlide.innerHTML = `
            <img src="../images/${slide.image}" class="slide-image">
        `;
        slideAnimation = false;
    }, 1000);
}

function sliderScrollLeft(slide){
    slideAnimation = true;
    setTimeout(() => {
        displaySlide(slides[index]);
        const nextSlide = document.querySelector('.scroll-left-animation');
        nextSlide.innerHTML = `
            <img src="../images/${slide.image}" class="slide-image">
        `;
        slideAnimation = false;
    }, 1000);
}
