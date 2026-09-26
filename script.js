
//init

function init() {
    renderStaticContent();

}


function renderStaticContent() {
    document.getElementById("header").innerHTML = getHeaderTemplate();
}


function toggleMenu() {
    document.getElementById("headerMenu").classList.toggle("header_menu_open");
}


function closeMenu() {
    document.getElementById("headerMenu").classList.remove("header_menu_open");
}




