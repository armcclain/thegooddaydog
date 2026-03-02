const track = document.getElementById('track');

function moveSlide(direction) {
    const slideWidth = track.clientWidth;
    track.scrollBy({ left: direction * slideWidth, behavior: 'smooth' });
}

// Logic to play/pause videos automatically
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const video = entry.target.querySelector('video');
        if (video) {
            if (entry.isIntersecting) {
                video.play();
            } else {
                video.pause();
            }
        }
    });
}, { threshold: 0.6 }); // Trigger when 60% of the slide is visible

document.querySelectorAll('.slide').forEach(slide => observer.observe(slide));