// Ensure DOM is fully loaded before executing scripts
document.addEventListener('DOMContentLoaded', function() {
    // Example function to control video behavior
    setupVideoPlayback();

    // More scripts can be added here for other interactive elements
});

document.addEventListener('DOMContentLoaded', function() {
    const mainElements = document.querySelectorAll('main, header, footer');
    mainElements.forEach(el => {
        el.style.opacity = 0;
        el.animate([
            { opacity: 0 },
            { opacity: 1 }
        ], {
            duration: 1000,
            fill: 'forwards'
        });
    });
});

// Function to setup video autoplay with handling for various browser policies
function setupVideoPlayback() {
    const videoElement = document.getElementById('gymVideo');

    if (videoElement) {
        // Play video if possible
        videoElement.play().catch(error => {
            console.log('Video playback failed:', error);
            // Fallback behaviour or UI adjustments can be handled here
        });

        // Optional: Add event listeners or other logic
        videoElement.addEventListener('ended', () => {
            console.log('Video ended');
            // Additional logic after video ends
        });
    }
}

// Add more functions as needed for handling other elements or events
