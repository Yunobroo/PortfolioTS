
document.addEventListener('DOMContentLoaded', function () {
    const lightboxLinks = document.querySelectorAll('[data-lightbox]');

    lightboxLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault(); 
            const imageSrc = link.getAttribute('href');

        
            const overlay = document.createElement('div');
            overlay.classList.add('lightbox-overlay');
            document.body.appendChild(overlay);

            const lightboxImage = document.createElement('img');
            lightboxImage.src = imageSrc;
            lightboxImage.classList.add('lightbox-image');
            overlay.appendChild(lightboxImage);

            overlay.addEventListener('click', function () {
                document.body.removeChild(overlay);
            });
        });
    });
});

  function openLightbox(element) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const scrollPosition = window.scrollY; // Haal de huidige scrollpositie op

    lightboxImg.src = element.src;
    lightbox.classList.add('show');

    // Dynamisch de top-positie van de lightbox aanpassen op basis van de scrollpositie
    lightbox.style.top = (scrollPosition + 10) + "px"; // 10px boven de scrollpositie
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('show');
}

