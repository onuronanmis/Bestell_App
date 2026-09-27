
const basket = [];

function init() {
    renderStaticContent();
    renderProducts();

}


function renderStaticContent() {
    document.getElementById("header").innerHTML = getHeaderTemplate();
    document.getElementById("restaurant").innerHTML = getRestaurantTemplate();
    document.getElementById("products").innerHTML = getAllCategoriesTemplate();
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
        console.log(basket);
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
            console.log(basket);
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





