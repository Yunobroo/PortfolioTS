// Eventlistener voor toetsdruk 'A'
document.addEventListener('keydown', function(event) {
    if (event.key === 'a' || event.key === 'A') {
        // Redirect naar personal-project.html
        window.location.href = 'personal-project.html';
    }
});
