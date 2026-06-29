const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const dotsContainer = document.querySelector(".dots");
const fullscreenBtn = document.querySelector(".fullscreen-btn");
const wrapper = document.querySelector(".carousel-wrapper");

let currentIndex = 0;

// Create dots
slides.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");

    if (index === 0) {
        dot.classList.add("active");
    }

    dot.addEventListener("click", () => {
        goToSlide(index);
    });

    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

function updateCarousel() {
    track.style.transform =
        `translateX(-${currentIndex * 100}%)`;

    dots.forEach(dot => dot.classList.remove("active"));
    dots[currentIndex].classList.add("active");
}

function goToSlide(index) {
    currentIndex = index;
    updateCarousel();
}

nextBtn.addEventListener("click", () => {
    currentIndex =
        (currentIndex + 1) % slides.length;

    updateCarousel();
});

prevBtn.addEventListener("click", () => {
    currentIndex =
        (currentIndex - 1 + slides.length) % slides.length;

    updateCarousel();
});

// Keyboard support

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
        nextBtn.click();
    }

    if (e.key === "ArrowLeft") {
        prevBtn.click();
    }

    if (e.key === "f") {
        toggleFullscreen();
    }
});

// Fullscreen

fullscreenBtn.addEventListener("click", toggleFullscreen);

function toggleFullscreen() {
    if (!document.fullscreenElement) {
        wrapper.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
    let startX = 0;
let endX = 0;

const view = document.querySelector(".carousel-view");

view.addEventListener("touchstart", e => {
    startX = e.changedTouches[0].screenX;
});

view.addEventListener("touchend", e => {
    endX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const threshold = 50;

    if (startX - endX > threshold) {
        nextBtn.click();
    }

    if (endX - startX > threshold) {
        prevBtn.click();
    }
}
}
