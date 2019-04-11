document.addEventListener("DOMContentLoaded", function() {
    /// Gather elements
    var nav = document.querySelector(".nav-header__nav");

    /// Update navbar size upon page scroll
    window.addEventListener("scroll", function(e) {
        if(window.scrollY >= 70) {
            nav.classList.add("nav-header__nav--small");
        } else {
            nav.classList.remove("nav-header__nav--small");
        }
    });
});