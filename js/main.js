
let menubar = document.querySelector(".menu-bar");
let introSection = document.querySelector(".intro-section");

menubar.onclick = function () {
    let navBar = document.querySelector(".right-header");
    navBar.classList.toggle("active");
    introSection.classList.toggle("active");
}