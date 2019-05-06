document.addEventListener("DOMContentLoaded", function() {
    // Non-DOM-element variables
    var products = [];
    var productsSorted = [];

    // Add products
    // Row 1
    products.push(new Product("./assets/img/product_1.jpg", "Smarth Phone", "$300", "new"));
    products.push(new Product("./assets/img/product_2.jpg", "Smarth Phone", "$500", ""));
    products.push(new Product("./assets/img/product_3.jpg", "Smarth Phone", "$350", "hot"));
    products.push(new Product("./assets/img/product_4.jpg", "Smarth Phone", "$720", "sale"));

    // Row 2
    products.push(new Product("./assets/img/product_5.jpg", "Smarth Phone", "$220", "sale"));

    
    productsSorted = products;
    

    // Gather elements
    var DOMproductResultAmount = document.querySelector(".main__content__products__top-container__results__result-amount");
    var DOMproductWrapper = document.querySelector(".main__content__products__bottom-container");

    var DOMproductOrderTitle = document.querySelector(".main__content__products__top-container__orders__title");
    var DOMproductOrderOptions = document.querySelectorAll(".main__content__products__top-container__orders__list__li__item");

    // Create products
    createProducts();

    // Click default order
    DOMproductOrderOptions.forEach(function(option) {
        option.addEventListener("click", function() {
            if(option.textContent == "Default") {
                // Run default sorting function
                productsSorted = products;

            } else if(option.textContent == "Price") {
                // Run price sorting function


            } else if(option.textContent == "Name") {
                // Run name sorting function

                
            }

            DOMproductOrderTitle.textContent = option.textContent;
        });
    });

    // Create products method
    function createProducts() {
        productsSorted.forEach(function(product) {
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
            productName.href = "#";
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
    
            // Update product amount
            DOMproductResultAmount.textContent = products.length;
        });
    }

    // Product object
    function Product(imgUrl, name, price, clip) {
        this.imgUrl = imgUrl;
        this.name = name;
        this.price = price;
        this.clip = clip;
    }
});