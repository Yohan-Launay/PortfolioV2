console.log("Hello world !");

let paragraphs = document.querySelectorAll(".about_text");

paragraphs.forEach((paragraph) => {
    const text = paragraph.textContent.trim();
    const letters = text.split(" ");

    paragraph.innerHTML = letters
        .map((letter) => `<div>${letter}</div>`)
        .join(" ");
});
console.log(paragraphs)
