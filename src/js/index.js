// document.addEventListener("DOMContentLoaded", function () {
//   iniciarApp();
// });

// function iniciarApp() {
//   navegacionFija();
// }

// function navegacionFija() {
//   const header = document.querySelector(".topbar");
//   const section = document.querySelector(".section-1");
//   // const aux = document.querySelector(".section-1");

//   window.addEventListener("scroll", function () {
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
// // For toggling and finding number of children and other stuff is done here!

// const navigation = document.getElementById("navbar");
// const menu = document.getElementById("menu");

// menu.addEventListener("click", () => {
//   // The navigation.children.length means the following :-
//   // The children inside a parent are basically an array of elements; So, here I'm finding the length of the array aka how many children are inside the nav bar.
//   //   Yup That's all.
//   navigation.style.setProperty("--childenNumber", navigation.children.length);

//   //    Casually Toggling Classes to make them animate on click
//   //   Regular stuff ;)
//   navigation.classList.toggle("active");
//   menu.classList.toggle("active");
// });

// Burger Menu
window.addEventListener("scroll", function () {
  const header = this.document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});
