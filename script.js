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

// // Function for the carousel image slide show

// const carouselSlide = document.querySelector(".carousel-slide");
// const carouselImages = document.querySelectorAll(".carousel-slide img");
// const prevButton = document.querySelector("#prev-button");
// const nextButton = document.querySelector("#next-button");

// // Counter

// let counter = 1;

// // Width of the images

// const imageWidth = carouselImages[0].clientWidth;

// // Start image slide on second picture (the first & last picture are duplicates)

// carouselSlide.style.transform = "translateX(" + (-imageWidth * counter) + "px)";

// // Transition into next slide when pressing the next button

// nextButton.addEventListener("click", () => {

//     if (counter >= carouselImages.length - 1) {
//         return;
//     }

//     carouselSlide.style.transition = "transform 0.5s ease-in";
//     counter++;
//     carouselSlide.style.transform = "translateX(" + (-imageWidth * counter) + "px)";
// });

// prevButton.addEventListener("click", () => {

//     if (counter <= 0) {
//         return;
//     }

//     carouselSlide.style.transition = "transform 0.5s ease-in";
//     counter--;
//     carouselSlide.style.transform = "translateX(" + (-imageWidth * counter) + "px)";

// });

// carouselSlide.addEventListener("transitionend", () => {

//     if (carouselImages[counter].id === "last-clone") {
//         carouselSlide.style.transition = "none";
//         counter = carouselImages.length - 2;
//         carouselSlide.style.transform = "translateX(" + (-imageWidth * counter) + "px)";

//     }

//     if (carouselImages[counter].id === "first-clone") {
//         carouselSlide.style.transition = "none";
//         counter = carouselImages.length - counter;
//         carouselSlide.style.transform = "translateX(" + (-imageWidth * counter) + "px)";

//     }

// });