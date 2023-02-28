const buttonEdit = document.querySelector('.profile__button-edit');
const bottonPopupClose = document.querySelectorAll('.popup__close');
const popupEdit = document.querySelector('.popup-edit');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
const nameInput = document.querySelector('.popup__input_type_name');
const aboutInput = document.querySelector('.popup__input_type_about');
const formElementProfile = document.querySelector('.popup__form');

const buttonAdd = document.querySelector('.profile__button-add');
const popupAdd = document.querySelector('.popup-add');
const linkInput = document.querySelector('.popup__input_type_element-link');
const titleInput = document.querySelector('.popup__input_type_element-title');
const formElementAdd = document.querySelector('.popup__form-add');

const popupFullScreen = document.querySelector('.popup_full-screen');
const popupFullImage = document.querySelector('.popup__full-img');
const popupFullText = document.querySelector('.popup__full-text');

const cardTemplate = document.querySelector('#card-template').content;
const cardsContainer = document.querySelector('.cards');

/*** вывод карточек из массива*/
initialCards.forEach(function(card) {
  cardsContainer.prepend (createCard(card))
});

/*** создание карточек */ 
function createCard(card){
  const elementCard = cardTemplate.querySelector('.card').cloneNode(true);
  const elementCardTitle = elementCard.querySelector('.card__title');
  const elementCardImage = elementCard.querySelector('.card__img');
  const buttonDelete = elementCard.querySelector('.card__delete');
  const buttonLike = elementCard.querySelector('.card__like');

  elementCardImage.setAttribute('src', card.link);
  elementCardImage.setAttribute('alt', card.name);
  elementCardTitle.textContent = card.name;

  buttonDelete.addEventListener("click",() => { elementCard.remove();})
  buttonLike.addEventListener('click', () => { buttonLike.classList.toggle('card__like_active');})
  elementCardImage.addEventListener('click', function () {
    openPopup(popupFullScreen)
    popupFullText.textContent = card.name;
    popupFullImage.src = card.link;
    popupFullImage.alt = card.name;
  });
  
  return elementCard;
}

/***помещаем новую карточку в верстку*/
function addNewCard(card) {
  /***Создаем карточку на основе данных*/
const newCard = createCard(card);
  /***Помещаем ее в контейнер карточек*/
cardsContainer.prepend(newCard);
}

/*** отправка форм */
function handleProfileFormSubmit (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;
  evt.target.reset() 
  closePopup(popupEdit);
}

function handleFormSubmitAdd (evt) { 
  evt.preventDefault(); 
  const card = { name: titleInput.value, link: linkInput.value, alt: titleInput.value }
  addNewCard(card)
  evt.target.reset();
  closePopup(popupAdd);
}

/**универсальная функция закрытия попапов */
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function clickCrossBotton (evt) {
  const buttonCross = evt.target.closest('.popup')
  closePopup(buttonCross);
}

bottonPopupClose.forEach(function (item) {
  item.addEventListener('click', clickCrossBotton)
})

/***открытие  попапов*/
function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function openPopupEdit(nameInput,aboutInput) {
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
  openPopup(popupEdit);
}

/***добавление обработчиков */
buttonEdit.addEventListener('click', function(){
  openPopup(popupEdit);
});

buttonAdd.addEventListener('click', function(){
  openPopup(popupAdd);
});

formElementProfile.addEventListener('submit', handleProfileFormSubmit);

formElementAdd.addEventListener('submit', handleFormSubmitAdd);