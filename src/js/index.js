// Header transparent to white when scroll
window.addEventListener("scroll", function() {
  const topbar = document.querySelector(".topbar");
  topbar.classList.toggle("sticky", window.scrollY > 0);
});

// Burger menu for mobile

const click = document.querySelectorAll(".menuClick");
click.forEach(element => {
  element.addEventListener("click", toggleMenu);
});

function toggleMenu() {
  const burger = document.querySelector(".burger");
  const burgerImg = document.querySelector(".burger-img");

  burger.classList.toggle("active");
  burgerImg.classList.toggle("active");
}
