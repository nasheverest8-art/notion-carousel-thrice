const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const dotsContainer = document.querySelector(".dots");

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
const fullscreen = document.getElementById("fullscreen");
const fullscreenImage =
    document.getElementById("fullscreenImage");

const fullscreenPrev =
    document.querySelector(".fullscreen-prev");

const fullscreenNext =
    document.querySelector(".fullscreen-next");

const fullscreenClose =
    document.querySelector(".fullscreen-close");


// Open fullscreen when image clicked

slides.forEach((slide, index) => {
    slide.addEventListener("click", () => {
        currentIndex = index;
        updateFullscreen();
        fullscreen.classList.add("active");
    });
});

function updateFullscreen() {
    fullscreenImage.src =
        slides[currentIndex].src;
}

// Fullscreen navigation

fullscreenNext.addEventListener("click", () => {
    currentIndex =
        (currentIndex + 1) % slides.length;

    updateFullscreen();
});

fullscreenPrev.addEventListener("click", () => {
    currentIndex =
        (currentIndex - 1 + slides.length) % slides.length;

    updateFullscreen();
});

// Close

fullscreenClose.addEventListener("click", () => {
    fullscreen.classList.remove("active");
});

// Click dark area to close

fullscreen.addEventListener("click", (e) => {
    if (e.target === fullscreen) {
        fullscreen.classList.remove("active");
    }
});

// Keyboard controls while fullscreen is open

document.addEventListener("keydown", (e) => {
    if (!fullscreen.classList.contains("active")) return;

    if (e.key === "Escape") {
        fullscreen.classList.remove("active");
    }

    if (e.key === "ArrowRight") {
        fullscreenNext.click();
    }

    if (e.key === "ArrowLeft") {
        fullscreenPrev.click();
    }
});

});

