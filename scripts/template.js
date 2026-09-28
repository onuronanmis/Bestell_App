

function getHeaderTemplate() {
    return /*html*/`
        
        <div class="header-inner">
            <img class="header-logo" src="./assets/icons/logo 02.svg" alt="Bestell App">
            <button class="menu-button" onclick="toggleMenu()" type="button" aria-label="Open menu">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <nav class="header-menu" id="headerMenu">
                <a href="#burger" onclick="closeMenu()">Burger & Sandwiches</a>
                <a href="#pizza" onclick="closeMenu()">Pizza</a>
                <a href="#salad" onclick="closeMenu()">Salad</a>
            </nav>
        </div>
    `;
}


function getRestaurantTemplate() {
    return /*html*/`
        
        <div class="hero">
            <img class="hero-image" src="./assets/img/hero.webp" alt="Burger and Pizza">
        </div>
        <div class="restaurant-info">
            <img class="restaurant-logo" src="./assets/img/logo.webp" alt="Burger House">
            <div class="restaurant-title">
                <h1><span>Burger</span>House</h1>
                <div class="restaurant-rating">
                    <span class="star">★</span>
                    <strong>4.1</strong>
                    <small>(317)</small>
                </div>
            </div>
            <p>
                The best of Burgers, Pizza, and Greens,
                all in one great place.
            </p>
        </div>
    `;
}


function getCategoryTemplate(category, title, icon) {
    return /*html*/`
        
        <section class="category" id="${category}">
            <div class="category-bar">
                <div class="category-bar-inner">
                    <img class="category-icon"src="${icon}"alt="${title}">
                    <h2>${title}</h2>
                </div>
            </div>
            <div class="category-products" id="${category}Products"></div>

        </section>
    `;
}


function getProductTemplate(product, amount) {

    let buttonText = "Add to basket";
    if (amount > 0) {
        buttonText = `Added ${amount}`;
    }


    return /*html*/`
        
        <article class="product-card">
            <img class="product-image" src="${product.image}"alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <small>${product.description}</small>
            </div>
            <div class="product-action">
                <strong>${formatPrice(product.price)}</strong>
                <button class="add-button" onclick="addToBasket(${product.id})"type="button">${buttonText}</button>
            </div>
        </article>
    `;
}


function getBasketTemplate() {
    return /*html*/`
        
        <div class="basket-header">
            <h2>Your Basket</h2>
            <button class="basket-close" onclick="closeBasket()" type="button" aria-label="Close basket">&times;</button>
        </div>
        <div class="basket-empty" id="basketEmpty">
            <p>
                Nothing here yet.
                <br>
                Go ahead and choose something delicious!
            </p>
            <img class="empty-cart-icon" src="./assets/icons/basket.svg" alt="Empty basket">
        </div>
        <div class="basket-items" id="basketItems"></div>
        <div class="basket-summary"id="basketSummary">
            <div class="summary-row">
                <span>Subtotal</span>
                <span id="subtotal">0,00 €</span>
            </div>
            <div class="summary-row">
                <span>Delivery fee</span>
                <span>4,99 €</span>
            </div>
            <div class="summary-line"></div>
            <div class="summary-row summary-total">
                <strong>Total</strong>
                <strong id="total">0,00 €</strong>
            </div>
            <button class="buy-button" onclick="orderFood()" type="button">Buy now</button>

        </div>
    `;
}


function getBasketItemTemplate(item) {
    const itemTotal = item.price * item.amount;

    return /*html*/`

        <div class="basket-item">
            <strong class="basket-item-name">${item.name}</strong>
            <div class="basket-item-bottom">
                <div class="quantity-controls">
                    <button onclick="decreaseAmount(${item.id})" type="button">−</button>
                    <span>${item.amount}</span>
                    <button onclick="increaseAmount(${item.id})"type="button">+</button>
                </div>
                <strong class="basket-item-price">
                    ${formatPrice(itemTotal)}
                </strong>
                <button class="trash-button" onclick="removeFromBasket(${item.id})" type="button" aria-label="Remove product">
                    <img src="./assets/icons/delete.svg"alt="Remove">
                </button>
            </div>
        </div>
    `;
}


function getMobileNavigationTemplate() {
    return /*html*/`
        <button type="button">
            <img src="./assets/icons/home.svg"alt="Home">
        </button>
        <button type="button">
            <img src="./assets/icons/person.svg"alt="Profile">
        </button>
        <button type="button">
            <img src="./assets/icons/orders.svg"alt="Orders">
        </button>
        <button class="mobile-cart-button" onclick="openBasket()"type="button">
            <img src="./assets/icons/shopping_cart.svg"alt="Basket">
            <span class="cart-count"id="cartCount">0</span>
        </button>
    `;
}


function getConfirmationTemplate() {
    return /*html*/`
        <div class="confirmation-box">
            <button class="confirmation-close"onclick="closeConfirmation()"type="button"aria-label="Close confirmation">&times;</button>
            <img class="delivery-icon"src="./assets/icons/delivery.webp"alt="Delivery">
            <h2>Order confirmed!</h2>
            <p>Your food is on the way!</p>
        </div>
    `;
}


function getFooterTemplate() {
    return /*html*/`
        <div class="footer-inner">
            <span>© 2026 BurgerHouse</span>
            <a href="#">Imprint</a>
            <a href="#">Cookie Preferences</a>
        </div>
    `;
}