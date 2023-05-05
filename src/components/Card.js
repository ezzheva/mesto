export default class Card {
  constructor(
    cardData,
     userId,
      templateSelector,
      handleCardClick,
       handleLikeCard,
       handleDeleteLike) 
       {
    this._name = cardData.name;
    this._link = cardData.link;
    this._cardId = cardData._id;//id карточки
    this._likes = cardData.likes;
    this._userId = userId;
    //this._owner = cardData.ower._id
    
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    // this._handleCardDelete = handleCardDelete;
    this._handleLikeCard = handleLikeCard;
    this._handleDeleteLike = handleDeleteLike;
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
    this.numberLikes = this._elementCard.querySelector(".card__number-likes");

    this._elementCardImage.src = this._link;
    this._elementCardImage.alt = this._name;
    this._elementCardTitle.textContent = this._name;
    this.numberLikes.textContent = this._likes.length;

    this._setEventListeners();
    this._likeCard();


    return this._elementCard;
  }

  _likeCard() {
		if (this._likes.some((likes) => likes._id === this._userId)
		) {
			this._buttonLike.classList.add('card__like_active');
		}
	}
/** добавляем или убираем лайк */
  _clickLike(){
    if (this._buttonLike.classList.contains("card__like_active")){
      this._handleDeleteLike(this._cardId, this)
    } else {
      this._handleLikeCard(this._cardId, this)
    }
  }

  handleButtonLike() {
		this._buttonLike.classList.toggle('card__like_active');
	}

/**удаление */
  handleButtonDelete() {
    this._elementCard.remove();
    this._elementCard = null;
  }

  /**слушатели */
  _setEventListeners() {
    this._buttonLike.addEventListener("click", () => {
      this._clickLike();
    });

    this._buttonDelete.addEventListener("click", () => {
      this._handleButtonDelete();
    });

    this._elementCardImage.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link);
    });
  }
}
