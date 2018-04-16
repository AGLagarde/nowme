// BURGER NAV //
var burger = document.querySelectorAll(".header--nav-burger div");
var header = document.querySelector(".header--buttons");

if (burger) {
  for (let i = 0; i < burger.length; i++) {
    burger[i].addEventListener("click", function() {
      document.querySelector(".header--buttons").classList.toggle("hidden");
      document.querySelector(".burger-1").classList.toggle("burger-transform-1");
      document.querySelector(".burger-2").classList.toggle("burger-transform-3");
      document.querySelector(".burger-3").classList.toggle("burger-transform-2");
    });
  }
}