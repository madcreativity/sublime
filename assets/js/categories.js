document.addEventListener("DOMContentLoaded", function() {
    // Non-DOM-element variables
    var productResultAmount = 0;
    var products = [];

    // Add products
    products.push(new Product("./assets/img/product_1.jpg", "Smarth Phone", "$300", "new"));
    products.push(new Product("./assets/img/product_2.jpg", "Smarth Phone", "$500", ""));
    products.push(new Product("./assets/img/product_3.jpg", "Smarth Phone", "$350", "hot"));
    products.push(new Product("./assets/img/product_4.jpg", "Smarth Phone", "$720", "sale"));

    products.push(new Product("./assets/img/product_5.jpg", "Smarth Phone", "$220", "sale"));

    // Gather elements
    var DOMproductResultAmount = document.querySelector(".main__content__products__top-container__results__result-amount");
    var DOMproductWrapper = document.querySelector(".main__content__products__bottom-container");

    DOMproductResultAmount.textContent = productResultAmount;

    

    // Create products
    products.forEach(function(product) {
        // Create elements
        var productContainer = document.createElement("section");
        var productImg = document.createElement("img");
        var productName = document.createElement("a");
        var productPrice = document.createElement("p");

        // Set variables
        productContainer.className = "main__content__products__bottom-container__product";

        productImg.className = "main__content__products__bottom-container__product__image";
        productImg.src = product.imgUrl;

        productName.className = "main__content__products__bottom-container__product__name";
        productName.textContent = product.name;

        productPrice.className = "main__content__products__bottom-container__product__price";
        productPrice.textContent = product.price;

        // Add to wrapper
        productContainer.appendChild(productImg);
        productContainer.appendChild(productName);
        productContainer.appendChild(productPrice);

        // Product clip
        if(product.clip !== "") {
            var productClip = document.createElement("a");

            productClip.className = "main__content__products__bottom-container__product__extra";
            productClip.href = "#";
            productClip.classList.add("main__content__products__bottom-container__product__extra--" + product.clip);

            productContainer.appendChild(productClip);
        }

        DOMproductWrapper.appendChild(productContainer);
    });


    // Product object
    function Product(imgUrl, name, price, clip) {
        this.imgUrl = imgUrl;
        this.name = name;
        this.price = price;
        this.clip = clip;
    }
});