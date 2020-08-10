import React from 'react';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js'
import explorerImg from '../images/explorer.jpg';
import penIcon from '../images/pen.svg';
import { api } from '../utils/utils.js';

function Main(props) {
    const [userName, getName] = React.useState("Default Name");
    const [userDescription, getDescription] = React.useState("Default Description");
    const [userAvatar, getAvatar] = React.useState({ explorerImg });

    api.getUserInfo()
        .then(res => {
            getName(res.name);
            getDescription(res.about);
            getAvatar(res.avatar);
        })
        .catch(error => {
            console.log(error);
        })

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
                </ul>
            </section>
            <PopupWithForm isOpen={props.isEditProfilePopupOpen} closeAllPopups={props.closeAllPopups} name="edit" title="Edit profile" buttonText="Save" withInput={2} inputNameOne="name" inputNameTwo="link" inputPlaceholderOne="Name" inputPlaceholderTwo="Job" />
            <PopupWithForm isOpen={props.isAddPlacePopupOpen} closeAllPopups={props.closeAllPopups} name="add" title="New Place" buttonText="Create" withInput={2} inputNameOne="name" inputNameTwo="link" inputPlaceholderOne="Title" inputPlaceholderTwo="Image link" />
            <PopupWithForm isOpen={false} name="remove" title="Are you sure?" buttonText="Yes" withInput={0} />
            <PopupWithForm isOpen={props.isEditAvatarPopupOpen} closeAllPopups={props.closeAllPopups} name="avatar" title="Change userpic" buttonText="Save" withInput={1} inputNameOne="link" iniInputValueOne="" inputPlaceholderOne="Image link" />
            <ImagePopup />
        </main>
    );
}

export default Main;