import React from 'react';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js'
import explorerImg from '../images/explorer.jpg';
import penIcon from '../images/pen.svg';

function Main() {
    function handleEditAvatarClick(){
        document.querySelector(".popup_type_avatar").classList.remove('hidden');
    }

    function handleEditProfileClick(){
        document.querySelector(".popup_type_edit").classList.remove('hidden');
    }

    function handleAddPlaceClick(){
        document.querySelector(".popup_type_add").classList.remove('hidden');
    }
    return (
        <main className="container">
            <section className="profile">
                <div className="profile__img-container" onClick={handleEditAvatarClick}>
                    <img src={explorerImg} alt="explorer" className="profile__img" />
                    <img src={penIcon} alt="button" className="profile__img-edit" />
                </div>
                <div className="profile__text-container">
                    <div className="profile__title-box">
                        <h1 className="profile__title">Jacques Cousteau</h1><button className="profile__button-sqr" onClick={handleEditProfileClick}></button>
                    </div>
                    <p className="profile__subtitle">Explorer</p>
                </div>
                <button className="profile__button-reg" onClick={handleAddPlaceClick}></button>
            </section>
            <section className="elements">
                <ul className="elements__container">
                </ul>
            </section>
            <PopupWithForm name="edit" title="Edit profile" buttonText="Save" withInput={2} inputNameOne="name" inputNameTwo="link" iniInputValueOne="Jacques Cousteau" iniInputValueTwo="Explorer" inputPlaceholderOne="Name" inputPlaceholderTwo="Job"/>
            <PopupWithForm name="add" title="New Place" buttonText="Create" withInput={2} inputNameOne="name" inputNameTwo="link" iniInputValueOne="" iniInputValueTwo="" inputPlaceholderOne="Title" inputPlaceholderTwo="Image link"/> 
            <PopupWithForm name="remove" title="Are you sure?" buttonText="Yes" withInput={0} />
            <PopupWithForm name="avatar" title="Change userpic" buttonText="Save" withInput={1} inputNameOne="link" iniInputValueOne="" inputPlaceholderOne="Image link"/>
            <ImagePopup/>
        </main>
    );
}

export default Main;