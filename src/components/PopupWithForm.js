import Popup from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector(".popup__form");
    this._inputList = this._popup.querySelectorAll(".popup__input");
    this._buttonSubmit = this._popup.querySelector(".popup__submit-button");
    this._textButtonSubmit = this._buttonSubmit.textContent;
  }

  _getInputValues() {
    const formValues = {};
    // добавляем в этот объект значения всех полей
    this._inputList.forEach((input) => {
      formValues[input.name] = input.value;
    });
    // возвращаем объект значений
    return formValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this.close();
    });
  }

  close() {
    super.close();
    this._form.reset();
  }

  /** изменение кнопки отправки*/
  changeButtonSubmit(loading){
    if (loading) {
      this._buttonSubmit.textContent = "Сохранение..."
    } else {
      this._buttonSubmit.textContent = this._textButtonSubmit;
    }
  }
}
