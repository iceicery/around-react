import React from 'react';

function PopupWithForm({ isOpen, onClose, onSubmit, name, title, buttonText, children }) {
    const popupClassName=(`popup popup_type_${name} ${!isOpen && 'hidden'}`);
    const darkClassName=(`${isOpen && 'darken'}`);
    return (
        <>
            <div className={darkClassName}></div>
            <section className={popupClassName}>
                <button className={`popup__button-icon popup__button-icon_type_${name}`} onClick={onClose}></button>
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