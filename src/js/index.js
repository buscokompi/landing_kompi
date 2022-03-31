document.addEventListener("DOMContentLoaded", function() {
  iniciarApp();
});

function iniciarApp() {
  navegacionFija();
}

function navegacionFija() {
  const header = document.querySelector(".header");
  const section = document.querySelector(".section-1");
  // const aux = document.querySelector(".section-1");

  window.addEventListener("scroll", function() {
    if (section.getBoundingClientRect().top < 0) {
      header.classList.add("fijo");
      section.classList.add("padding");
      header.classList.add("backbar");
    } else {
      header.classList.remove("fijo");
      section.classList.remove("padding");
      header.classList.remove("backbar");
    }
  });
}
