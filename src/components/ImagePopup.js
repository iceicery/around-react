import React from 'react';

function ImagePopup({ isOpen, card, onClose }) {
    return (
        isOpen &&
        <>
            <div className="darken-dark"></div>
            <section className="bigPic">
                <button className="bigPic__button-icon" onClick={onClose}></button>
                <img src={card.link} alt="BigPicture" className="bigPic__img" />
                <p className="bigPic__title">{card.name}</p>
            </section>
        </>
    );
}

export default ImagePopup;