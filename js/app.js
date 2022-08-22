const body = document.querySelector("body");
const hamburger = document.querySelector(".hamburger");
const header = document.querySelector(".header");

hamburger.addEventListener("click", () => {
    header.classList.toggle("nav-opened");
    body.classList.toggle("noscroll");
});

//////////////
/// SLIDER ///
//////////////

const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const slideTitles = document.querySelectorAll(".slide-title");
const prev = document.querySelector(".slide-prev");
const next = document.querySelector(".slide-next");

let currentSlide = 0;

const selectSlides = (array) => {
    array.forEach((item) => {
        if (item.dataset.slide != currentSlide) {
            item.classList.add("hidden");
        } else {
            item.classList.remove("hidden");
        }
    });
};

const changeSlide = () => {
    selectSlides(slides);
    selectSlides(slideTitles);
};

prev.addEventListener("click", () => {
    if (currentSlide === 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide--;
    }

    changeSlide();
});

next.addEventListener("click", () => {
    if (currentSlide === slides.length - 1) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }

    changeSlide();
});

changeSlide();

setInterval(() => {
    next.click();
}, 5000);
