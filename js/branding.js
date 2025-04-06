// Script om de lightbox-functionaliteit te implementeren
document.addEventListener('DOMContentLoaded', function () {
    const lightboxLinks = document.querySelectorAll('[data-lightbox]');

    lightboxLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Voorkomt dat de pagina herlaadt
            const imageSrc = link.getAttribute('href');

            // Maak de overlay en voeg de afbeelding toe
            const overlay = document.createElement('div');
            overlay.classList.add('lightbox-overlay');
            document.body.appendChild(overlay);

            const lightboxImage = document.createElement('img');
            lightboxImage.src = imageSrc;
            lightboxImage.classList.add('lightbox-image');
            overlay.appendChild(lightboxImage);

            // Voeg een klik event toe om de overlay te sluiten
            overlay.addEventListener('click', function () {
                document.body.removeChild(overlay);
            });
        });
    });
});
// Dit gaat de 'lightbox-open' class toevoegen aan de body als de lightbox geopend is
document.addEventListener("DOMContentLoaded", function() {
    const lightboxLinks = document.querySelectorAll('[data-lightbox="gallery"]');

    lightboxLinks.forEach(link => {
        link.addEventListener("click", function() {
            document.body.classList.add('lightbox-open');
        });
    });

    // Dit verwijdert de class wanneer de lightbox wordt gesloten
    const closeButton = document.querySelector('.lightbox-close'); // Als je een sluitknop hebt
    if (closeButton) {
        closeButton.addEventListener("click", function() {
            document.body.classList.remove('lightbox-open');
        });
    }
});
