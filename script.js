/* =========================
   MOBILE MENU TOGGLE
========================= */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

/* =========================
   SMOOTH SCROLL (NAV LINKS)
========================= */

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior: "smooth"
        });

        // close menu on mobile after click
        navLinks.classList.remove("active");
    });
});

/* =========================
   BACK TO TOP BUTTON
========================= */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

/* =========================
   SIMPLE SCROLL ANIMATION
========================= */

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
            sec.style.opacity = "1";
            sec.style.transform = "translateY(0)";
        } else {
            sec.style.opacity = "0.8";
            sec.style.transform = "translateY(20px)";
        }
    });
});
