import React from 'react';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js'
import penIcon from '../images/pen.svg';
import Card from './Card.js'
import { api } from '../utils/utils.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function Main({ onEditProfile, onAddPlace, onEditAvatar, closeAllPopups, onCardClick, onClose,
    isEditProfilePopupOpen, isAddPlacePopupOpen, isEditAvatarPopupOpen, isImgEnlarge, selectedCard }) {
    const currentUser = React.useContext(CurrentUserContext);
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getInitialCards()
            .then(res => {
                setCards(res);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    function handleCardLike(card) {
        // Check one more time if this card was already liked
        const isLiked = card.likes.some(i => i._id === currentUser._id);

        // Send a request to the API and getting the updated card data
        api.changeLikeCardStatus(card._id, !isLiked)
            .then(newCard => {
                // Create a new array based on the existing one and putting a new card into it
                const newCards = cards.map((c) => c._id === card._id ? newCard : c);
                // Update the state
                setCards(newCards);
            })
            .catch(error => {
                console.log(error);
            });
    }

    function handleCardDelete(card) {
        api.deleteCard(card._id)
        .then(newCard =>{
            const newCards = cards.filter(c=>c._id !== card._id);
            setCards(newCards);
        })
        .catch(error=>{
            console.log(error);
        });
    }


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
                        <Card key={i} card={card} onCardClick={onCardClick} onCardLike={handleCardLike} onCardDelete={handleCardDelete}/>
                    ))}
                </ul>
            </section>
            <PopupWithForm isOpen={isEditProfilePopupOpen} closeAllPopups={closeAllPopups} name="edit" title="Edit profile" buttonText="Save">
                <input type="text" id="name" className="popup__input popup__input-name" name="name"
                    placeholder="Name" required minLength="2" maxLength="40" />
                <span className="popup__input-error" id="name-error"></span>
                <input type="text" id="job" className="popup__input popup__input-job" name="link"
                    placeholder="About" required minLength="2" maxLength="200" />
                <span className="popup__input-error" id="job-error"></span>
            </PopupWithForm>
            <PopupWithForm isOpen={isAddPlacePopupOpen} closeAllPopups={closeAllPopups} name="add" title="New Place" buttonText="Create">
                <input type="text" id="title" className="popup__input popup__input-name" name="name"
                    placeholder="Title" required minLength="1" maxLength="30" />
                <span className="popup__input-error" id="title-error"></span>
                <input type="url" id="job" className="popup__input popup__input-job" name="link"
                    placeholder="Image link" required minLength="1" />
                <span className="popup__input-error" id="link-error"></span>
            </PopupWithForm>
            <PopupWithForm isOpen={false} name="remove" title="Are you sure?" buttonText="Yes" />
            <PopupWithForm isOpen={isEditAvatarPopupOpen} closeAllPopups={closeAllPopups} name="avatar" title="Change userpic" buttonText="Save">
                <input type="url" id="img" className="popup__input popup__input-job" name="link"
                    placeholder="Image link" required minLength="1" />
                <span className="popup__input-error" id="link-error"></span>
            </PopupWithForm>
            <ImagePopup isOpen={isImgEnlarge} card={selectedCard} onClose={onClose} />
        </main>
    );
}

export default Main;