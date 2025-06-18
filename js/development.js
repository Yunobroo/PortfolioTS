// Zorg dat dit bovenaan of onderaan je pagina staat (bij voorkeur onderaan de body)

document.addEventListener("DOMContentLoaded", () => {
    // Eventueel extra initialisatie hier
});

function openLightbox(element) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  lightboxImg.src = element.src;
  lightbox.classList.add('show');
}


function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('show');
}
