document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".lightsaber-btn");

    buttons.forEach((btn) => {
        btn.addEventListener("mouseenter", () => {
            const audio = new Audio("sounds/lightsaber.mp3");
            audio.volume = 0.3;
            audio.play();
        });
    });
});
// Parallax Effect
document.addEventListener("scroll", function () {
    const parallax = document.querySelector(".parallax");
    let scrollPosition = window.scrollY;
    parallax.style.backgroundPositionY = scrollPosition * 0.5 + "px";
});

// Fade-in effect on scroll
document.addEventListener("scroll", function () {
    const fadeElements = document.querySelectorAll(".fade-in");
    fadeElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.9) {
            el.classList.add("visible");
        }
    });
});
