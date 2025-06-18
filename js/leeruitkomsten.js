const pages = [
  "lo's.html",
  "lo1.html",
  "lo2.html",
  "lo3.html",
  "lo4.html",
  "lo5.html"
];

const currentPage = window.location.pathname.split("/").pop();
const currentIndex = pages.indexOf(currentPage);
const prevPage = currentIndex > 0 ? pages[currentIndex - 1] : null;
const nextPage = currentIndex < pages.length - 1 ? pages[currentIndex + 1] : null;

const thumb = document.getElementById("slider-thumb");
const track = document.getElementById("slider-track");
let isDragging = false;

thumb.addEventListener("mousedown", () => {
  isDragging = true;
  document.body.style.cursor = "grabbing";
});

document.addEventListener("mouseup", () => {
  if (isDragging) {
    isDragging = false;
    document.body.style.cursor = "default";

    const trackRect = track.getBoundingClientRect();
    const thumbCenter = thumb.getBoundingClientRect().left + thumb.offsetWidth / 2;
    const center = trackRect.left + trackRect.width / 2;

    if (thumbCenter < center - 50 && prevPage) {
      window.location.href = prevPage;
    } else if (thumbCenter > center + 50 && nextPage) {
      window.location.href = nextPage;
    } else {
      // Terug naar het midden
      thumb.style.left = "50%";
      thumb.style.transform = "translate(-50%, -50%)";
    }
  }
});

document.addEventListener("mousemove", (e) => {
  if (isDragging) {
    const trackRect = track.getBoundingClientRect();
    let x = e.clientX - trackRect.left;
    x = Math.max(0, Math.min(x, trackRect.width));
    thumb.style.left = `${(x / trackRect.width) * 100}%`;
    thumb.style.transform = "translate(-50%, -50%)";
  }
});

// Labels automatisch instellen als die bestaan
const leftLabel = document.querySelector(".slider-label.left");
const rightLabel = document.querySelector(".slider-label.right");

if (leftLabel && rightLabel) {
  if (prevPage) {
    leftLabel.textContent = "← " + prevPage.replace(".html", "").toUpperCase();
  } else {
    leftLabel.textContent = "";
  }

  if (nextPage) {
    rightLabel.textContent = nextPage.replace(".html", "").toUpperCase() + " →";
  } else {
    rightLabel.textContent = "";
  }
}
  const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.lightbox-close');

document.querySelectorAll('.dev-image img, .image-container img').forEach(img => {
  img.addEventListener('click', () => {
    const src = img.getAttribute('data-full') || img.src;
    lightboxImg.src = src;
    lightbox.classList.add('show');
  });
});

if (closeBtn) {
  closeBtn.addEventListener('click', () => {
    lightbox.classList.remove('show');
    lightboxImg.src = '';
  });
}

lightbox.addEventListener('click', e => {
  if (e.target === lightbox) {
    lightbox.classList.remove('show');
    lightboxImg.src = '';
  }
});
