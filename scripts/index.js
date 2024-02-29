// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;
// @todo: DOM узлы
const content = document.querySelector('.content');
const cardList = document.querySelector('.places__list'); 
// @todo: Функция создания карточки
function createCard(cardTitle, cardImg, removeCard){
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    const cardImage = cardElement.querySelector('.card__image');

    cardElement.querySelector('.card__title').textContent = cardTitle; 
    cardImage.setAttribute('alt', `${cardTitle}`);
    cardImage.setAttribute('src', `${cardImg}`);

    const cardDeleteBtn = cardElement.querySelector('.card__delete-button');
    cardDeleteBtn.addEventListener('click', function(evt){
        removeCard(evt);
    })
    return cardElement;
}

// @todo: Функция удаления карточки

removeCard = function (evt){
    const removedItem = evt.target.closest('.card')
    removedItem.remove();
}

// @todo: Вывести карточки на страницу

initialCards.forEach(function({name, link}){
    const cardData = createCard(name, link, removeCard);
    cardList.append(cardData);
})