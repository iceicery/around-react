import React from 'react';

function Card({card, onCardClick}) {
    function handleClick() {
        onCardClick(card);
    }
    return (
        <li className="elements__item">
            <img src={card.link} alt="BeautifulPicture" className="elements__img" onClick={handleClick} />
            <button className="elements__trash hidden"></button>
            <div className="elements__title-box">
                <h2 className="elements__title">{card.name}</h2>
                <div className="elements__like-box">
                    <button className="elements__heart"></button>
                    <p className="elements__like-count">{card.likes.length}</p>
                </div>
            </div>
        </li>
    )
}

export default Card;   