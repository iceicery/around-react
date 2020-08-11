import React from 'react';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import './pages/index.css';



function App() {
  const [isEditProfilePopupOpen, setIsEditOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsAvatarOpen] = React.useState(false);

  function handleEditProfileClick() {
    setIsEditOpen(true);
    document.querySelector('.darken').classList.remove('hidden');
  }

  function handleAddPlaceClick() {
    setIsAddOpen(true);
    document.querySelector('.darken').classList.remove('hidden');
  }

  function handleEditAvatarClick() {
    setIsAvatarOpen(true);
    document.querySelector('.darken').classList.remove('hidden');
  }

  function closeAllPopups() {
    setIsEditOpen(false);
    setIsAvatarOpen(false);
    setIsAddOpen(false);
    document.querySelector('.darken').classList.add('hidden');
  }
  

  const [selectedCard, setSelectedCard] = React.useState({});

  function handleCardClick(card) {
    setSelectedCard(card);
    document.querySelector('.darken-dark').classList.remove('hidden');
  }
  

  function handleImgPopupClose() {
    document.querySelector('.bigPic').classList.add('hidden');
    document.querySelector('.darken-dark').classList.add('hidden');
  }
  

  return (
    <div className="page">
      <div className="darken hidden"></div>
      <div className="darken-dark hidden"></div>
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} closeAllPopups={closeAllPopups} onCardClick={handleCardClick} onClose={handleImgPopupClose}
        isEditProfilePopupOpen={isEditProfilePopupOpen} isAddPlacePopupOpen={isAddPlacePopupOpen} isEditAvatarPopupOpen={isEditAvatarPopupOpen} selectedCard={selectedCard} />
      <Footer />
    </div>
  );
}

export default App;
