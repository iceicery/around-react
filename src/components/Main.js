import React from 'react';
//import EditProfilePopup from './EditProfilePopup.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js'
import penIcon from '../images/pen.svg';
import Card from './Card.js'
import { api } from '../utils/utils.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function Main({ onEditProfile, onAddPlace, onEditAvatar, closeAllPopups, onCardClick, onClose,
    isEditProfilePopupOpen, isAddPlacePopupOpen, isEditAvatarPopupOpen, isImgEnlarge, selectedCard,
    cards, onCardLike, onRemoveClick}) {
    const currentUser = React.useContext(CurrentUserContext);
   

    

    return (
        <main className="container">
            <section className="profile">
                <div className="profile__img-container" onClick={onEditAvatar}>
                    <img src={currentUser.avatar} alt="explorer" className="profile__img" />
                    <img src={penIcon} alt="button" className="profile__img-edit" />
                </div>
                <div className="profile__text-container">
                    <div className="profile__title-box">
                        <h1 className="profile__title">{currentUser.name}</h1><button className="profile__button-sqr" onClick={onEditProfile}></button>
                    </div>
                    <p className="profile__subtitle">{currentUser.about}</p>
                </div>
                <button className="profile__button-reg" onClick={onAddPlace}></button>
            </section>
            <section className="elements">
                <ul className="elements__container">
                    {cards.map((card, i) => (
                        <Card key={i} card={card} onCardClick={onCardClick} onCardLike={onCardLike} onRemoveClick={onRemoveClick}/>
                    ))}
                </ul>
            </section>
            <ImagePopup isOpen={isImgEnlarge} card={selectedCard} onClose={onClose} />
        </main>
    );
}

export default Main;