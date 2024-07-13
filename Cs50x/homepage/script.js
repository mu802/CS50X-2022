// Toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bi-x-lg");
    navbar.classList.toggle("active");
};

// Remove navbar
menuIcon.classList.remove("bi-x-lg");
navbar.classList.remove("active");

// Navbar highlight
var url = window.location.href;
var section = url.split('/').pop().split('.')[0];
var navElement = document.getElementById(section);
navElement.classList.add("active");

// Multiple text
document.addEventListener('DOMContentLoaded', () => {
    const typed = new Typed(".multiple-text", {
        strings: ["Media technology Engineering Student",
            "Comunication Engineering Student",
            "Graphic designer",
            "Web Developer",
            "Cyber Security"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
});