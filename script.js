
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
    document.getElementById("products").innerHTML = getAllCategoriesTemplate();
    document.getElementById("basket").innerHTML = getBasketTemplate();
}


function renderProducts() {
    renderCategoryProducts("burger");
    renderCategoryProducts("pizza");
    renderCategoryProducts("salad");
}


function renderCategoryProducts(category) {
    let contentRef = document.getElementById(`${category}Products`);
    contentRef.innerHTML = "";
    for (let index = 0; index < products.length; index++) {
        if (products[index].category == category) {
            contentRef.innerHTML += getProductTemplate(products[index]);
        }        
    }
}


function toggleMenu() {
    document.getElementById("headerMenu").classList.toggle("header_menu_open");
    
}


function closeMenu() {
    document.getElementById("headerMenu").classList.remove("header_menu_open");

}


function formatPrice(price) {
    return price.toFixed(2).replace(".", ",") + "€";
}


function addToBasket(productId) {
    let basketItem = getBasketItem(productId);
    if (basketItem) {
        basketItem.amount++;
        renderBasket();
        return;
    }
    for (let index = 0; index < products.length; index++) {
        if (products[index].id == productId) {
            basket.push({
                id: products[index].id,
                name: products[index].name,
                price: products[index].price,
                amount: 1
            })
            renderBasket();
            return;
        }
    }
}


function getBasketItem(productId) {
    for (let index = 0; index < basket.length; index++) {
        if (basket[index].id == productId) {
            return basket[index];
        }
    }
    return null;
}


function renderBasket() {
    let basketItems = document.getElementById("basketItems");
    let basketEmpty = document.getElementById("basketEmpty");
    let basketSummary = document.getElementById("basketSummary");
    basketItems.innerHTML = "";
    if (basket.length == 0) {
        basketEmpty.style.display = "flex";
        basketSummary.style.display = "none"
    } else {
        basketEmpty.style.display = "none";
        basketSummary.style.display = "block"
        for (let index = 0; index < basket.length; index++) {
            basketItems.innerHTML += getBasketItemsTemplate(basket[index]);
        }
    }
    updateBasketPrice();
}


function updateBasketPrice() {
    let subtotal = 0;
    for (let index = 0; index < basket.length; index++) {
        subtotal += basket[index].price * basket[index].amount;
    }
    let total = subtotal + deliveryFee;
    document.getElementById("subtotal").textContent = formatPrice(subtotal);
    document.getElementById("total").textContent = formatPrice(total);
}


function increaseAmount(productId) {
    let basketItem = getBasketItem(productId);
    if (basketItem) {
        basketItem.amount++;
        renderBasket();
    }
}


function decreaseAmount(productId) {
    let basketItem = getBasketItem(productId);
    if (basketItem) {
        basketItem.amount--;
        if (basketItem.amount <= 0) {
            removeFromBasket(productId);
            return;
        }
        renderBasket();
    }
}


function removeFromBasket(productId) {
    for (let index = 0; index < basket.length; index++) {
        if (basket[index].id == productId) {
            basket.splice(index, 1);
            renderBasket();
            return;
        }
    }
}





