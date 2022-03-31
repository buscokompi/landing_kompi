document.addEventListener("DOMContentLoaded", function() {
  iniciarApp();
});

function iniciarApp() {
  navegacionFija();
}

function navegacionFija() {
  const menu = document.querySelector(".menu");
  const section = document.querySelector(".title");
  // const div = document.createElement();
  const aux = document.querySelector(".title");

  window.addEventListener("scroll", function() {
    if (aux.getBoundingClientRect().top < 0) {
      menu.classList.add("fijo");
      section.classList.add("padding");
    } else {
      menu.classList.remove("fijo");
      section.classList.remove("padding");
    }
  });
}
