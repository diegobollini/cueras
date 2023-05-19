// Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  var navbar = document.querySelector(".navbar");
  var navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      navbar.classList.add("scrolled");
      navLinks.forEach(function (link) {
        link.classList.add("scrolled");
      });
    } else {
      navbar.classList.remove("scrolled");
      navLinks.forEach(function (link) {
        link.classList.remove("scrolled");
      });
    }
  });
});
