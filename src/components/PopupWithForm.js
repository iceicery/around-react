import React from 'react';

function PopupWithForm({isOpen, closeAllPopups, onSubmit, name, title, buttonText ,children}) {
    return (
        isOpen &&
        <>
        <div className="darken"></div>
        <section className={`popup popup_type_${name}`}>
            <button className={`popup__button-icon popup__button-icon_type_${name}`} onClick={closeAllPopups}></button>
            <form className={`popup__form popup__form_type_${name}`} noValidate onSubmit={onSubmit}>
                <h2 className={`popup__title popup__title_type_${name}`}>{title}</h2>
                {children}
                <button className={`popup__button popup__button_type_${name}`}>{buttonText}</button>
            </form>
        </section>
        </>
    );
}

export default PopupWithForm;