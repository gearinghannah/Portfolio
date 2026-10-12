const brainCursor = document.createElement("div");
brainCursor.classList.add("brain-cursor");
document.body.appendChild(brainCursor);

const dots = [];
const dotCount = 12;

for (let i = 0; i < dotCount; i++) {
    const dot = document.createElement("div");
    dot.classList.add("neural-dot");
    document.body.appendChild(dot);

    dots.push({
        element: dot,
        x: window.innerWidth / 2,
        y: window.innerHeight / 2
    });
}

const stars = [];
const starCount = 5;

for (let i = 0; i < starCount; i++) {
    const star = document.createElement("div");
    star.classList.add("cursor-star");
    document.body.appendChild(star);

    stars.push({
        element: star,
        x: window.innerWidth / 2,
        y: window.innerHeight / 2
    });
}

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;


document.addEventListener("mousemove", (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
});

function animateCursor() {
    brainCursor.style.left = mouseX + "px";
    brainCursor.style.top = mouseY + "px";

    let previousX = mouseX;
    let previousY = mouseY;

    dots.forEach((dot, index) => {
        const speed = 0.15 + (index * 0.01);

        dot.x += (previousX - dot.x) * speed;
        dot.y += (previousY - dot.y) * speed;

        dot.element.style.left = dot.x + "px";
        dot.element.style.top = dot.y + "px";

        previousX = dot.x;
        previousY = dot.y;
    });
    
    stars.forEach((star, index) => {
    const targetDot = dots[index * 2];

    star.x += (targetDot.x - star.x) * 0.2;
    star.y += (targetDot.y - star.y) * 0.2;

    star.element.style.left = star.x + "px";
    star.element.style.top = star.y + "px";
    });

    requestAnimationFrame(animateCursor);
}

animateCursor();