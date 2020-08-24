import React from 'react';
import PopupWithForm from './PopupWithForm.js';

export default function AddPlacePopup({ isOpen, onClose, onUpdateAddPlace }) {
    const newName = React.useRef();
    const newLink = React.useRef();
    function handleSubmit(e) {
        e.preventDefault();
        onUpdateAddPlace(newName.current.value, newLink.current.value);
        onClose();
    }

    return (
        <PopupWithForm isOpen={isOpen} onClose={onClose} name="add" title="New Place" buttonText="Create" onSubmit={handleSubmit}>
            <input type="text" id="title" className="popup__input popup__input-name" name="name"
                placeholder="Title" required minLength="1" maxLength="30" ref={newName} />
            <span className="popup__input-error" id="title-error"></span>
            <input type="url" id="job" className="popup__input popup__input-job" name="link"
                placeholder="Image link" required minLength="1" ref={newLink} />
            <span className="popup__input-error" id="link-error"></span>
        </PopupWithForm>
    );
}