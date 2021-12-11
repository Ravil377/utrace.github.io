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





class FormValidator {
    constructor(settings, form) {
        this._settings = settings;
        this._form = form;
        this._inputList = Array.from(this._form.querySelectorAll(this._settings.inputSelector));
        this._buttonElement = this._form.querySelector(this._settings.submitButtonSelector);
    }

    enableValidation() {
        this._disableSubmitButton();
        this._form.addEventListener("submit", (evt) => {
            evt.preventDefault();
        });
        this._setEventListener(this._form);
    }

    _setEventListener() {
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener("input", () => {
                this._toggleButtonState();
            });
        });
        this._form.addEventListener("reset", () => {
            this._disableSubmitButton();
        });
    }

    _hasInvalidInput() {
        return this._inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    }

    _toggleButtonState() {
        this._disableSubmitButton();

        if (this._hasInvalidInput(this._inputList)) {
            this._disableSubmitButton();
        } else {
            this._buttonElement.removeAttribute("disabled");
            this._buttonElement.classList.remove(this._settings.inactiveButtonClass);
        }
    }

    _disableSubmitButton() {
        this._buttonElement.setAttribute("disabled", true);
        this._buttonElement.classList.add(this._settings.inactiveButtonClass);
    }
}

const forma = document.querySelector('.forma');
const validation = {
    formSelector: ".forma",
    inputSelector: ".forma__input",
    submitButtonSelector: ".forma__button",
    inactiveButtonClass: "forma__button_inactive",
};

const form = new FormValidator(validation, forma);
form.enableValidation();

const formaButton = document.querySelector('.forma__button');
const buttonOk = document.querySelector('.js-button__ok');
let timeoutID;

const closeThanksPopup = () => {
    thanksPopup.classList.remove('css-1qwgrea-OverlayElement_active');
    buttonOk.removeEventListener('click', closeThanksPopup);
    clearTimeout(timeoutID);
}

const sendForm = (e) => {
    e.preventDefault;
    thanksPopup.classList.add('css-1qwgrea-OverlayElement_active');
    buttonOk.addEventListener('click', closeThanksPopup);
    timeoutID = setTimeout(closeThanksPoopup, 5000);
}




formaButton.addEventListener('click', sendForm);

const thanksPopup = document.querySelector('.css-1qwgrea-OverlayElement');



