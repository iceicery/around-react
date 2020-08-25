import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import PopupWithForm from './PopupWithForm.js';

export default function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
    const currentUser = React.useContext(CurrentUserContext);
    const [name, setName] = React.useState("");
    const [description, setDescription] = React.useState("");

    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser]);

    function handleChangeName(e) {
        setName(e.target.value);

    }
    function handleChangeJob(e) {
        setDescription(e.target.value);
    }


    function handleSubmit(e) {
        e.preventDefault();
        onUpdateUser(name, description);
    }

    return (
        <PopupWithForm isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit} name="edit" title="Edit profile" buttonText="Save">
            <input type="text" id="name" className="popup__input popup__input-name" name="name" value={name || ""}
                placeholder="Name" required minLength="2" maxLength="40" onChange={handleChangeName} />
            <span className="popup__input-error" id="name-error"></span>
            <input type="text" id="job" className="popup__input popup__input-job" name="link" value={description || ""}
                placeholder="About" required minLength="2" maxLength="200" onChange={handleChangeJob} />
            <span className="popup__input-error" id="job-error"></span>
        </PopupWithForm>
    );
}