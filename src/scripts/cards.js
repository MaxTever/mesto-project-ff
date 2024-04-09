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
const cardTemplate = document.querySelector('#card-template').content;
// // @todo: DOM узлы
const cardList = document.querySelector('.places__list'); 
// @todo: Функция создания карточки
export function createCard(cardTitle, cardImg, removeCard){
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

export function removeCard(evt){
    const removedItem = evt.target.closest('.card');
    removedItem.remove();
}

// @todo: Вывести карточки на страницу

initialCards.forEach(function({name, link}){
    const cardData = createCard(name, link, removeCard);
    cardList.append(cardData);
})


