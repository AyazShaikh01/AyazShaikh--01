const cursor = document.querySelector('#cursor');
let mouseX = 0, mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.transform = `translate(${(mouseX - 75)}px, ${(mouseY - 75)}px)`;
});

// Custom Text loading
const aspiring = document.querySelector("#aspiring");
const web = document.querySelector("#web");
const developer = document.querySelector("#developer");

function splitTextIntoSpans(element) {
    const text = element.innerText;
    element.innerHTML = ""; // Clear original text

    text.split("").forEach((char) => {
        const span = document.createElement("span");
        span.innerHTML = char;
        span.classList.add("char");
        element.appendChild(span);
    });
}

splitTextIntoSpans(aspiring);
splitTextIntoSpans(web);
splitTextIntoSpans(developer);