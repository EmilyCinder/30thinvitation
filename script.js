let currentSlide = 0; // Start with the first slide
const slides = document.querySelectorAll('.slide'); // Get all slides
const totalSlides = slides.length; // Get total number of slides

function moveSlide(direction) {
    const slideWidth = slides[0].clientWidth; // Get the width of a single slide

    // Update the current slide index
    currentSlide += direction;

    // Wrap around if we go out of bounds
    if (currentSlide >= totalSlides) {
        currentSlide = 0; // Go back to the first slide
    } else if (currentSlide < 0) {
        currentSlide = totalSlides - 1; // Go to the last slide
    }

    // Move the carousel by translating it horizontally
    const carousel = document.querySelector('.carousel');
    carousel.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}
