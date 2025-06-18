document.addEventListener('DOMContentLoaded', () => {
    let channels = document.querySelectorAll('.channel');
    let selectedIndex = 0;
    let pointer = document.getElementById('wii-pointer');
    let wiiStartup = document.getElementById('wiiStartup');

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

        // Start audio on any key press if not already playing
        if (wiiStartup.paused) {
            wiiStartup.volume = 0.5;
            wiiStartup.play().catch(err => {
                console.warn("Audio play prevented:", err);
            });
        }

        updateSelection();
    });

    document.addEventListener('mousemove', (event) => {
        pointer.style.left = event.pageX + 'px';
        pointer.style.top = event.pageY + 'px';
    });

    document.addEventListener('mousedown', () => {
        pointer.classList.add('click');
    });

    document.addEventListener('mouseup', () => {
        pointer.classList.remove('click');
    });

    channels.forEach((channel, index) => {
        channel.addEventListener('click', () => {
            window.location.href = channel.dataset.url;
        });
    });

    updateSelection();
});
