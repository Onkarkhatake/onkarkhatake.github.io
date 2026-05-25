/* Typing Effect */

const words = ["IT Student", "Web Developer", "Tech Enthusiast"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function typingEffect() {

    currentWord = words[i];

    if (!isDeleting) {
        document.getElementById("typing").textContent =
            currentWord.substring(0, j++);

        if (j > currentWord.length) {
            isDeleting = true;
            setTimeout(typingEffect, 1000);
            return;
        }

    } else {

        document.getElementById("typing").textContent =
            currentWord.substring(0, j--);

        if (j === 0) {
            isDeleting = false;
            i = (i + 1) % words.length;
        }
    }

    setTimeout(typingEffect, 100);
}

typingEffect();

/* Scroll Reveal Animation */

function reveal() {

    let reveals = document.querySelectorAll(".reveal");

    reveals.forEach((el) => {

        let windowHeight = window.innerHeight;
        let top = el.getBoundingClientRect().top;

        if (top < windowHeight - 100) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", reveal);
