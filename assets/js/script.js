const track = document.getElementById('track');

// Function for Manual Arrow Navigation
function moveSlide(direction) {
    const slideWidth = track.clientWidth;
    track.scrollBy({ left: direction * slideWidth, behavior: 'smooth' });
}

// Function to Start the Video and Hide Button
function startBirthdayVideo() {
    const video = document.getElementById('birthdayVideo');
    const btn = document.getElementById('playBtn');

    video.play();
    btn.style.opacity = '0';
    setTimeout(() => {
        btn.style.display = 'none';
    }, 500);
}

// AUTO-NEXT: Move to next slide when video ends
document.getElementById('birthdayVideo').onended = function() {
    moveSlide(1);
};

// Keyboard Arrow Support
window.addEventListener('keydown', (e) => {
    if (e.key === "ArrowLeft") moveSlide(-1);
    if (e.key === "ArrowRight") moveSlide(1);
});