import { FormValidator } from "./FormValidator.js";
import Card from "./Card.js";

const buttonEdit = document.querySelector(".profile__button-edit");
const buttonPopupCloseList = document.querySelectorAll(".popup__close");
const popupEdit = document.querySelector(".popup-edit");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");
const nameInput = document.querySelector(".popup__input_type_name");
const aboutInput = document.querySelector(".popup__input_type_about");
const formElementProfile = document.forms["popup-form"];

const buttonAdd = document.querySelector(".profile__button-add");
const popupAdd = document.querySelector(".popup-add");
const linkInput = document.querySelector(".popup__input_type_element-link");
const titleInput = document.querySelector(".popup__input_type_element-title");
const formElementAdd = document.forms["popup-form-add"];

const cardsContainer = document.querySelector(".cards");

const popupList = document.querySelectorAll(".popup");

const popupFullScreen = document.querySelector(".popup_full-screen");
const popupFullImage = document.querySelector(".popup__full-img");
const popupFullText = document.querySelector(".popup__full-text");

const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

const validationForm = {
  formSelector: ".popup__form", //сама форма
  inputSelector: ".popup__input", //импутЫ
  submitButtonSelector: ".popup__submit-button", // кнопка сохранить и создать
  inactiveButtonClass: "popup__submit-button_disabled", //неактивный класс кнопок
  inputErrorClass: "popup__input_type_error", //класс не валидного инпута
  errorClass: "popup__input-error_active", //информация об ошибке
};

/** вывод карточек из массива*/
initialCards.forEach(addNewCard);

/** создание карточки */
function createCard(cardData){
  const card = new Card(cardData, "#card-template", handleCardClick);
  return card.generateCard();
}

/** помещаем новую карточку в верстку*/
function addNewCard(cardData) {
  const cardElement = createCard(cardData);
  cardsContainer.prepend(cardElement);
}

/** отправка форм */
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;
  closePopup(popupEdit);
}

function handleFormSubmitAdd(evt) {
  evt.preventDefault();
  addNewCard({ name: titleInput.value, link: linkInput.value });
  evt.target.reset();
  closePopup(popupAdd);
}

/** универсальная функция закрытия попапов */
function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeByKeyboard);
}

/** функция закрытия попапов на Esc */
function closeByKeyboard(evt) {
  if (evt.key === "Escape") {
    const keyboardEsc = document.querySelector(".popup_opened");
    closePopup(keyboardEsc);
  }
}

/** универсальная функция закрытия попапаов на фон и крестик*/
popupList.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
          closePopup(popup)
      }
      // проверка нажания на крестик
      if (evt.target.classList.contains('popup__close')) {
        closePopup(popup)
      }
  });
});

/** открытие попапов*/
function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closeByKeyboard);
}

function openPopupEdit() {
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
  formValidators["popup-form"].resetValidation()
  openPopup(popupEdit);
}

function openPopupAdd() {
  formValidators["popup-form-add"].resetValidation()
  openPopup(popupAdd);
}

function handleCardClick (name, link) {
  popupFullText.textContent = name;
  popupFullImage.src = link;
  popupFullImage.alt = name;
  openPopup(popupFullScreen);
}

/**универсальные экземпляры валидаторов всех форм */
const formValidators = {} //пустой обьект в котором будут лежать экземпляры

// Включение валидации
const enableValidation = (validationForm) => {
  const formList = Array.from(document.querySelectorAll(validationForm.formSelector))
  formList.forEach((formElement) => {
    //обьявляем переменную validator в которой лежит экземпляр
    const validator = new FormValidator(validationForm, formElement)
// создаем переменную для строки которая сожержит значение атрибута нейм
    const formName = formElement.getAttribute('name')

   // обращаемся к пустому обьекту[его свойству]=кладем туда экземпляр
    formValidators[formName] = validator;
   validator.enableValidation();
  });
};

enableValidation(validationForm);

/**добавление обработчиков */
buttonEdit.addEventListener("click", function () {
  openPopupEdit();
});

buttonAdd.addEventListener("click", function () {
  openPopupAdd();
});

formElementProfile.addEventListener("submit", handleProfileFormSubmit);

formElementAdd.addEventListener("submit", handleFormSubmitAdd);

export { openPopup };
