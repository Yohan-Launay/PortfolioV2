document.addEventListener('DOMContentLoaded', function() {
    // Sélectionnez l'élément à animer
    var animatedTitle = document.getElementById('animated_title');

    // Configurez l'animation de départ (en dehors de l'écran)
    animatedTitle.style.opacity = 0;
    animatedTitle.style.transform = 'translateY(50px)';

    // Créez une animation avec Element.animate()
    animatedTitle.animate(
        [
            { opacity: 0, transform: 'translateY(300px)' },
            { opacity: 1, transform: 'translateY(0)' }
        ],
        {
            duration: 2000, // Durée de l'animation en millisecondes (dans cet exemple, 1 seconde)
            easing: 'ease-out', // Fonction d'interpolation (facultatif, 'ease-out' est un exemple)
            fill: 'forwards'
        }
    );
});