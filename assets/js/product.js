document.addEventListener("DOMContentLoaded", function() {
    // Non-DOM-element variables
    let products = [];
    let productsSorted = [];

    // Add products
    // Row 1
    products.push(new Product("./assets/img/product_1.jpg", "Smarth Phone", "$300", "new"));
    products.push(new Product("./assets/img/product_2.jpg", "Smarth Phone", "$500", ""));
    products.push(new Product("./assets/img/product_3.jpg", "Smarth Phone", "$350", "hot"));
    products.push(new Product("./assets/img/product_4.jpg", "Smarth Phone", "$720", "sale"));

    products.push(new Product("./assets/img/details_4.jpg", "Smarth Phone", "$351", ""));
    products.push(new Product("./assets/img/details_1.jpg", "Smarth Phone", "$735", "hot"));
    products.push(new Product("./assets/img/details_2.jpg", "Smarth Phone", "$151", "hot"));
    products.push(new Product("./assets/img/details_3.jpg", "Smarth Phone", "$641", "sale"));

    
    productsSorted = products;
    

    // Gather elements
    let DOMproductWrapper = document.querySelector(".main__content__products__bottom-container");

    // Create products
    createProducts();

    // Create products method
    function createProducts() {
        for(let i = 0; i < 4; i++) {
            let product = productsSorted[i];
            
            // Create elements
            let productContainer = document.createElement("section");
            let productImg = document.createElement("img");
            let productName = document.createElement("a");
            let productPrice = document.createElement("p");
    
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
                let productClip = document.createElement("a");
    
                productClip.className = "main__content__products__bottom-container__product__extra";
                productClip.href = "#";
                productClip.classList.add("main__content__products__bottom-container__product__extra--" + product.clip);
    
                productContainer.appendChild(productClip);
            }
    
            DOMproductWrapper.appendChild(productContainer);
        }
    }

    // Product object
    function Product(imgUrl, name, price, clip) {
        this.imgUrl = imgUrl;
        this.name = name;
        this.price = price;
        this.clip = clip;
    }
});