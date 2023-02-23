const buttonEdit = document.querySelector('.profile__button-edit');
const popupClose = document.querySelector('.popup__close');
const popupEdit = document.querySelector('.popup-edit');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
const nameInput = document.querySelector('.popup__input_type_name');
const aboutInput = document.querySelector('.popup__input_type_about');
const formElement = document.querySelector('.popup__form');

const buttonAdd = document.querySelector('.profile__button-add');
const popupAdd = document.querySelector('.popup-add');
const popupCloseAdd = document.querySelector('.popup__close-add');
const linkInput = document.querySelector('.popup__input_type_element-link');
const titleInput = document.querySelector('.popup__input_type_element-title');
const formElementAdd = document.querySelector('.popup__form-add');

const cardsContainer = document.querySelector('.cards');
const card = document.querySelector('.card');

const popupFullScreen = document.querySelector('.popup_full-screen');
const popupFullImage = document.querySelector('.popup__full-img');
const popupFullText = document.querySelector('.popup__full-text');
const popupCloseFullScreen = document.querySelector('.popup__close-full-screen');

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


// открытие и закрытие попапов
buttonEdit.addEventListener('click', function(){
  openPopup(popupEdit);
});

popupClose.addEventListener('click', function(){
  closePopup(popupEdit);
});

buttonAdd.addEventListener('click', function(){
  openPopup(popupAdd);
});

popupCloseAdd.addEventListener('click', function(){
  closePopup(popupAdd)
});

function openPopup(popup) {
  popup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function openPopupFullScreen(name, link){
  popupFullImage.src = link;
  popupFullImage.alt = name;
  popupFullText.textContent = popupFullImage.alt;
  openPopup(popupFullScreen);
}


popupCloseFullScreen.addEventListener('click', function(){
  closePopup(popupFullScreen)
});


// отправка форм
formElement.addEventListener('submit', handleFormSubmit); 

function handleFormSubmit (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileAbout.textContent = aboutInput.value;
    closePopup(popupEdit);
}

 formElementAdd.addEventListener('submit', handleFormSubmitAdd); 

 function handleFormSubmitAdd (evt) {
    evt.preventDefault();
    const name = titleInput.value
    const link = linkInput.value
    renderCard(name, link);
     titleInput.value = ' '; 
     linkInput.value = ' ';
    closePopup(popupAdd);
 }


// создание карточек
function createCard(name, link){
 const cardTemplate = document.querySelector('#card-template').content;   //обращаемся к свойству content
 const cardElement = cardTemplate.querySelector('.card').cloneNode(true); //клонируем содержимое
 const cardImage = cardElement.querySelector('.card__img');               //наполняем содержимыи
 cardImage.src = link;                                                    //присваеваем ссылку картинке
 cardImage.alt = name;                                                   
 cardElement.querySelector('.card__title').textContent = name;            //присваиваем имя названию
 cardElement.querySelector('.card__like').addEventListener('click', clickLike);
 cardElement.querySelector('.card__delete').addEventListener('click', clickDel);
 cardImage.addEventListener('click', function(){
                                    openPopupFullScreen(name, link)
                                  });

  return cardElement;
}

//функция для того, чтобы можно было помещать новую карточку в верстку:
  function renderCard(name, link){
  // Создаем карточку на основе данных
  const cardElement = createCard(name, link);
  // Помещаем ее в контейнер карточек
  cardsContainer.prepend(cardElement);
}

//функция лайка
function clickLike(evt){
 evt.target.classList.toggle('card__like_active');
}

//удаление карточки
function clickDel(evt){
  evt.target.closest('.card').remove();
}

//вывод карточек из массива
initialCards.forEach(function(card){
   renderCard(card.name, card.link);
});