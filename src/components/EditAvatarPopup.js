import React from 'react';
import PopupWithForm from './PopupWithForm.js';

export default function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
    const avatarLink = React.useRef();

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateAvatar(avatarLink.current.value);
    }

    return (
        <PopupWithForm isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit} name="avatar" title="Change userpic" buttonText="Save">
            <input type="url" id="img" className="popup__input popup__input-job" name="link"
                placeholder="Image link" required minLength="1" ref={avatarLink} />
            <span className="popup__input-error" id="link-error"></span>
        </PopupWithForm>
    );
}