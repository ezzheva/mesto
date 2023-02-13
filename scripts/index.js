let buttonEdit = document.querySelector('.profile__button-edit');
let popupClose = document.querySelector('.popup__close');
let popupEdit = document.querySelector('.popup');
let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');
let nameInput = document.querySelector('.popup__input_type_name');
let aboutInput = document.querySelector('.popup__input_type_about');
let formElement = document.querySelector('.popup__form');

buttonEdit.addEventListener('click', function(){
  openPopup(popupEdit);
});

popupClose.addEventListener('click', function(){
  closePopup(popupEdit);
});

function openPopup(popup) {
  popup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

formElement.addEventListener('submit', handleFormSubmit); 

function handleFormSubmit (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileAbout.textContent = aboutInput.value;
    closePopup(popupEdit);
}