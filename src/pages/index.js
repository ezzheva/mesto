import { FormValidator } from "../components/FormValidator.js";
import Card from "../components/Card.js";
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
// import { initialCards } from "../utils/constants.js";
import "./index.css";
import { Api } from "../components/Api.js";

const buttonEdit = document.querySelector(".profile__button-edit");
const nameInput = document.querySelector(".popup__input_type_name");
const aboutInput = document.querySelector(".popup__input_type_about");
const buttonAdd = document.querySelector(".profile__button-add");


const validationForm = {
  formSelector: ".popup__form", //сама форма
  inputSelector: ".popup__input", //импутЫ
  submitButtonSelector: ".popup__submit-button", // кнопка сохранить и создать
  inactiveButtonClass: "popup__submit-button_disabled", //неактивный класс кнопок
  inputErrorClass: "popup__input_type_error", //класс не валидного инпута
  errorClass: "popup__input-error_active", //информация об ошибке
};
/**обьект Api */
const api = new Api({
  url: "https://nomoreparties.co/v1/cohort-65",
  headers: {
    authorization: '65d17e81-1fc6-4932-9a8f-ccbfe0018846',
		'Content-Type': 'application/json'
  }
})
let userId;

/**отрисовка карточек */
Promise.all([api.getUserInfo(), api.getInitialCards()])
.then(
  ([data,cardData]) => {
    userId = data._id;
    userInfo.setUserInfo(data);
  
		cardsContainer.renderItems(cardData);
	})
	.catch((err) => {
    console.log(err)
  });

// api
// .getInitialCards()
// .then((res) => cardsContainer.renderItems(res))
// .catch((err) => {
//   console.log(err)
// });

// api
// .getUserInfo()
// .then((res) => userInfo.setUserInfo(res))
// .catch((err) => {
//   console.log(err)
// });

/**класс о пользователе */
const userInfo = new UserInfo({
  profileName: ".profile__name",
  profileAbout: ".profile__about",
});

/**редактирование профиля */
const popupWithFormEdit = new PopupWithForm({
  popupSelector: ".popup-edit",
  handleFormSubmit: (data) => {
      return api
      .patchUserInfo(data)
      .then ((res) => {
       userInfo.setUserInfo(res);
      //  popupWithFormEdit.close();
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

/** создание карточки */
function createCard(cardData) {
  const card = new Card(
    cardData,
     userId,
      "#card-template",
       handleCardClick,
       handleLikeCard,
       handleDeleteLike
       );
  return card.generateCard();
}
/**открытая карточка */
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
    return api.addNewCard(cardData)
      .then((res) => {
        const card = createCard(res) 
        cardsContainer.addItem(card);
    })
    .catch((err) => {
      console.log(err)
    })
   }
});
popupWithFormAdd.setEventListeners();

/**функция добавления лайка */
function handleLikeCard(cardId,card) {
	api.getLike(cardId)
  .then((res) => {
    card.handleButtonLike()
    card.numberLikes.textContent = res.likes.length;
  })
		.catch((err) => {
			console.log(err);
		});
}
/**функция удаления лайка */
function handleDeleteLike(cardId,card) {
	api.deleteLike(cardId)
  .then((res) => {
    card.handleButtonLike()
    card.numberLikes.textContent = res.likes.length;
  })

		.catch((err) => {
			console.log(err);
		});
}

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
