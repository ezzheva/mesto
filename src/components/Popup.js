export default class Popup {
	constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        //this._buttonPopupCloseList = document.querySelectorAll(".popup__close");
    }

    open() {
        this._popup.classList.add("popup_opened");
        document.addEventListener("keydown", this._hendleCloseEsc);
    }

    close() {
        this._popup.classList.remove("popup_opened");
        document.removeEventListener("keydown", this._hendleCloseEsc); 
    }

/** закрытие попапов на Esc */
    _hendleCloseEsc = (evt) => {
        if (evt.key === "Escape") {
          this.close();
        }
    }
    
    setEventListeners() {
        /** универсальная закрытия попапаов на фон и крестик*/
        this._popup.addEventListener('mousedown', (evt) => {
            if (evt.target.classList.contains('popup_opened')) {
                this.close()
            }
            // проверка нажания на крестик
            if (evt.target.classList.contains('popup__close')) {
              this.close()
            }
        });
    }
}