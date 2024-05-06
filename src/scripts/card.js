import { openPopup } from "./modal";
import { onImageClick } from "./index";
import { putLike } from "./api";
import { deleteCardLike } from "./api";
import { deleteCardApi } from "./api";

// // @todo: Темплейт карточки
export const cardTemplate = document.querySelector('#card-template').content;
// // @todo: DOM узлы
export const cardsContainer = document.querySelector('.places__list'); 
// @todo: Функция создания карточки
export function createCard(data, removeCard, likeCard, onImageClick, personalId){ ///likecard
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true); //
    const cardImage = cardElement.querySelector('.card__image'); //
    const cardDeleteBtn = cardElement.querySelector('.card__delete-button'); //
    const cardLikeBtn = cardElement.querySelector('.card__like-button'); //
    let likeCounter = cardElement.querySelector('.card__like-button-counter'); // 
    likeCounter.textContent = data.likes.length;
    cardElement.querySelector('.card__title').textContent = data.name; 
    cardImage.alt = data.name;
    cardImage.src = data.link;

    if (data.likes.some(element => element._id === personalId)){ 
      cardLikeBtn.classList.add("card__like-button_is-active"); 
    };


    if (data.owner._id== personalId){
      cardDeleteBtn.addEventListener('click', function (evt) {
         deleteCard(evt, data._id)
      });
  }
  else { 
      cardDeleteBtn.style.display = 'none'; 
   } 

    cardLikeBtn.addEventListener('click', (evt) =>  likeCard(evt, data.likes, likeCounter, data._id));
    cardImage.addEventListener('click', onImageClick);
    return cardElement;
}

// @todo: Функция удаления карточки


export function removeCard(evt){
  evt.target.closest(".places__item").remove();
}


export function deleteCard(evt, id){
  deleteCardApi(id) 
    .then(() =>{ 
      removeCard(evt); 
    }) 
    .catch((error) => { 
      console.log(error); 
    }); 
}





export function likeCard (evt, likes, likeCounter, id){
  const likeMethod = evt.target.classList.contains('card__like-button_is-active') ? deleteCardLike : putLike;
  likeMethod(id) 
          .then((data) => { 
            likeCounter.textContent = data.likes.length; 
            evt.target.classList.toggle('card__like-button_is-active'); 
          })
  .catch(err => console.log(err));
}





  
