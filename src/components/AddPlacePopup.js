import React from 'react';
import PopupWithForm from './PopupWithForm.js';

export default function AddPlacePopup({isOpen, onClose, onUpdateAddPlace}) {
    const [newName,setNewName]=React.useState("");
    const [newLink,setNewLink]=React.useState("");
    function handleChange(e) {
        if (e.target.id === "title") {
            setNewName(e.target.value);
        }
        if (e.target.id === "job") {
            setNewLink(e.target.value);
        }
    }
    function handleSubmit(e) {
        e.preventDefault();
        onUpdateAddPlace(newName, newLink);
        onClose();
    }

    return (
        <PopupWithForm isOpen={isOpen} onClose={onClose} name="add" title="New Place" buttonText="Create" onSubmit={handleSubmit}>
            <input type="text" id="title" className="popup__input popup__input-name" name="name"
                placeholder="Title" required minLength="1" maxLength="30" onChange={handleChange}/>
            <span className="popup__input-error" id="title-error"></span>
            <input type="url" id="job" className="popup__input popup__input-job" name="link"
                placeholder="Image link" required minLength="1" onChange={handleChange}/>
            <span className="popup__input-error" id="link-error"></span>
        </PopupWithForm>
    );
}