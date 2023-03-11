const validationForm = {
    formSelector: '.popup__form', //сама форма
    inputSelector: '.popup__input', //импутЫ
    submitButtonSelector: '.popup__submit-button', // кнопка сохранить и создать
    inactiveButtonClass: 'popup__submit-button_disabled', //неактивный класс кнопок
    inputErrorClass: 'popup__input_type_error', //класс не валидного инпута
    errorClass: 'popup__input-error_active' //информация об ошибке
}

/**функция добавления класса с ошибкой */
function showInputError(formElement, inputElement, errorMessage, validationForm) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(validationForm.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(validationForm.errorClass);
};

/** функция удаления класса с ошибкой*/
function hideInputError(formElement, inputElement, validationForm) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(validationForm.inputErrorClass)
    errorElement.classList.remove(validationForm.errorClass); 
    errorElement.textContent = '';
};

/**функция проверки валидности поля */
function checkInputValidity(formElement, inputElement, validationForm) {
    if (!inputElement.validity.valid){
        showInputError(formElement, inputElement, inputElement.validationMessage, validationForm);
    } else {
        hideInputError(formElement, inputElement, validationForm);
    }
};

/** функция добавления обработчиков всем полям формы */
function setEventListeners(formElement, validationForm) {
    const inputList = Array.from(formElement.querySelectorAll(validationForm.inputSelector));
    const buttonElement = formElement.querySelector(validationForm.submitButtonSelector)

    toggleButtonState(inputList, buttonElement, validationForm);
    
    inputList.forEach(function(inputElement) {
        inputElement.addEventListener('input', function () {
            checkInputValidity (formElement, inputElement, validationForm);
            toggleButtonState(inputList, buttonElement, validationForm);
        });
    });
};

/**функция проверки валидности всех полей для кнопки(возвращвет true или false) */
function hasInvalidInput(inputList) {
    return inputList.some(function (inputElement) {
        return !inputElement.validity.valid
    });
};

/** функция состояния кнопки переключения */
function toggleButtonState(inputList, buttonElement, validationForm) {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(validationForm.inactiveButtonClass)
        buttonElement.setAttribute('disabled', true);
    } else {
        buttonElement.classList.remove(validationForm.inactiveButtonClass) 
        buttonElement.removeAttribute('disabled');
    }
};

/** добавление обработчиков всем формам*/
function enableValidation(validationForm) {
    const formList = Array.from(document.querySelectorAll(validationForm.formSelector));
    formList.forEach(function (formElement) {
        formElement.addEventListener('submit', function (evt){
            evt.preventDefault();
        })
          setEventListeners(formElement, validationForm);
    })
}

enableValidation(validationForm);