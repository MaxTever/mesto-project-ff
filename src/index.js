import "./pages/index.css"; // добавьте импорт главного файла стилей
import { initialCards } from "./scripts/cards";
import { createCard, removeCard } from './scripts/card';
import { setCloseModalByClickListeners } from './scripts/modal';
import { likeCard } from "./scripts/card";
import { openPopup, closePopup, closeEscPopup, closePopupBtn } from './scripts/modal';
import { cardsContainer } from "./scripts/card";
import { cardTemplate } from "./scripts/cards";




const main = document.querySelector('.content');
const popupAdd = document.querySelector('.popup_type_new-card');
const addButton = document.querySelector('.profile__add-button');
const editButton = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup_type_edit');
const popupImg = document.querySelector('.popup_type_image');
const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_description');
const imgPopupImg = document.querySelector('.popup__image');
const imgPopupCaption = document.querySelector('.popup__caption');
const cardName = document.querySelector('.popup__input_type_card-name');
const cardUrl = document.querySelector('.popup__input_type_url');
const formNewCard = document.forms.newplace;




function handleFormSubmit(evt) {
    evt.preventDefault();
    const saveButton = document.querySelector('.popup__button');
    document.querySelector('.profile__title').textContent = nameInput.value;
    document.querySelector('.profile__description').textContent = jobInput.value;
    saveButton.addEventListener('click', function(evt){
        evt.target.closest('.popup').classList.remove('popup_is-opened');
    });
}




formNewCard.addEventListener('submit', function(evt){
    evt.preventDefault();
    cardsContainer.prepend(createCard(cardName.value, cardUrl.value, removeCard, likeCard, OnImageClick));
    closePopup(popupAdd);
    formNewCard.reset();
  })


formElement.addEventListener('submit', handleFormSubmit);



addButton.addEventListener('click', function(evt) {
    openPopup(popupAdd);
});

editButton.addEventListener('click', function(evt){
    nameInput.value = document.querySelector('.profile__title').textContent;
    jobInput.value = document.querySelector('.profile__description').textContent;
    openPopup(popupEdit);
    handleFormSubmit(evt);
});




export function OnImageClick(evt){
    openPopup(popupImg);
    imgPopupImg.src = evt.target.src;
    imgPopupImg.alt = evt.target.closest('.card').textContent;
    imgPopupCaption.textContent = evt.target.closest('.card').textContent;
  }



  // @todo: Вывести карточки на страницу

initialCards.forEach(function({name, link}){
    const cardData = createCard(name, link, removeCard, likeCard, OnImageClick );
    cardsContainer.append(cardData);
  })