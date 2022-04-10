const imagenes = document.querySelectorAll(".grid-container");

function hoverimages(image) {
  for (let i = 0; i < imagenes.length; i++) {
    imagenes[i].classList.add("blur");
  }
  image.classList.add("zoom");
  image.classList.remove("blur");
}

function hoverout(image) {
  for (let i = 0; i < imagenes.length; i++) {
    imagenes[i].classList.remove("blur");
    imagenes[i].classList.remove("zoom");
  }
}
