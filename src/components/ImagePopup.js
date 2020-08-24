import React from 'react';

function ImagePopup({ isOpen, card, onClose }) {
    const bigPicClassName= (`bigPic ${!isOpen && 'hidden'}`);
    const darkenClassName=(`${isOpen && 'darken-dark'}`);
    return (
        <>
            <div className={darkenClassName}></div>
            <section className={bigPicClassName}>
                <button className="bigPic__button-icon" onClick={onClose}></button>
                <img src={card.link} alt="BigPicture" className="bigPic__img" />
                <p className="bigPic__title">{card.name}</p>
            </section>
        </>
    );
}

export default ImagePopup;