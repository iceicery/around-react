import React from 'react';

function ImagePopup() {
    return (
        <section className="bigPic hidden">
            <button className="bigPic__button-icon"></button>
            <img src="./images/yosemite.jpg" alt="BigPicture" className="bigPic__img" />
            <p className="bigPic__title">Yosemite Valley</p>
        </section>
    );
}

export default ImagePopup;