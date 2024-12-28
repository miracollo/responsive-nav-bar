const hamburger = document.querySelector(".hamburger")
const one = document.querySelector(".one")
const two = document.querySelector(".two")
const three = document.querySelector(".three")
const mobileNavLinks = document.querySelector(".mobile-nav-links");

hamburger.addEventListener("click", () => {
  two.classList.toggle("two-active");
  one.classList.toggle("one-active");
  three.classList.toggle("three-active");
  mobileNavLinks.classList.toggle("mobile-hidden");
});