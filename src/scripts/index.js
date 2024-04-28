// import "./pages/index.css"; // добавьте импорт главного файла стилей
import "../pages/index.css";
import { initialCards } from "./cards";
import { createCard, removeCard } from './card';
import { setCloseModalByClickListeners } from './modal';
import { likeCard } from "./card";
import { openPopup, closePopup, closeEscPopup, closePopupBtn } from './modal';
import { cardsContainer } from "./card";
import { cardTemplate } from "./cards";




const main = document.querySelector('.content');
const popupAdd = document.querySelector('.popup_type_new-card');
const addButton = document.querySelector('.profile__add-button');
const editButton = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup_type_edit');
const popupImg = document.querySelector('.popup_type_image');
const editFormElement = popupEdit.querySelector('.popup__input');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_description');
const imgPopupImg = document.querySelector('.popup__image');
const imgPopupCaption = document.querySelector('.popup__caption');
const cardName = document.querySelector('.popup__input_type_card-name');
const cardUrl = document.querySelector('.popup__input_type_url');
const saveEditFormButton = popupEdit.querySelector('.popup__button');
const formNewCard = document.forms.newplace;
const profileName = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const popupList = document.querySelectorAll('.popup');
// const popupInput = popupList.querySelectorAll('.popup__input');
// const formError = editFormElement.querySelector(`.${formInput.id}-error`);


function handleEditFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    closePopup(popupEdit);
}


formNewCard.addEventListener('submit', function(evt){
    evt.preventDefault();
    cardsContainer.prepend(createCard(cardName.value, cardUrl.value, removeCard, likeCard, onImageClick));
    closePopup(popupAdd);
    formNewCard.reset();
  })


editFormElement.addEventListener('submit', handleEditFormSubmit);


addButton.addEventListener('click', function(evt) {
    openPopup(popupAdd);
});

editButton.addEventListener('click', function(evt){
    nameInput.value = profileName.textContent;
    jobInput.value = profileDescription.textContent;
    openPopup(popupEdit);
});


export function onImageClick(evt){
    openPopup(popupImg);
    imgPopupImg.src = evt.target.src;
    imgPopupImg.alt = evt.target.closest('.card').textContent;
    imgPopupCaption.textContent = evt.target.closest('.card').textContent;
  }


setCloseModalByClickListeners(popupList);

  // @todo: Вывести карточки на страницу

initialCards.forEach(function({name, link}){
    const cardData = createCard(name, link, removeCard, likeCard, onImageClick );
    cardsContainer.append(cardData);
  })


