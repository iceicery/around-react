import React from 'react';
import PopupWithForm from './PopupWithForm.js';
export default function RemoveConfirmPopup({ isOpen, onClose, onConfirmRemove, card }) {
    function handleSubmit(e) {
        e.preventDefault();
        onConfirmRemove(card);
        onClose();
    }
    return (
        <PopupWithForm isOpen={isOpen} onClose={onClose} name="remove" title="Are you sure?" buttonText="Yes" onSubmit={handleSubmit} />
    )
}