export default class Card {
  constructor(cardData, templateSelector, handleCardClick) {
    this._name = cardData.name;
    this._link = cardData.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    this._cardTemplate = document.querySelector(this._templateSelector).content;
    this._card = this._cardTemplate.querySelector(".card").cloneNode(true);

    return this._card;
  }

  generateCard() {
    this._elementCard = this._getTemplate();

    this._elementCardTitle = this._elementCard.querySelector(".card__title");
    this._elementCardImage = this._elementCard.querySelector(".card__img");
    this._buttonDelete = this._elementCard.querySelector(".card__delete");
    this._buttonLike = this._elementCard.querySelector(".card__like");

    this._elementCardImage.src = this._link;
    this._elementCardImage.alt = this._name;
    this._elementCardTitle.textContent = this._name;

    this._setEventListeners();

    return this._elementCard;
  }

  _handleButtonLike() {
    this._buttonLike.classList.toggle("card__like_active");
  }

  _handleButtonDelete() {
    this._elementCard.remove();
    this._elementCard = null;
  }

  _setEventListeners() {
    this._buttonLike.addEventListener("click", () => {
      this._handleButtonLike();
    });

    this._buttonDelete.addEventListener("click", () => {
      this._handleButtonDelete();
    });

    this._elementCardImage.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link);
    });
  }
}
