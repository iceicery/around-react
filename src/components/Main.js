import React from 'react';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js'
import explorerImg from '../images/explorer.jpg';
import penIcon from '../images/pen.svg';
import Card from './Card.js'
import { api } from '../utils/utils.js';

function Main(props) {
    const [userName, setName] = React.useState("Default Name");
    const [userDescription, setDescription] = React.useState("Default Description");
    const [userAvatar, setAvatar] = React.useState({ explorerImg });
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getUserInfo()
            .then(res => {
                setName(res.name);
                setDescription(res.about);
                setAvatar(res.avatar);
            })
            .catch(error => {
                console.log(error);
            });
        api.getInitialCards()
            .then(res => {
                setCards(res);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);


    return (
        <main className="container">
            <section className="profile">
                <div className="profile__img-container" onClick={props.onEditAvatar}>
                    <img src={userAvatar} alt="explorer" className="profile__img" />
                    <img src={penIcon} alt="button" className="profile__img-edit" />
                </div>
                <div className="profile__text-container">
                    <div className="profile__title-box">
                        <h1 className="profile__title">{userName}</h1><button className="profile__button-sqr" onClick={props.onEditProfile}></button>
                    </div>
                    <p className="profile__subtitle">{userDescription}</p>
                </div>
                <button className="profile__button-reg" onClick={props.onAddPlace}></button>
            </section>
            <section className="elements">
                <ul className="elements__container">
                    {cards.map((card, i) => (
                        <Card key={i} card={card} onCardClick={props.onCardClick} />
                    ))}
                </ul>
            </section>
            <PopupWithForm isOpen={props.isEditProfilePopupOpen} closeAllPopups={props.closeAllPopups} name="edit" title="Edit profile" buttonText="Save">
                <input type="text" id="name" className="popup__input popup__input-name" name="name" 
                    placeholder="Name" required minLength="2" maxLength="40" />
                <span className={`${props.name}__input-error`} id="name-error"></span>
                <input type="text" id="job" className="popup__input popup__input-job" name="link" 
                    placeholder="About" required minLength="2" maxLength="200" />
                <span className={`${props.name}__input-error`} id="job-error"></span>
            </PopupWithForm>
            <PopupWithForm isOpen={props.isAddPlacePopupOpen} closeAllPopups={props.closeAllPopups} name="add" title="New Place" buttonText="Create">
                <input type="text" id="title" className="popup__input popup__input-name" name="name" 
                    placeholder="Title" required minLength="1" maxLength="30" />
                <span className={`${props.name}__input-error`} id="title-error"></span>
                <input type="url" id="job" className="popup__input popup__input-job" name="link" 
                    placeholder="Image link" required minLength="1" />
                <span className={`${props.name}__input-error`} id="link-error"></span>
            </PopupWithForm>
            <PopupWithForm isOpen={false} name="remove" title="Are you sure?" buttonText="Yes" />
            <PopupWithForm isOpen={props.isEditAvatarPopupOpen} closeAllPopups={props.closeAllPopups} name="avatar" title="Change userpic" buttonText="Save">
                <input type="url" id="img" className="popup__input popup__input-job" name="link" 
                    placeholder="Image link" required minLength="1" />
                <span className={`${props.name}__input-error`} id="link-error"></span>
            </PopupWithForm>
            <ImagePopup card={props.selectedCard} onClose={props.onClose} />
        </main>
    );
}

export default Main;