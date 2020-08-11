import React from 'react';

function ImagePopup(props) {
    return (
        props.isOpen &&
        <>
        <div className="darken-dark"></div>
        <section className="bigPic">
            <button className="bigPic__button-icon" onClick={props.onClose}></button>
            <img src={props.card.link} alt="BigPicture" className="bigPic__img" />
            <p className="bigPic__title">{props.card.name}</p>
        </section>
        </>
    );
}

export default ImagePopup;