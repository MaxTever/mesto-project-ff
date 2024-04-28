// const showInputError = (popupElement, inputElement, errorMessage) => {
//     inputElement.classList.add('popup__input_type_error');
//     const errorElement = popupElement.querySelector(`.${inputElement.id}-error`);
//     errorElement.textContent = errorMessage;
//     errorElement.classList.add('popup__input-error_active');
//     }
  
//   const hideInputError = (popupElement, inputElement) => {
//     inputElement.classList.remove('popup__input_type_error');
//     const errorElement = popupElement.querySelector(`.${inputElement.id}-error`);
//     errorElement.classList.remove('popup__input-error_active');
//     errorElement.textContent = '';
//   }
  
//   const isValidInput = () => {
//     if (!editFormElement.validity.valid) {
//       showInputError(popupList, popupInput, popupInput.validationMessage);  
//     } else {
//       hideInputError(popupList, popupInput);
//     }
//   }
  
  
//   popupInput.addEventListener('input', isValidInput);