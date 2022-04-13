const imagenes = document.getElementsByClassName("grid-container");

for (let i = 0; i < imagenes.length; i++) {
  imagenes[i].addEventListener("mouseover", () => hoverimages(imagenes[i]));
  imagenes[i].addEventListener("mouseout", hoverout);
}

function hoverimages(image) {
  for (let i = 0; i < imagenes.length; i++) {
    imagenes[i].classList.add("blur");
  }
  image.classList.add("zoom");
  image.classList.remove("blur");
}

function hoverout() {
  for (let i = 0; i < imagenes.length; i++) {
    imagenes[i].classList.remove("blur");
    imagenes[i].classList.remove("zoom");
  }
}
