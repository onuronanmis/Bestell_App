const basket = [];
const deliveryFee = 4.99;


function init() {
    renderStaticContent();
    renderProducts();
    renderBasket();
}


function renderStaticContent() {
    document.getElementById("header").innerHTML = getHeaderTemplate();
    document.getElementById("restaurant").innerHTML = getRestaurantTemplate();
    document.getElementById("products").innerHTML =
        getCategoryTemplate("burger","Burger","./assets/icons/chanese1.webp")+
        getCategoryTemplate("pizza","Pizza","./assets/icons/pizza1.webp")+
        getCategoryTemplate("salad","Salad","./assets/icons/salad1.webp");
    document.getElementById("basket").innerHTML = getBasketTemplate();
    document.getElementById("mobileNavigation").innerHTML = getMobileNavigationTemplate();
    document.getElementById("orderConfirmation").innerHTML = getConfirmationTemplate();
    document.getElementById("footer").innerHTML = getFooterTemplate();
}


function renderProducts() {
    renderCategory("burger");
    renderCategory("pizza");
    renderCategory("salad");
}


function renderCategory(category) {
    const container = document.getElementById(category + "Products");
    const filteredProducts = products.filter(product => product.category === category);
    container.innerHTML = "";
    filteredProducts.forEach(product => {
        const amount = getProductAmount(product.id);
        container.innerHTML += getProductTemplate(product,amount);
    });
}


function formatPrice(price) {
    return price
        .toFixed(2)
        .replace(".", ",") + " €";
}


function getProductAmount(productId) {
    const item = basket.find(item => item.id === productId);
    if (item) {
        return item.amount;
    }
    return 0;
}


function addToBasket(productId) {
    const product = products.find(product => product.id === productId);
    if (!product) {
        return;
    }
    const basketItem = basket.find(item => item.id === productId);
    if (basketItem) {
        basketItem.amount++;
    } else {
        basket.push({ id: product.id, name: product.name, price: product.price, amount: 1});
    }
    renderProducts();
    renderBasket();
    openBasket();
}


function changeAmount(productId, change) {
    const item = basket.find(item => item.id === productId);
    if (!item) {
        return;
    }
    item.amount += change;
    if (item.amount <= 0) {
        removeFromBasket(productId);
        return;
    }
    renderProducts();
    renderBasket();
}


function removeFromBasket(productId) {
    const index = basket.findIndex(item => item.id === productId);
    if (index !== -1) {
        basket.splice(index, 1);
    }
    renderProducts();
    renderBasket();
}


function renderBasket() {
    const basketItems = document.getElementById("basketItems");
    const basketEmpty = document.getElementById("basketEmpty");
    const basketSummary = document.getElementById("basketSummary");
    basketItems.innerHTML = "";
    if (basket.length === 0) {
        basketEmpty.style.display = "flex";
        basketSummary.style.display = "none";
    } else {
        basketEmpty.style.display = "none";
        basketSummary.style.display = "block";
        basket.forEach(item => {
            basketItems.innerHTML += getBasketItemTemplate(item);
        });
    }
    updateBasketPrice();
    updateCartCount();
}


function updateBasketPrice() {
    let subtotal = 0;
    let total = 0;
    const buyButton = document.querySelector(".buy-button");
    basket.forEach(item => {subtotal += item.price * item.amount;});
    if (basket.length > 0) {
        total = subtotal + deliveryFee;
    }
    document.getElementById("subtotal").textContent = formatPrice(subtotal);
    document.getElementById("total").textContent = formatPrice(total);
    if (basket.length > 0) {
        buyButton.textContent = `Buy now (${formatPrice(total)})`;
    } else {
        buyButton.textContent = "Buy now";
    }
}


function updateCartCount() {
    let totalAmount = 0;
    basket.forEach(item => {totalAmount += item.amount;});
    document.getElementById("cartCount").textContent = totalAmount;
}


function openBasket() {
    document.getElementById("basket").classList.add("basket-open");
    if (window.innerWidth <= 768) {
        document.getElementById("basketOverlay").classList.add("basket-overlay-visible");
    }
}


function closeBasket() {
    document.getElementById("basket").classList.remove("basket-open");
    document.getElementById("basketOverlay").classList.remove("basket-overlay-visible");
}


function toggleMenu() {
    document.getElementById("headerMenu").classList.toggle("header-menu-open");
}


function closeMenu() {
    document.getElementById("headerMenu").classList.remove("header-menu-open");
}


function orderFood() {
    if (basket.length === 0) {
        return;
    }
    closeBasket();
    basket.length = 0;
    renderProducts();
    renderBasket();
    document.getElementById("orderConfirmation").classList.add("confirmation-visible");
}


function closeConfirmation() {
    document.getElementById("orderConfirmation").classList.remove("confirmation-visible");
}