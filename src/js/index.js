// document.addEventListener("DOMContentLoaded", function() {
//   iniciarApp();
// });

// function iniciarApp() {
//   navegacionFija();
// }

// function navegacionFija() {
//   const header = document.querySelector(".topbar");
//   const section = document.querySelector(".section-1");
//   // const aux = document.querySelector(".section-1");

//   window.addEventListener("scroll", function() {
//     if (section.getBoundingClientRect().top < 0) {
//       // header.classList.add("fixed");
//       // aux.classList.add("padding");
//       header.classList.add("topbar-lower");
//       header.classList.remove("topbar-upper");
//     } else {
//       header.classList.remove("fijo");
//       // aux.classList.remove("padding");
//       header.classList.remove("topbar-lower");
//       header.classList.add("topbar-upper");
//     }
//   });
// }
// // se han comentado varias partes del .js al descubrir que el padding era el que causaba el salto de la barra de navegación al hacer scroll.

window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

document.getElementById("menuClick").onclick = function () { toggleMenu(); };

function toggleMenu() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".navigation");
    const logo = document.querySelector(".logo");
    const menuButton = document.querySelector(".menuButton");

    menuToggle.classList.toggle("active");
    navigation.classList.toggle("active");
    logo.classList.toggle("active");
    menuButton.classList.toggle("active");
}
