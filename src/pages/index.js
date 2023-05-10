import { FormValidator } from "../components/FormValidator.js";
import Card from "../components/Card.js";
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import { validationForm } from "../utils/constants.js";
import "./index.css";
import { Api } from "../components/Api.js";
import { PopupWithConfirmation } from "../components/PopupWithConfirmation.js";

const buttonEdit = document.querySelector(".profile__button-edit");
const nameInput = document.querySelector(".popup__input_type_name");
const aboutInput = document.querySelector(".popup__input_type_about");
const buttonAdd = document.querySelector(".profile__button-add");
const buttonAvatar = document.querySelector(".profile__avatar-box");


/**обьект Api */
const api = new Api({
  url: "https://nomoreparties.co/v1/cohort-65",
  headers: {
    authorization: "65d17e81-1fc6-4932-9a8f-ccbfe0018846",
    "Content-Type": "application/json",
  },
});

let userId;

/**отрисовка карточек */
Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([data, cardData]) => {
    userId = data._id;
    userInfo.setUserInfo(data);
    cardsContainer.renderItems(cardData);
  })
  .catch((err) => {
    console.log(err);
  });

/**класс о пользователе */
const userInfo = new UserInfo({
  profileName: ".profile__name",
  profileAbout: ".profile__about",
  profileAvatar: ".profile__avatar",
});

/**редактирование профиля */
const popupWithFormEdit = new PopupWithForm({
  popupSelector: ".popup-edit",
  handleFormSubmit: (data) => {
    return api
      .patchUserInfo(data)
      .then((res) => {
        userInfo.setUserInfo(res);
      })
      .catch((err) => {
        console.log(err);
      })
  }
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

/**редактироввание аватара */
const popupWithFormAvatar = new PopupWithForm({
  popupSelector: ".popup-avatar",
  handleFormSubmit: (data) => {
    return api
      .patchAvatarInfo(data)
      .then((res) => {
        userInfo.setUserInfo(res);
      })
      .catch((err) => {
        console.log(err);
      })
  }
});
popupWithFormAvatar.setEventListeners();

/**отправление форм аватара */
function hendleAvatarFormSubmit() {
  popupWithFormAvatar.open();
  formValidators["popup-form-avatar"].resetValidation();
}

/** создание карточки */
function createCard(cardData) {
  const card = new Card(
    cardData,
    userId,
    "#card-template",
    handleCardClick,
    handleLikeCard,
    handleDeleteLike,
    handleCardDelete
  );
  return card.generateCard();
}

/**попап удаления карточки */
const handleCardDelete = (cardId, card) => {
  popupConfirm.open(cardId, card);
};
/**на весь экран карточки*/
const handleCardClick = (name, link) => {
  popupFullScreen.open(name, link);
};

/**рендер карточек*/
const cardsContainer = new Section(
  {
    renderer: (cardData) => {
      const card = createCard(cardData);
      cardsContainer.addItem(card);
    },
  },
  ".cards"
);

/** добавление карточки */
const popupWithFormAdd = new PopupWithForm({
  popupSelector: ".popup-add",
  handleFormSubmit: (cardData) => {
    return api
      .addNewCard(cardData)
      .then((res) => {
        const card = createCard(res);
        cardsContainer.addItem(card);
      })
      .catch((err) => {
        console.log(err);
      })
  }
});
popupWithFormAdd.setEventListeners();

/**удаление карточки */
const popupConfirm = new PopupWithConfirmation({
  popupSelector: ".popup-trash",
  handleFormSubmit: (cardId, cardData) => {
    return api
      .deleteCard(cardId)
      .then(() => {
        cardData.handleButtonDelete();
      })
      .catch((err) => {
        console.log(err);
      });
  },
});
popupConfirm.setEventListeners();

/**функция добавления лайка */
function handleLikeCard(cardId, cardData) {
  api
    .getLike(cardId)
    .then((res) => {
      cardData.handleButtonLike();
      cardData.numberLikes.textContent = res.likes.length;
    })
    .catch((err) => {
      console.log(err);
    });
}
/**функция удаления лайка */
function handleDeleteLike(cardId, cardData) {
  api
    .deleteLike(cardId)
    .then((res) => {
      cardData.handleButtonLike();
      cardData.numberLikes.textContent = res.likes.length;
    })
    .catch((err) => {
      console.log(err);
    });
}

/** отправление форм карточки*/
function handleFormSubmitAdd() {
  popupWithFormAdd.open();
  formValidators["popup-form-add"].resetValidation();
}

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
buttonAvatar.addEventListener("click", hendleAvatarFormSubmit);
