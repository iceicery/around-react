import React from 'react';
import PopupInput from './PopupInput.js';

function PopupWithForm(props) {
    return (
        <section className={`popup popup_type_${props.name} hidden`}>
            <button className={`popup__button-icon popup__button-icon_type_${props.name}`}></button>
            <form className={`popup__form popup__form_type_${props.name}`} noValidate>
                <h2 className={`popup__title popup__title_type_${props.name}`}>{props.title}</h2>
                {props.withInput>0 && <PopupInput name={props.name} inputName={props.inputNameOne} iniInputValue={props.iniInputValueOne} inputPlaceholder={props.inputPlaceholderOne}/>}
                {props.withInput>1 && <PopupInput name={props.name} inputName={props.inputNameTwo} iniInputValue={props.iniInputValueTwo} inputPlaceholder={props.inputPlaceholderTwo}/>}
                <button className={`popup__button popup__button_type_${props.name}`}>{props.buttonText}</button>
            </form>
        </section>
    );
}

export default PopupWithForm;