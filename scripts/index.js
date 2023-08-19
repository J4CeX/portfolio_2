import {slides} from '../data/slides.js';

let index = 0;

welcomeImageAnimation();
displaySlide(slides[index]);

function displaySlide(slide){
    const slider = document.querySelector('.slider');

    slider.innerHTML = `
        <img src="images/${slide.image}" class="slide-image">
        <button class="scroll-left">
            <
        </button>
        <button class="scroll-right">
            >
        </button>
    `;
    const scrollLeft = document.querySelector('.scroll-left');

    scrollLeft.addEventListener('click', () => {
        index--;
        if(index < 0){
            index = slides.length-1;
        }
        displaySlide(slides[index]);
    });

    const scrollRight = document.querySelector('.scroll-right');

    scrollRight.addEventListener('click', () => {
        index++;
        if(index >= slides.length){
            index = 0;
        }
        displaySlide(slides[index]);
    });
}

function welcomeImageAnimation(){
    const welcomeImage = document.querySelector('.welcome-image');

    setTimeout(() => {
        welcomeImage.classList.add('welcome-image-show');
    }, 1000);
}
