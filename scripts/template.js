

function getHeaderTemplate() {
    return /*html*/`
        <div class="header_inner">
            <img class="header_logo" src="./assets/icons/Logo 02.svg" alt="Bestell App">
            <button class="menu_button" onclick="toggleMenu()" aria-label="Open menu">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <div class="header_menu" id="headerMenu">
                <a href="#burger" onclick="closeMenu()">Burger & Sandwiches</a>
                <a href="#pizza" onclick="closeMenu()">Pizza</a>
                <a href="#salad" onclick="closeMenu()">Salad</a>

            </div>
        </div>
    `;
}


function getRestaurantTemplate() {
    return /*html*/`
        <div class="hero">
            <img class="hero_image" src="./assets/img/hero.webp" alt="Burger & Pizza">
        </div>
        <div class="restaurant_info">
            <img class="restaurant_logo" src="./assets/img/logo.webp" alt="Burger">
            <div class="restaurant_title">
                <h1><span>Burger</span>House</h1>
                <div class="restaurant_rating">
                    <span class="star"><img src="./assets/icons/star.png" alt=""></span>
                    <strong>4.1</strong>
                    <small>(317)</small>
                </div>
            </div>
            <p>The best of Burgers, Pizza, and Greens, all in one great place.</p>
        </div>
        
    `;
}


function getCategoryTemplate(category, title, icon) {
    return /*html*/`
        <section class="category" id="${category}">
            <div class="category_bar">
                <div class="category_bar_inner">
                    <img class="category_icon" src="${icon}" alt="${title}">
                    <h2>${title}</h2>
                </div>
            </div>
            <div class="category_products" id="${category}Products"></div>
        </section>
    `;
}


function getAllCategoriesTemplate() {
    return /*html*/`
        ${getCategoryTemplate(
            "burger",
            "Burger & Sandwiches",
            "./assets/icons/Chanese 1.svg"
        )}

        ${getCategoryTemplate(
            "pizza",
            "Pizza",
            "./assets/icons/pizza 1.svg"
        )}

        ${getCategoryTemplate(
            "salad",
            "Salad",
            "./assets/icons/salad 1.svg"
        )}
    `;
}


function getProductTemplate(product) {
    return /*html*/`
        <article class="product_card">
            <img class="product_image" src="${product.image}" alt="${product.name}">
            <div class="product_info">
                <h3>${product.name}</h3>
                <small>${product.description}</small>
            </div>
            <div class="product_action">
                <strong>${formatPrice(product.price)}</strong>
                <button class="add_button" onclick="addToBasket(${product.id})" type="button">Add to basket</button>
            </div>
        </article>
    `;
}


function getBasketTemplate() {
    return /*html*/`
        <div class="basket_header">
            <h2>Your Basket</h2>
        </div>
        <div class="basket_empty" id="basketEmpty">
            <p>Nothing here yet. <br>Go ahead and choose something delicious!</p>
            <img class="empty_cart_icon" src="./assets/icons/basket.svg" alt="Empty basket">
        </div>
        <div class="basket_items" id="basketItems">

        </div>
    `;
}


function getBasketItemsTemplate(item){
    let itemTotal = item.price * item.amount;
    return/*html*/`
        <div class="basket_item">
            <strong class="basket_item_name">${item.name}</strong>
            <div class="basket_item_bottom">
                <div class="quantity_controls">
                    <button onclick="decreaseAmount(${item.id})" type="button">-</button>
                    <span>${item.amount}</span>
                    <button onclick="increaseAmount(${item.id})" type="button">+</button>
                </div>
                <strong class="basket_item_price">${formatPrice(itemTotal)}</strong>
                <button class="trash_button"onclick="removeFromBasket(${item.id})"type="button"><img src="./assets/icons/delete.svg"alt="Remove"></button>
            </div>
        </div>
    `;
}



