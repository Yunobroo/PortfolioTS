document.addEventListener('DOMContentLoaded', () => {
    let channels = document.querySelectorAll('.channel');
    let selectedIndex = 0;
    let pointer = document.getElementById('wii-pointer');

    function updateSelection() {
        channels.forEach((channel, index) => {
            channel.classList.toggle('selected', index === selectedIndex);
        });
    }

    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowRight') {
            selectedIndex = (selectedIndex + 1) % channels.length;
        } else if (event.key === 'ArrowLeft') {
            selectedIndex = (selectedIndex - 1 + channels.length) % channels.length;
        } else if (event.key === 'Enter') {
            let selectedChannel = channels[selectedIndex];
            window.location.href = selectedChannel.dataset.url;
        }
        updateSelection();
    });

    updateSelection();

    // Wii Pointer beweging
    document.addEventListener('mousemove', (event) => {
        pointer.style.left = event.pageX + 'px';
        pointer.style.top = event.pageY + 'px';
    });

    // Klik effect
    document.addEventListener('mousedown', () => {
        pointer.classList.add('click');
    });

    document.addEventListener('mouseup', () => {
        pointer.classList.remove('click');
    });

    // Klikken op channels
    channels.forEach((channel, index) => {
        channel.addEventListener('click', () => {
            window.location.href = channel.dataset.url;
        });
    });
});
