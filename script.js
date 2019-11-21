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

    // Nav menu closes when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = "";
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`;
                }
            });
            nav.classList.remove("nav-active");
        })
    });

    // Burger goes from cross to burger when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            burger.classList.toggle("toggle");
        })
    });

}

navSlide();

// TEST FOR DOTS

//Horizontal scroll
const slider = document.querySelector(".carousel-slide");
const dots = document.querySelectorAll(".dot");

dots.forEach(dot => {
    dot.addEventListener("click", () => {
        const i = dot.dataset.index;
        const sliderRect = slider.getBoundingClientRect().width;

        slider.scrollLeft = sliderRect * i;
    });
});

slider.addEventListener("scroll", () => {
    const pageWidth = window.innerWidth;
    const dotContainer = document.querySelector('.dot-center-placement');

    for (let i = 0; i < dotContainer.childElementCount; i++) {
        const dot = dotContainer.children[i];

        if (
            (slider.scrollLeft + (pageWidth / 2)) >= pageWidth * i &&
            (slider.scrollLeft + (pageWidth / 2)) <= pageWidth * (i + 1)
        ) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }

    }

});

// END TEST

// Smooth scroll to top of page on click of svg logo

document.querySelector("#top").addEventListener('click', scrollToTop);

function scrollToTop() {
    window.scroll({
        top: 0,
        behavior: "smooth",
    });
}



// Smooth scroll to next section

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Change the button text content on click

const subBtn = document.querySelector(".call-to-action button");

subBtn.addEventListener("click", () => {
    subBtn.style.background = "#BBCBD1";
    subBtn.textContent = "Thanks for subscribing!";
})