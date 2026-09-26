

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