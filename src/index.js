document.addEventListener("DOMContentLoaded", function() {
  iniciarApp();
});

function iniciarApp() {
  navegacionFija();
}

function navegacionFija() {
  const header = document.querySelector(".header");
  const section = document.querySelector(".section-1");
  const aux = document.querySelector(".section-1");

  window.addEventListener("scroll", function() {
    if (aux.getBoundingClientRect().top < 0) {
      header.classList.add("fijo");
      section.classList.add("padding");
    } else {
      header.classList.remove("fijo");
      section.classList.remove("padding");
    }
  });
}
