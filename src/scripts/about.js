
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

const letters = document.querySelectorAll(".letter");

function handleScroll() {
    letters.forEach((letter, index) => {
        const rect = letter.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.bottom >= 0 && rect.top <= windowHeight) {
            const centerY = (rect.top + rect.bottom) / 3;
            const opacity = 1 - Math.abs(centerY - windowHeight / 4) / (windowHeight / 3);
            letter.style.opacity = opacity;
        } else {
            letter.style.opacity = 0;
        }
    });
}

window.addEventListener("scroll", handleScroll);

handleScroll();




