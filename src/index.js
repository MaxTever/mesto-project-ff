import "./pages/index.css"; // добавьте импорт главного файла стилей
import { initialCards } from './scripts/cards';
import { createCard, removeCard } from './scripts/cards';
import { openPopup, closePopup, closeEscPopup, closePopupBtn } from './scripts/modal';
// import { closePopupOverlay } from "./scripts/modal";



const main = document.querySelector('.content');
const popupAdd = document.querySelector('.popup_type_new-card');
const addButton = document.querySelector('.profile__add-button');
const editButton = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup_type_edit');
const popupImg = document.querySelector('.popup_type_image');
const popupImgBtn = document.querySelector('.card__image');

const profileName = document.querySelector('profile__title');
const profileDescription = document.querySelector('.profile__description');



addButton.addEventListener('click', function(evt) {
    openPopup(popupAdd);
});

editButton.addEventListener('click', function(evt){
    openPopup(popupEdit);
});

popupImgBtn.addEventListener('click', function(evt){
    openPopup(popupImg);
});



