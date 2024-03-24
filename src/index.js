'use strict'
//import "./pages/index.css"; 
import "./scripts/cards.js"; // добавьте импорт главного файла стилей

// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;
// @todo: DOM узлы
const cardList = document.querySelector('.places__list'); 
// @todo: Функция создания карточки
function createCard(cardTitle, cardImg, removeCard){
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    const cardImage = cardElement.querySelector('.card__image');
    const cardDeleteBtn = cardElement.querySelector('.card__delete-button');

    cardElement.querySelector('.card__title').textContent = cardTitle; 
    cardImage.alt = cardTitle;
    cardImage.src = cardImg;

    cardDeleteBtn.addEventListener('click', removeCard);
    return cardElement;
}

// @todo: Функция удаления карточки

function removeCard(evt){
    const removedItem = evt.target.closest('.card');
    removedItem.remove();
}

// @todo: Вывести карточки на страницу

initialCards.forEach(function({name, link}){
    const cardData = createCard(name, link, removeCard);
    cardList.append(cardData);
})

