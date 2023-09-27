
const paragraphs = document.querySelectorAll(".about_text");

paragraphs.forEach((paragraph) => {
    const text = paragraph.textContent.trim();
    const words = text.split(" ");
    paragraph.innerHTML = words
        .map((word) => {
            const letters = word.split("");
            return `<div class="word">${letters.map((letter) => `<span class="letter">${letter}</span>`).join("")}</div>`;
        })
        .join(" ");
});

// Sélectionne tous les éléments avec la classe "letter"
const letters = document.querySelectorAll(".letter");

function handleScroll() {
    letters.forEach((letter, index) => {
        const rect = letter.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        // Vérifie si la lettre est dans la fenêtre visible
        if (rect.bottom >= 0 && rect.top <= windowHeight) {
            // Calcule la position de la lettre par rapport au milieu de la fenêtre
            const centerY = (rect.top + rect.bottom) / 3;
            // Calcul de l'opacité en fonction de la position par rapport au milieu de la fenêtre
            const opacity = 1 - Math.abs(centerY - windowHeight / 4) / (windowHeight / 2);
            // Applique l'opacité calculée
            letter.style.opacity = opacity;
        } else {
            // Si la lettre n'est pas dans la fenêtre, garde son opacité à 0
            letter.style.opacity = 0;
        }
    });
}

window.addEventListener("scroll", handleScroll);

// Appelle la fonction handleScroll une fois au chargement de la page pour vérifier l'état initial
handleScroll();




