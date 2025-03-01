let currentIndex = 0;
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const intervalTime = 8000; 
let slideInterval;
let isAnimating = false;
function showSlide(index) {
    if (isAnimating) return;
    isAnimating = true;

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100 + "%";
    slider.style.transition = "transform 0.7s ease-in-out";
    slider.style.transform = `translateX(${offset})`;

    setTimeout(() => {
        isAnimating = false;
    }, 700);
}

function nextSlide() {
    showSlide(currentIndex + 1);
    resetAutoSlide();
}
function prevSlide() {
    showSlide(currentIndex - 1);
    resetAutoSlide();
}
function startAutoSlide() {
    slideInterval = setInterval(nextSlide, intervalTime);
}
function resetAutoSlide() {
    clearInterval(slideInterval);
    startAutoSlide();
}
document.querySelector('.prev').addEventListener('click', prevSlide);
document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.slider-container').addEventListener('mouseenter', () => clearInterval(slideInterval));
document.querySelector('.slider-container').addEventListener('mouseleave', startAutoSlide);
startAutoSlide();
