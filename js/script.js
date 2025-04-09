const bar = document.getElementById("mobile__menu");
const nav = document.getElementById("nav__list");
const closenav = document.getElementById("close__menu");


// open navbar
if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("opennav");
  });
}


// close navbar
if (closenav) {
    closenav.addEventListener("click", () => {
    nav.classList.remove("opennav");
  });
}