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
