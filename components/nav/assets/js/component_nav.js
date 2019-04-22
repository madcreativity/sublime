document.addEventListener("DOMContentLoaded", function() {
    // Gather elements
    var nav = document.querySelector(".nav-header__nav");

    var searchButton = document.querySelector(".nav-header__nav__search-checkbox");
    var searchBar = document.querySelector(".nav-header__search-dropdown-container");

    // Update navbar size upon page scroll
    window.addEventListener("scroll", function(e) {
        if(window.scrollY >= 70) {
            nav.classList.add("nav-header__nav--small");
        } else {
            nav.classList.remove("nav-header__nav--small");
        }
    });

    // Search bar
    searchButton.addEventListener("change", function() {
        if(searchButton.checked) {
            searchBar.classList.add("nav-header__search-dropdown-container--open");
        } else {
            searchBar.classList.remove("nav-header__search-dropdown-container--open");
        }
    });
});