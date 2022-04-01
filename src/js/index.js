document.addEventListener("DOMContentLoaded", function() {
  iniciarApp();
});

function iniciarApp() {
  navegacionFija();
}

function navegacionFija() {
  const header = document.querySelector(".section-0");
  const section = document.querySelector(".section-1");
  const aux = document.querySelector(".section-1");

  window.addEventListener("scroll", function() {
    if (section.getBoundingClientRect().top < 0) {
      header.classList.add("fijo");
      aux.classList.add("padding");
      header.classList.add("backbar");
      header.classList.remove("backbar2");
    } else {
      header.classList.remove("fijo");
      aux.classList.remove("padding");
      header.classList.remove("backbar");
      header.classList.add("backbar2");
    }
  });
}
