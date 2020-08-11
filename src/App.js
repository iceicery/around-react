import React from 'react';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';




function App() {
  const [isEditProfilePopupOpen, setIsEditOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsAvatarOpen] = React.useState(false);
  const [isImgEnlarge, setIsImgEnlarge]= React.useState(false);

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
  }
  

  const [selectedCard, setSelectedCard] = React.useState({});

  function handleCardClick(card) {
    setIsImgEnlarge(true);
    setSelectedCard(card);
  }
  

  function handleImgPopupClose() {
    setIsImgEnlarge(false);
  }
  

  return (
    <div className="page">
      
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} closeAllPopups={closeAllPopups} onCardClick={handleCardClick} onClose={handleImgPopupClose}
        isEditProfilePopupOpen={isEditProfilePopupOpen} isAddPlacePopupOpen={isAddPlacePopupOpen} isEditAvatarPopupOpen={isEditAvatarPopupOpen} isImgEnlarge={isImgEnlarge} selectedCard={selectedCard} />
      <Footer />
    </div>
  );
}

export default App;
