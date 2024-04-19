import { openPopup } from "./modal";
import { onImageClick } from "./index";
import { initialCards } from "./cards";

// // @todo: Темплейт карточки
export const cardTemplate = document.querySelector('#card-template').content;
// // @todo: DOM узлы
export const cardsContainer = document.querySelector('.places__list'); 
// @todo: Функция создания карточки
export function createCard(cardTitle, cardImg, removeCard, likeCard, onImageClick ){
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    const cardImage = cardElement.querySelector('.card__image');
    const cardDeleteBtn = cardElement.querySelector('.card__delete-button');
    const cardLikeBtn = cardElement.querySelector('.card__like-button');
    cardElement.querySelector('.card__title').textContent = cardTitle; 
    cardImage.alt = cardTitle;
    cardImage.src = cardImg;
    cardLikeBtn.addEventListener('click', () =>  likeCard(cardLikeBtn));
    cardDeleteBtn.addEventListener('click', () => removeCard(cardElement));
    cardImage.addEventListener('click', onImageClick);
    return cardElement;
}

// @todo: Функция удаления карточки


export function removeCard(card){
  card.remove();
}


export function likeCard (button){
  button.classList.toggle('card__like-button_is-active');
}



  
  