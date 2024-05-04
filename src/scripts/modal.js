
export function openPopup(popup) {
    popup.classList.add('popup_is-opened');
    document.addEventListener('keydown', closeEscPopup);
}


export function closePopup(popup){
    popup.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', closeEscPopup);
}

export function closeEscPopup(evt){
    if (evt.key === 'Escape'){
        const popup = document.querySelector('.popup_is-opened');
        closePopup(popup);
    }
}


export function setCloseModalByClickListeners(popupList){
    popupList.forEach(popup => {
        const closeButton = popup.querySelector('.popup__close');
        closeButton.addEventListener('click', function(){
            closePopup(popup);
        })

        popup.addEventListener('click', function(evt){
            if (evt.target === popup) {
               closePopup(popup);
           }});

    });
}