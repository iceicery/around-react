import React, { useContext } from 'react';
import {CurrentUserContext} from '../contexts/CurrentUserContext.js';


function Card({ card, onCardClick }) {
    const currentUser = useContext(CurrentUserContext);
    const isOwn = card.owner._id === currentUser._id;
    const cardDeleteButtonClassName = (
        `elements__trash ${!isOwn && 'hidden'}`
      );

    function handleClick() {
        onCardClick(card);
    }
    return (
        <li className="elements__item">
            <img src={card.link} alt="BeautifulPicture" className="elements__img" onClick={handleClick} />
            <button className={cardDeleteButtonClassName}></button>
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