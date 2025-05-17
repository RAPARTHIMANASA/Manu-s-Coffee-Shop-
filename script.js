const menuOpenButton = document.querySelector("#menu-open-button")
const menuCloseButton = document.querySelector("#menu-close-button")

menuOpenButton.addEventListener("click", () => {
  // Toggle mobile menu visibility
  document.body.classList.toggle("show-mobile-menu");
});
document.getElementById("menu-toggle").addEventListener("click", function() {
    document.querySelector(".nav-menu").classList.toggle("active");
});
//Close menu when the close button is clicked
menuCloseButton.addEventListener("click", () => menuOpnButton.click());

