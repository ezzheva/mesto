export class FormValidator {
  constructor(validationForm, formElement) {
    this._validationForm = validationForm;
    this._formElement = formElement;
    this._inputList = Array.from(
      this._formElement.querySelectorAll(this._validationForm.inputSelector)
    );
    this._buttonElement = this._formElement.querySelector(
      this._validationForm.submitButtonSelector
    );
  }

  /** функция добавления класса с ошибкой */
  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.add(this._validationForm.inputErrorClass);
    errorElement.classList.add(this._validationForm.errorClass);
    errorElement.textContent = errorMessage;
  }

  /** функция удаления класса с ошибкой*/
  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.remove(this._validationForm.inputErrorClass);
    errorElement.classList.remove(this._validationForm.errorClass);
    errorElement.textContent = "";
  }

  /** функция проверки валидности поля */
  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  /** функция добавления обработчиков всем полям формы */
  _setEventListeners() {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }

  /** функция проверки валидности всех полей для кнопки(возвращвет true или false) */
  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  /** функция состояния кнопки переключения */
  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._buttonElement.setAttribute("disabled", true);
      this._buttonElement.classList.add(
        this._validationForm.inactiveButtonClass
      );
    } else {
      this._buttonElement.removeAttribute("disabled");
      this._buttonElement.classList.remove(
        this._validationForm.inactiveButtonClass
      );
    }
  }

  /** функция очищения ошибок */
  resetValidation() {
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
    this._toggleButtonState();
  }

  enableValidation() {
    this._setEventListeners();
  }
}
