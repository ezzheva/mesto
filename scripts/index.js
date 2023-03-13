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

const cardTemplate = document.querySelector("#card-template").content;
const cardsContainer = document.querySelector(".cards");
const card = cardTemplate.querySelector(".card");

const popupList = document.querySelectorAll(".popup");
const buttonCreate = document.querySelector('popup__submit-button')

/*** вывод карточек из массива*/
initialCards.forEach(function (cardData) {
  cardsContainer.prepend( createCard(cardData) );
});

/*** создание карточек */
function createCard(cardData) {
  const elementCard = card.cloneNode(true);
  const elementCardTitle = elementCard.querySelector(".card__title");
  const elementCardImage = elementCard.querySelector(".card__img");
  const buttonDelete = elementCard.querySelector(".card__delete");
  const buttonLike = elementCard.querySelector(".card__like");

  elementCardImage.src = cardData.link;
  elementCardImage.alt = cardData.name;
  elementCardTitle.textContent = cardData.name;

  buttonDelete.addEventListener("click", () => {
    elementCard.remove();
  });

  buttonLike.addEventListener("click", () => {
    buttonLike.classList.toggle("card__like_active");
  });

  elementCardImage.addEventListener("click", function () {
    openPopup(popupFullScreen);
    popupFullText.textContent = cardData.name;
    popupFullImage.src = cardData.link;
    popupFullImage.alt = cardData.name;
  });

  return elementCard;
}

/***помещаем новую карточку в верстку*/
function addNewCard(cardData) {
  const newCard = createCard(cardData);
  cardsContainer.prepend(newCard);
}

/*** отправка форм */
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;
  evt.target.reset();
  closePopup(popupEdit);
}

function handleFormSubmitAdd(evt) {
  evt.preventDefault();
  const cardData = {
    name: titleInput.value,
    link: linkInput.value,
    alt: titleInput.value,
  };
  addNewCard(cardData);
  evt.target.reset();
  closePopup(popupAdd);
}

/**универсальная функция закрытия попапов */
function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeByKeyboard);
  document.removeEventListener("click", closeByOverlay);
}

/**функция закрытия на крестик */
function handleCloseButtonClick(evt) {
  const buttonCross = evt.target.closest(".popup");
  closePopup(buttonCross);
}

/**функция закрытия попапов на Esc */
function closeByKeyboard (evt) {
  if (evt.key === "Escape") {
    const keyboardEsc = document.querySelector('.popup_opened')
      closePopup(keyboardEsc)
    }
  }  

/**функция закрытия попапаов на фон */
function closeByOverlay(evt) {
  if (evt.target.classList.contains('popup_opened')) {
    closePopup(evt.target);
  }
}

/***открытие попапов*/
function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closeByKeyboard);
  popup.addEventListener("click", closeByOverlay);
}

function openPopupEdit() {
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
  openPopup(popupEdit);
}

function openPopupAdd(){
  resetError(popupAdd, validationForm);
}

/***добавление обработчиков */
buttonEdit.addEventListener("click", function () {
  openPopupEdit();
});

buttonAdd.addEventListener("click", function () {
  openPopupAdd();
  openPopup(popupAdd);
});

buttonPopupCloseList.forEach(function (item) {
  item.addEventListener("click", handleCloseButtonClick);
});

formElementProfile.addEventListener("submit", handleProfileFormSubmit);

formElementAdd.addEventListener("submit", handleFormSubmitAdd);
