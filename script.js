
//init

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







