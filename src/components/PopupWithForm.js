import React from 'react';

function PopupWithForm(props) {
    return (
        props.isOpen &&
        <>
        <div className="darken"></div>
        <section className={`popup popup_type_${props.name}`}>
            <button className={`popup__button-icon popup__button-icon_type_${props.name}`} onClick={props.closeAllPopups}></button>
            <form className={`popup__form popup__form_type_${props.name}`} noValidate>
                <h2 className={`popup__title popup__title_type_${props.name}`}>{props.title}</h2>
                {props.children}
                <button className={`popup__button popup__button_type_${props.name}`}>{props.buttonText}</button>
            </form>
        </section>
        </>
    );
}

export default PopupWithForm;