let slideIndex = 0;
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');
const totalSlides = slides.length;

let slideInterval = setInterval(nextSlide, 5000);

function showSlide(index) {
    slideIndex = index;
    
    if (slideIndex >= totalSlides) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    }
    
    slider.style.transform = `translateX(-${slideIndex * (100 / totalSlides)}%)`;
    
    indicators.forEach((indicator, i) => {
        if (i === slideIndex) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
    
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 5000);
}

function nextSlide() {
    showSlide(slideIndex + 1);
}

function prevSlide() {
    showSlide(slideIndex - 1);
}

function goToSlide(index) {
    showSlide(index);
}

document.addEventListener('DOMContentLoaded', function() {
    showSlide(0);
    
    const videoSlide = document.querySelector('.video-slide');
    videoSlide.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    
    videoSlide.addEventListener('mouseleave', () => {
        slideInterval = setInterval(nextSlide, 5000);
    });
    
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.padding = '1rem 4rem';
            navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
        } else {
            navbar.style.padding = '1.5rem 4rem';
            navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        }
    });
});
