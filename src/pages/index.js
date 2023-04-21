import { FormValidator } from "../components/FormValidator.js";
import Card from "../components/Card.js";
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import "./index.css";

const buttonEdit = document.querySelector(".profile__button-edit");
const nameInput = document.querySelector(".popup__input_type_name");
const aboutInput = document.querySelector(".popup__input_type_about");
const buttonAdd = document.querySelector(".profile__button-add");

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

/**класс о пользователе */
const userInfo = new UserInfo({
  profileName: ".profile__name",
  profileAbout: ".profile__about",
});

/**редактирование профиля */
const popupWithFormEdit = new PopupWithForm({
  popupSelector: ".popup-edit",
  handleFormSubmit: (data) => {
    userInfo.setUserInfo({
      profileName: data["user-name"],
      profileAbout: data["about"],
    });
  },
});

popupWithFormEdit.setEventListeners();

/** отправление форм профиля*/
function handleProfileFormSubmit() {
  popupWithFormEdit.open();
  const user = userInfo.getUserInfo();
  nameInput.value = user.name;
  aboutInput.value = user.about;
  formValidators["popup-form"].resetValidation();
}

/** создание карточки */
function createCard(cardData) {
  const card = new Card(cardData, "#card-template", handleCardClick);
  return card.generateCard();
}

const handleCardClick = (name, link) => {
  popupFullScreen.open(name, link);
};

/**добавление карточки в массив*/
const section = new Section(
  {
    cardData: initialCards,
    renderer: (cardData) => {
      const cardElement = createCard(cardData);
      section.addItem(cardElement);
    },
  },
  ".cards"
);

section.renderItems();

/** добавление карточки */
const popupWithFormAdd = new PopupWithForm({
  popupSelector: ".popup-add",
  handleFormSubmit: (item) => {
    section.addItem(
      createCard({
        name: item["element-name"],
        link: item["element-link"],
      })
    );
  },
});
popupWithFormAdd.setEventListeners();

/** отправление форм карточки*/
const handleFormSubmitAdd = () => {
  popupWithFormAdd.open();
  formValidators["popup-form-add"].resetValidation();
};

/** открытие картинки на весь экран */
const popupFullScreen = new PopupWithImage(".popup_full-screen");
popupFullScreen.setEventListeners();

/**универсальные экземпляры валидаторов всех форм */
const formValidators = {}; //пустой обьект в котором будут лежать экземпляры

/** Включение валидации*/
const enableValidation = (validationForm) => {
  const formList = Array.from(
    document.querySelectorAll(validationForm.formSelector)
  );
  formList.forEach((formElement) => {
    //обьявляем переменную validator в которой лежит экземпляр
    const validator = new FormValidator(validationForm, formElement);
    // создаем переменную для строки которая сожержит значение атрибута нейм
    const formName = formElement.getAttribute("name");

    // обращаемся к пустому обьекту[его свойству]=кладем туда экземпляр
    formValidators[formName] = validator;
    validator.enableValidation();
  });
};

enableValidation(validationForm);

/**добавление обработчиков */
buttonEdit.addEventListener("click", handleProfileFormSubmit);
buttonAdd.addEventListener("click", handleFormSubmitAdd);
