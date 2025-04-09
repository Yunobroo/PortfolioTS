
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

document.addEventListener("DOMContentLoaded", function() {
    const lightboxLinks = document.querySelectorAll('[data-lightbox="gallery"]');

    lightboxLinks.forEach(link => {
        link.addEventListener("click", function() {
            document.body.classList.add('lightbox-open');
        });
    });


    const closeButton = document.querySelector('.lightbox-close'); 
    if (closeButton) {
        closeButton.addEventListener("click", function() {
            document.body.classList.remove('lightbox-open');
        });
    }
});
