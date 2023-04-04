import {FormValidator} from "./FormValidator.js";
import Card from "./Card.js";

const buttonEdit = document.querySelector(".profile__button-edit");
const buttonPopupCloseList = document.querySelectorAll(".popup__close");
const popupEdit = document.querySelector(".popup-edit");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");
const nameInput = document.querySelector(".popup__input_type_name");
const aboutInput = document.querySelector(".popup__input_type_about");
const formElementProfile = document.querySelector(".popup__form");

const buttonAdd = document.querySelector(".profile__button-add");
const popupAdd = document.querySelector(".popup-add");
const linkInput = document.querySelector(".popup__input_type_element-link");
const titleInput = document.querySelector(".popup__input_type_element-title");
const formElementAdd = document.querySelector(".popup__form-add");

const popupFullScreen = document.querySelector(".popup_full-screen");
const popupFullImage = document.querySelector(".popup__full-img");
const popupFullText = document.querySelector(".popup__full-text");

const cardsContainer = document.querySelector(".cards");

const popupList = document.querySelectorAll(".popup");

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const validationForm = {
  formSelector: '.popup__form', //сама форма
  inputSelector: '.popup__input', //импутЫ
  submitButtonSelector: '.popup__submit-button', // кнопка сохранить и создать
  inactiveButtonClass: 'popup__submit-button_disabled', //неактивный класс кнопок
  inputErrorClass: 'popup__input_type_error', //класс не валидного инпута
  errorClass: 'popup__input-error_active' //информация об ошибке
}



/** вывод карточек из массива*/
initialCards.forEach(function (cardData) {
  addNewCard(cardData)
});

/** помещаем новую карточку в верстку*/
function addNewCard(cardData) {
  const card = new Card(cardData,"#card-template");
  cardsContainer.prepend(card.generateCard());
  closePopup(popupAdd);
}

/** отправка форм */
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;
  evt.target.reset();
  closePopup(popupEdit);
}

function handleFormSubmitAdd(evt) {
  evt.preventDefault();
  addNewCard({name: titleInput.value, link: linkInput.value})
  evt.target.reset();
  closePopup(popupAdd);
}

/** универсальная функция закрытия попапов */
function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeByKeyboard);
}

/** функция закрытия на крестик */
function handleCloseButtonClick(evt) {
  const buttonCross = evt.target.closest(".popup");
  closePopup(buttonCross);
}

/** функция закрытия попапов на Esc */
function closeByKeyboard (evt) {
  if (evt.key === "Escape") {
    const keyboardEsc = document.querySelector(".popup_opened")
      closePopup(keyboardEsc)
    }
  }  

/** функция закрытия попапаов на фон */
function closeByOverlay(evt) {
  if (evt.target.classList.contains("popup_opened")) {
    closePopup(evt.target);
  }
}

/** открытие попапов*/
function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closeByKeyboard);
}

function openPopupEdit() {
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
  formValidatorEdit.resetError(formElementProfile);
  openPopup(popupEdit);
}

function openPopupAdd(){
  formValidatorAdd.resetError(formElementAdd);
  openPopup(popupAdd);
}

/**добавление обработчиков */
const formValidatorEdit = new FormValidator(validationForm, document.querySelector(".popup__form"));
formValidatorEdit.enableValidation();

const formValidatorAdd = new FormValidator(validationForm, document.querySelector(".popup__form-add"))
formValidatorAdd.enableValidation();

buttonEdit.addEventListener("click", function () {
  openPopupEdit();
});

buttonAdd.addEventListener("click", function () {
  openPopupAdd();
  openPopup(popupAdd);
});

popupList.forEach(function (item) {
  item.addEventListener("click", closeByOverlay)
});

buttonPopupCloseList.forEach(function (item) {
  item.addEventListener("click", handleCloseButtonClick);
});

formElementProfile.addEventListener("submit", handleProfileFormSubmit);

formElementAdd.addEventListener("submit", handleFormSubmitAdd);

export {openPopup};