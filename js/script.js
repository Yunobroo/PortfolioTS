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

document.addEventListener("scroll", function () {
    const parallax = document.querySelector(".parallax");
    let scrollPosition = window.scrollY;
    parallax.style.backgroundPositionY = scrollPosition * 0.5 + "px";
});


document.addEventListener("scroll", function () {
    const fadeElements = document.querySelectorAll(".fade-in");
    fadeElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.9) {
            el.classList.add("visible");
        }
    });
});


  const sequence = ['T','I','M','E','L','E','S','S'];
  let input = [];

  document.querySelectorAll('.letter').forEach(letter => {
    letter.addEventListener('click', () => {
      const clicked = letter.innerText.toUpperCase();

      if (clicked === sequence[input.length]) {
        input.push(clicked);
      } else {
        input = clicked === sequence[0] ? [clicked] : [];
      }

      if (input.length === sequence.length) {
        activateAndorEgg();
        input = [];
      }
    });
  });

  function activateAndorEgg() {
    const video = document.getElementById('andor-video');
    const audio = document.getElementById('timeless-audio');
    const hero = document.querySelector('.hero');
    const stopBtn = document.getElementById('stop-easter-egg');

    hero.classList.add('faded');
    video.style.pointerEvents = 'none';
    video.muted = false;
    video.play().catch(() => {});
    audio.play().catch(() => {});
    setTimeout(() => {
      video.style.opacity = '1';
    }, 100);
    
    stopBtn.style.display = 'block';
  }

  // Stop knop functionaliteit
  document.getElementById('stop-easter-egg').addEventListener('click', () => {
    const video = document.getElementById('andor-video');
    const audio = document.getElementById('timeless-audio');
    const hero = document.querySelector('.hero');
    const stopBtn = document.getElementById('stop-easter-egg');

    video.pause();
    audio.pause();
    video.style.opacity = '0';
    hero.classList.remove('faded');
    stopBtn.style.display = 'none';
  });
