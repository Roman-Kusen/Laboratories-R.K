//Мобильное-меню
document.addEventListener('DOMContentLoaded', () => {

const menu = document.querySelector(".menu-t");
const navHeader = document.querySelector(".nav-h");
const overlay = document.querySelector(".overlay");
const navLinks = document.querySelectorAll('.nav-h a');


function closeMenu (){
    menu.classList.remove("open");
    navHeader.classList.remove("open");
    overlay.classList.remove("open");
}
menu.addEventListener('click', () => {
    menu.classList.toggle("open");
    navHeader.classList.toggle("open");
    overlay.classList.toggle("open");
});

overlay.addEventListener('click', (e) => {
    closeMenu(e);
});



navLinks.forEach(link => {
    link.addEventListener('click', function () {
        if (window.innerWidth <= 768) {
            closeMenu();
        }
    });
});

});
