document.addEventListener('DOMContentLoaded', function() {
    let animatedTitle = document.getElementById('animated_title');
    animatedTitle.style.opacity = 0;
    animatedTitle.style.transform = 'translateY(50px)';
    animatedTitle.animate(
        [
            { opacity: 0, transform: 'translateY(300px)' },
            { opacity: 1, transform: 'translateY(0)' }
        ],
        {
            duration: 2000,
            easing: 'ease-out',
            fill: 'forwards'
        }
    );
});