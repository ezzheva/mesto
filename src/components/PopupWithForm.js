import Popup from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector(".popup__form");
    this._inputList = this._popup.querySelectorAll(".popup__input");
    this._submitButton = this._popup.querySelector(".popup__submit-button");
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
      // перед запросом сохраняем изначальный текст кнопки
      const initialText = this._submitButton.textContent;
      // меняем его, чтобы показать пользователю ожидание
      this._submitButton.textContent = 'Сохранение...';
      this._handleFormSubmit(this._getInputValues())
        .then(() => this.close()) // закрывается попап в `then`
        .finally(() => {
          this._submitButton.textContent = initialText;
        }) // в любом случае меняется текст кнопки обратно на начальный в `finally`
    });
  }

  close() {
    super.close();
    this._form.reset();
  }
}
