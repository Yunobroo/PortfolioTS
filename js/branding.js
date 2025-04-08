
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

// Voeg event listeners toe aan de afbeeldingen om de lightbox te openen
const images = document.querySelectorAll('.lightbox-trigger');
images.forEach(image => {
    image.addEventListener('click', openLightbox);
});

// Functie om de lightbox te openen
function openLightbox(event) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-img');
    lightbox.style.display = 'flex';
    lightboxImage.src = event.target.src;
}

// Functie om de lightbox te sluiten
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}
