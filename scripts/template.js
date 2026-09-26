

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

