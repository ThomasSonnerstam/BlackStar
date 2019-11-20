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