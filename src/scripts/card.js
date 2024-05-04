import { openPopup } from "./modal";
import { onImageClick } from "./index";
// import { initialCards } from "./cards";
import { putLike } from "./api";
import { deleteCardLike } from "./api";
import { deleteCardApi } from "./api";

// // @todo: Темплейт карточки
export const cardTemplate = document.querySelector('#card-template').content;
// // @todo: DOM узлы
export const cardsContainer = document.querySelector('.places__list'); 
// @todo: Функция создания карточки
export function createCard(data, removeCard, likeCard, onImageClick, personalId ){
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true); //
    const cardImage = cardElement.querySelector('.card__image'); //
    const cardDeleteBtn = cardElement.querySelector('.card__delete-button'); //
    const cardLikeBtn = cardElement.querySelector('.card__like-button'); //
    let likeCounter = cardElement.querySelector('.card__like-button-counter'); // 
    likeCounter.textContent = data.likes.length;
    cardElement.querySelector('.card__title').textContent = data.name; 
    cardImage.alt = data.name;
    cardImage.src = data.link;
    data.likes.forEach((element) => {
      if (element._id === personalId) {
            cardLikeBtn.classList.add('card__like-button_active');
        }
    });
    deleteCard(data.owner._id, personalId, cardDeleteBtn, data._id);
    cardDeleteBtn.addEventListener('click', () => removeCard(cardElement));

    cardLikeBtn.addEventListener('click', (evt) =>  likeCard(evt, data.likes, likeCounter, data._id));
    cardImage.addEventListener('click', onImageClick);
    return cardElement;
}

// @todo: Функция удаления карточки


// export function removeCard(evt){
//   evt.target.closest(".places__item").remove();
// }

export function removeCard(card){
  card.remove();
}


export function deleteCard(ownerId, personalId, cardDeleteBtn, id){
  if (ownerId == personalId){
    cardDeleteBtn.addEventListener('click', function (evt) {
      deleteCardApi(id)
      .then(() =>{
        removeCard(evt);
      })
      .catch((error) => {
        console.log(error);
      });
    });
  } else {
    cardDeleteBtn.style.display = 'none';
  }
}


export function likeCard (evt, likes, likeCounter, id){
  if (!evt.target.classList.contains('card__like-button_is-active')){
    putLike(id, likeCounter)
    .then((data) => {
      likeCounter.textContent = data.likes.length;
      evt.target.classList.add('card__like-button_is-active');
    })
    .catch((error) => {
      console.log(error);
    });
  
  } else {
    deleteCardLike(id, likeCounter)
    .then((data) => {
      likeCounter.textContent = data.likes.length;  
      evt.target.classList.remove('card__like-button_is-active');
      })
    .catch((error) => {
      console.log(error);
    });
    }
}




  
