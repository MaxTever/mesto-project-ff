import "../pages/index.css";
import { createCard, removeCard, deleteCard } from './card';
import { setCloseModalByClickListeners } from './modal';
import { likeCard } from "./card"; 
import { openPopup, closePopup, closeEscPopup, closePopupBtn } from './modal';
import { cardsContainer } from "./card";
import { cardTemplate } from "./cards";
import { enableValidation } from "./validation";
import { clearValidation } from "./validation";
import { editNewAvatar, getUser, patchEditProfile, postNewCard } from './api';
import { getInitialCards } from './api';





const main = document.querySelector('.content');
const popupAdd = document.querySelector('.popup_type_new-card');
const addButton = document.querySelector('.profile__add-button');
const popupImg = document.querySelector('.popup_type_image');
const imgPopupImg = document.querySelector('.popup__image');
const imgPopupCaption = document.querySelector('.popup__caption');
const cardName = document.querySelector('.popup__input_type_card-name');
const cardUrl = document.querySelector('.popup__input_type_url');
const formNewCard = document.forms.newplace;
const popupList = document.querySelectorAll('.popup');
const popupAddSaveButton = newplace.elements.popup__button_add;
let personalId = '';


const editButton = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup_type_edit');
const formEditElement = popupEdit.querySelector('.popup__form');
const nameInput = formEditElement.querySelector('.popup__input_type_name');
const jobInput = formEditElement.querySelector('.popup__input_type_description');
const saveEditFormButton = popupEdit.querySelector('.popup__button');
const profileName = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');


const popupAvatarEdit = document.querySelector('.popup_type_add-avatar');
const formEditAvatar = document.forms.formAvatarEdit;
const avatarUrl = popupAvatarEdit.querySelector('.popup__input_type_url');
const avatarEditSaveButton = formAvatarEdit.elements.popup__button_add;
const avatarHoverButton = document.querySelector('.profile__image-hover');
const profileImage = document.querySelector('.profile__image');


const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};



editButton.addEventListener('click', function(evt){
  openPopup(popupEdit);
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
  clearValidation(formEditElement, validationConfig); 
});


function handleEditFormSubmit(evt) {
  evt.preventDefault();
  setButtonLoadingState(true, saveEditFormButton);
  patchEditProfile(nameInput.value, jobInput.value)
  .then((data) => {
    closePopup(popupEdit);
    profileName.textContent = data.name;
    profileDescription.textContent = data.about;
  })
  .finally(() => {
    setButtonLoadingState(false, saveEditFormButton);
  })
  .catch((err) => 
    {console.log(err);
    });
}


formEditElement.addEventListener('submit', handleEditFormSubmit);


function setButtonLoadingState (isLoading, button) {
  button.textContent = isLoading ? 'Сохранение...' : 'Сохранить' ;
}


formNewCard.addEventListener('submit', function(evt){
  evt.preventDefault();
  setButtonLoadingState(true, popupAddSaveButton);
  postNewCard(cardName.value, cardUrl.value)
  .then((data) => {
    cardsContainer.prepend(
      createCard(data, removeCard, likeCard, onImageClick, personalId) /// likecard
    )})
  .then(() => {
    closePopup(popupAdd);
    formNewCard.reset();
  })
  .then(() => {
    clearValidation(formNewCard, validationConfig);
  })
  .finally(() => { 
    setButtonLoadingState(false, popupAddSaveButton);
  })
  .catch((err) => {
    console.log(err);
  });
});







addButton.addEventListener('click', function(evt) {
    openPopup(popupAdd);
});


avatarHoverButton.addEventListener('click', function(evt){
  openPopup(popupAvatarEdit); });

formEditAvatar.addEventListener('submit', function(evt){
  evt.preventDefault();
  setButtonLoadingState(true, avatarEditSaveButton);
  editNewAvatar(avatarUrl.value)
  .then((data) => {
    profileImage.style.backgroundImage = `url(${data.avatar})`;
  })
  .then(() => {
    closePopup(popupAvatarEdit);
    formEditAvatar.reset();
  })
  .then(()=> {
    clearValidation(popupAvatarEdit, validationConfig);тесты
  })
  .finally(() => {
    setButtonLoadingState(false, avatarEditSaveButton);
  })
  .catch((err) => {
    console.log(err)
  });
});





export function onImageClick(evt){
    openPopup(popupImg);
    imgPopupImg.src = evt.target.src;
    imgPopupImg.alt = evt.target.closest('.card').textContent;
    imgPopupCaption.textContent = evt.target.closest('.card').textContent;
  }


setCloseModalByClickListeners(popupList);

  // @todo: Вывести карточки на страницу


Promise.all([getUser(), getInitialCards()])
  .then(([userData, cardsData]) => {
    profileName.textContent = userData.name;
    personalId = userData._id;
    profileDescription.textContent = userData.about;
    profileImage.style.backgroundImage = `url(${userData.avatar})`;
   cardsData.forEach(function(element){
       const cardData = createCard(element, removeCard, likeCard, onImageClick, personalId); /// likecard
       cardsContainer.append(cardData);
     })
  })
  .catch((err) => {
    console.log(err);
  })


  enableValidation(validationConfig);