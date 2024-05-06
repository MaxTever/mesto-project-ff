// const validationConfig = {
//     formSelector: '.popup__form',
//     inputSelector: '.popup__input',
//     submitButtonSelector: '.popup__button',
//     inactiveButtonClass: 'popup__button_disabled',
//     inputErrorClass: 'popup__input_type_error',
//     errorClass: 'popup__error_visible'
//   }

const showInputError = (formElement, inputElement, errorMessage, validationConfig) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(validationConfig.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(validationConfig.errorClass);
    };


  
const hideInputError = (formElement, inputElement, validationConfig) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(validationConfig.inputErrorClass);
    errorElement.classList.remove(validationConfig.errorClass);
    errorElement.textContent = '';
  };
  
const isValidInput = (formElement, inputElement, validationConfig) => {

    if (inputElement.validity.patternMissmatch) {
        inputElement.setCustomValidity(inputElement.dataset.errorMessage);
    } else {
        inputElement.setCustomValidity('');
    }

    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage, validationConfig);  
    } else {
      hideInputError(formElement, inputElement, validationConfig);
    }
  };
  
  
const setEventListners = (formElement, validationConfig) => {
    const inputList = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));
    const buttonElement = formElement.querySelector(validationConfig.submitButtonSelector);

    toggleButtonState(inputList, buttonElement, validationConfig);

    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            isValidInput(formElement, inputElement, validationConfig);
            toggleButtonState(inputList, buttonElement, validationConfig);
        });
    });
  };

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
};



const disableSubmitButton = (buttonElement, validationConfig) => {
  buttonElement.classList.add(validationConfig.inactiveButtonClass);
  buttonElement.disabled = true;
};


const toggleButtonState = (inputList, buttonElement, validationConfig) => {
    if (hasInvalidInput(inputList)) {
        disableSubmitButton(buttonElement, validationConfig);
    } else {    
        buttonElement.disabled = false; 
        buttonElement.classList.remove(validationConfig.inactiveButtonClass); 
    }
};


  export const enableValidation = (validationConfig) => {
    const formList = Array.from(document.querySelectorAll(validationConfig.formSelector));
    formList.forEach((inputSelector) => {
        inputSelector.addEventListener('submit', function (evt) {
            evt.preventDefault();
          });

        setEventListners(inputSelector, validationConfig);
    });
  };

  export function clearValidation (formElement, validationConfig) {
    const inputList = Array.from(
        formElement.querySelectorAll(validationConfig.inputSelector)
      );
      const submitButton = formElement.querySelector(validationConfig.submitButtonSelector);
    
      inputList.forEach((input) => {
        hideInputError(formElement, input, validationConfig);
      });
    
      disableSubmitButton(submitButton, validationConfig);
    
};
