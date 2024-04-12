import { openPopup } from "./modal";
import { OpenImgPopup } from "..";

export const initialCards = [
    {
      name: "Архыз",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
    },
    {
      name: "Челябинская область",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
    },
    {
      name: "Иваново",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
    },
    {
      name: "Камчатка",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
    },
    {
      name: "Холмогорский район",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
    },
    {
      name: "Байкал",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
    }
];


// // @todo: Темплейт карточки
export const cardTemplate = document.querySelector('#card-template').content;
// // @todo: DOM узлы
export const cardList = document.querySelector('.places__list'); 
// @todo: Функция создания карточки
export function createCard(cardTitle, cardImg, removeCard, likeCard, OpenImgPopup ){
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    const cardImage = cardElement.querySelector('.card__image');
    const cardDeleteBtn = cardElement.querySelector('.card__delete-button');
    const cardLikeBtn = cardElement.querySelector('.card__like-button');
    const popupImgBtn = cardElement.querySelector('.card__image');
    cardElement.querySelector('.card__title').textContent = cardTitle; 
    cardImage.alt = cardTitle;
    cardImage.src = cardImg;
    cardLikeBtn.addEventListener('click', likeCard);
    cardDeleteBtn.addEventListener('click', removeCard);
    cardImage.addEventListener('click', function(evt) {OpenImgPopup(evt)});
    return cardElement;
}

// @todo: Функция удаления карточки

export function removeCard(evt){
    const removedItem = evt.target.closest('.card');
    removedItem.remove();
}

export function likeCard (evt) {
  evt.target.classList.toggle('card__like-button_is-active');
}




// @todo: Вывести карточки на страницу

initialCards.forEach(function({name, link}){
    const cardData = createCard(name, link, removeCard, likeCard, OpenImgPopup );
    cardList.append(cardData);
})


