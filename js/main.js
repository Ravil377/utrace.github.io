const burger = document.querySelector('.js-burger');
const burgerMenu = document.querySelector('.js-burger-menu');
const linkBurger = document.querySelector('.js-hamburger-wrap');
const burgerOverlay = document.querySelector('.js-burger-overlay');
const body = document.body;
const burgerMenuButton = document.querySelector('.burger-menu__button');


const openBurgerMenu = () => {
    burgerMenu.classList.toggle("burger-menu_active");
    burger.classList.toggle('js-burger_active');
    linkBurger.classList.toggle('js-hamburger-wrap_active')
    body.classList.toggle('no-scroll');
    burgerOverlay.classList.toggle('burger-overlay_active');
    document.addEventListener("click", checkPressOverlay);
    document.addEventListener("keydown", checkKeyPress);
};

const burgerMenuClose = () => {
    burgerMenu.classList.remove("burger-menu_active");
    burger.classList.remove('js-burger_active');
    linkBurger.classList.remove('js-hamburger-wrap_active')
    body.classList.remove('no-scroll');
    burgerOverlay.classList.remove('burger-overlay_active');
    document.removeEventListener("keydown", burgerMenuClose);
    document.removeEventListener("click", checkPressOverlay);
};

const checkKeyPress = (e) => {
    if (e.code === "Escape") {
        burgerMenuClose();
    }
};

const checkPressOverlay = (e) => {
    if(e.target.closest('.overlay') && !e.target.closest('.js-burger')) {
        burgerMenuClose();
    }
};

burger.addEventListener("click", openBurgerMenu);
burgerMenuButton.addEventListener('click', () => {
    burgerMenuClose();
    document.getElementById("contact-form").scrollIntoView();
});