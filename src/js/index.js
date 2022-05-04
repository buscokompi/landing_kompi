// Header transparent to white when scroll
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

// Burger menu for mobile

const click = document.querySelectorAll(".menuClick");
click.forEach(element => {
    element.addEventListener("click", toggleMenu);
});

function toggleMenu() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".mobile-navigation");
    const logo = document.querySelector(".logo");

    menuToggle.classList.toggle("active");
    navigation.classList.toggle("active");
    logo.classList.toggle("active");
}
