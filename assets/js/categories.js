document.addEventListener("DOMContentLoaded", function() {
    // Non-DOM-element variables
    var productResultAmount = 0;

    // Gather elements
    var DOMproductResultAmount = document.querySelector(".main__content__products__top-container__results__result-amount");

    DOMproductResultAmount.textContent = productResultAmount;
});