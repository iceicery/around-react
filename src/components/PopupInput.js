import React from 'react';

function PopupInput(props) {
    return (
        <>
        <input type="text" id={`${props.inputName}`} className={`popup__input popup__input-${props.inputName}`} name={`${props.inputName}`}
            placeholder={`${props.inputPlaceholder}`} required minLength="2" maxLength="40" />
        <span className={`${props.name}__input-error`} id={`${props.inputName}-error`}></span>
        </>
    );
}

export default PopupInput;
