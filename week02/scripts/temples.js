const $hamMenu = document.getElementById("ham-menu");

const $nav = document.querySelector("nav");

$hamMenu.addEventListener("click", () => {
  $nav.classList.toggle("open");
  $hamMenu.classList.toggle("open");
});
