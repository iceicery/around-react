import React, { useContext } from 'react';
import PopupWithForm from './PopupWithForm.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

export default function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
    const currentUser = useContext(CurrentUserContext);
    const [avatarLink, setAvatarLink] = React.useState("");

    React.useEffect(() => {
        setAvatarLink(currentUser.avatar);
    }, [currentUser]);

    function handleChange(e) {
        setAvatarLink(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateAvatar(avatarLink);
    }

    return (
        <PopupWithForm isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit} name="avatar" title="Change userpic" buttonText="Save">
            <input type="url" id="img" className="popup__input popup__input-job" name="link"
                placeholder="Image link" required minLength="1" onChange={handleChange} />
            <span className="popup__input-error" id="link-error"></span>
        </PopupWithForm>
    );
}