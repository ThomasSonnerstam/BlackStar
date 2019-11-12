// Function to toggle the navigation bar on and off with the hamburger menu icon.

const navSlide = () => {
    const burger = document.querySelector(".hamburger-menu");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");

    // Toggle navigation on click
    burger.addEventListener("click", () => {
        nav.classList.toggle("nav-active");

        // Links animation
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`;
            }
        });

        // Burger animation (from burger to a cross)
        burger.classList.toggle("toggle");
    });

}

navSlide();

// Function for the carousel image slide show

const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".carousel-button-right");
const prevButton = document.querySelector(".carousel-button-left");
const navDots = document.querySelector(".carousel-nav");
const dots = Array.from(navDots.children);
const slideSize = slides[0].getBoundingClientRect().width;

// When you click the right arrow - turn to next slide
nextButton.addEventListener("click", e => {
    const currentSlide = track.querySelector(".current-slide");
    const nextSlide = currentSlide.nextElementSibling;

    // Move to the next slide
    track.style.transform = "translateX(-100%";
    currentSlide.classList.remove("current-slide");
    nextSlide.classList.add("current-slide");



});