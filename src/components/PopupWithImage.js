import Popup from './Popup.js'

export class PopupWithImage extends Popup {
    constructor(popupSelector){
        super(popupSelector);
        this._popupFullImage = document.querySelector(".popup__full-img");
        this._popupFullText = document.querySelector(".popup__full-text");
    }

    open(name, link){
        this._popupFullText.textContent = name;
        this._popupFullImage.src = link;
        this._popupFullImage.alt = name;
        super.open();
    }
}