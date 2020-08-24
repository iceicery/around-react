import React from 'react';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import { api } from './utils/utils.js';
import { CurrentUserContext } from './contexts/CurrentUserContext.js';
import EditProfilePopup from './components/EditProfilePopup.js';
import EditAvatarPopup from './components/EditAvatarPopup.js';
import AddPlacePopup from './components/AddPlacePopup.js';
import RemoveConfirmPopup from './components/RemoveConfirmPopup.js';

function App() {
  const [isEditProfilePopupOpen, setIsEditOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsAvatarOpen] = React.useState(false);
  const [isRemovePopupOpen, setIsRemovePopupOpen] = React.useState(false);
  const [isImgEnlarge, setIsImgEnlarge] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState([]);
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(err);
      });
    api.getInitialCards()
      .then(res => {
        setCards(res);
      })
      .catch(error => {
        console.log(error);
      });

  }, [])

  function handleEditProfileClick() {
    setIsEditOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddOpen(true);
  }

  function handleEditAvatarClick() {
    setIsAvatarOpen(true);
  }

  function closeAllPopups() {
    setIsEditOpen(false);
    setIsAvatarOpen(false);
    setIsAddOpen(false);
    setIsImgEnlarge(false);
    setIsRemovePopupOpen(false);
  }


  const [selectedCard, setSelectedCard] = React.useState({});

  function handleCardClick(card) {
    setIsImgEnlarge(true);
    setSelectedCard(card);
  }

  function handleRemoveClick(card) {
    setIsRemovePopupOpen(true);
    setSelectedCard(card);
  }

  /*
    function handleImgPopupClose() {
      setIsImgEnlarge(false);
    }*/

  function handleUpdateUser(name, about) {
    api.editProfile(name, about)
      .then(res => {
        setCurrentUser(res);
      })
      .catch(err => { console.log(err) })

    closeAllPopups();
  }

  function handleUpdateAvatar(link) {
    api.editProfilePic(link)
      .then(res => {
        setCurrentUser(res);
      })
      .catch(err => { console.log(err) })

    closeAllPopups();
  }

  function handleCardLike(card) {
    // Check one more time if this card was already liked
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    // Send a request to the API and getting the updated card data
    api.changeLikeCardStatus(card._id, !isLiked)
      .then(newCard => {
        // Create a new array based on the existing one and putting a new card into it
        const newCards = cards.map((c) => c._id === card._id ? newCard : c);
        // Update the state
        setCards(newCards);
      })
      .catch(error => {
        console.log(error);
      });
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then(newCard => {
        const newCards = cards.filter(c => c._id !== card._id);
        setCards(newCards);
      })
      .catch(error => {
        console.log(error);
      });
  }

  function handleAddPlaceSubmit(newName, newLink) {
    api.postNewCard(newName, newLink)
      .then(newCard => {
        setCards([...cards, newCard]);
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onClose={closeAllPopups} onCardClick={handleCardClick}
          isImgEnlarge={isImgEnlarge} selectedCard={selectedCard} cards={cards} onCardLike={handleCardLike} onRemoveClick={handleRemoveClick} />
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onUpdateAddPlace={handleAddPlaceSubmit} />
        <RemoveConfirmPopup isOpen={isRemovePopupOpen} onClose={closeAllPopups} onConfirmRemove={handleCardDelete} card={selectedCard} />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
