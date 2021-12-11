const burgers = document.querySelectorAll('.js-burger');
const burgerMenu = document.querySelector('.js-burger-menu');
const linkBurger = document.querySelector('.js-hamburger-wrap');
const burgerOverlay = document.querySelector('.js-burger-overlay');
const body = document.body;
const burgerMenuButton = document.querySelector('.burger-menu__button');


const openBurgerMenu = (burgerButton) => {
    burgerMenu.classList.toggle("burger-menu_active");
    burgerButton.classList.toggle('js-burger_active');
    linkBurger.classList.toggle('js-hamburger-wrap_active');
    body.classList.toggle('no-scroll');
    burgerOverlay.classList.toggle("burger-overlay_active");
    document.addEventListener("click", (e) => checkPressOverlay(e, burgerButton));
    document.addEventListener("keydown", (e) => checkKeyPress(e, burgerButton));
    burgerMenuButton.addEventListener('click', () => scrollToForm(burgerButton));
};

const scrollToForm = (burgerButton) => {
    burgerMenuClose(burgerButton);
    document.getElementById("contact-form").scrollIntoView();
}

const burgerMenuClose = (burgerButton) => {
    burgerMenu.classList.remove("burger-menu_active");
    burgerButton.classList.remove('js-burger_active');
    linkBurger.classList.remove('js-hamburger-wrap_active');
    body.classList.remove('no-scroll');
    burgerOverlay.classList.remove('burger-overlay_active');
    document.removeEventListener("keydown", (e) => checkKeyPress(e, burgerButton));
    document.removeEventListener("click", (e) => checkPressOverlay(e, burgerButton));
};

const checkKeyPress = (e, burgerButton) => {
    if (e.code === "Escape") {
        burgerMenuClose(burgerButton);
    }
};

const checkPressOverlay = (e, burgerButton) => {
    if(e.target.closest('.overlay') && !e.target.closest('.js-burger')) {
        burgerMenuClose(burgerButton);
    }
};

burgers.forEach(burger => {
    burger.addEventListener("click", () => openBurgerMenu(burger));
})


burgerMenuButton.addEventListener('click', () => {
    document.getElementById("contact-form").scrollIntoView();
    burgerMenuClose();
});
