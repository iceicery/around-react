import React from 'react';

function Card(props){
    function handleClick() {
        props.onCardClick(props.card);
        document.querySelector('.bigPic').classList.remove('hidden');
      }
    return (
        <li key={props.id} className="elements__item">
            <img src={props.card.link} alt="BeautifulPicture" className="elements__img" onClick={handleClick}/>
            <button className="elements__trash hidden"></button>
            <div className="elements__title-box">
                <h2 className="elements__title">{props.card.name}</h2>
                <div className="elements__like-box">
                    <button className="elements__heart"></button>
                    <p className="elements__like-count">{props.card.likes.length}</p>
                </div>
            </div>
        </li>
    )
}

export default Card;