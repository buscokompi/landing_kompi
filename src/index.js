document.addEventListener("DOMContentLoaded", function() {
  iniciarApp();
});

function iniciarApp() {
  navegacionFija();
}

function navegacionFija() {
  const header = document.querySelector(".header");
  const aux = document.querySelector(".section-1");

  window.addEventListener("scroll", function() {
    if (aux.getBoundingClientRect().bottom < 0) {
      header.classList.add("fijo");
    } else {
      header.classList.remove("fijo");
    }
  });
}
