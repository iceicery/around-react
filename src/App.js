import React from 'react';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import { api } from './utils/utils.js';
import { CurrentUserContext } from './contexts/CurrentUserContext.js';
import EditProfilePopup from './components/EditProfilePopup.js';
function App() {
  const [isEditProfilePopupOpen, setIsEditOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsAvatarOpen] = React.useState(false);
  const [isImgEnlarge, setIsImgEnlarge] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(err);
      })
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
  }


  const [selectedCard, setSelectedCard] = React.useState({});

  function handleCardClick(card) {
    setIsImgEnlarge(true);
    setSelectedCard(card);
  }


  function handleImgPopupClose() {
    setIsImgEnlarge(false);
  }

  function handleUpdateUser(name,about){
    api.editProfile(name,about)
    .then((res)=>{
      setCurrentUser(res);
    })
    .catch(err=>{console.log(err)})
    closeAllPopups();
  }


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} closeAllPopups={closeAllPopups} onCardClick={handleCardClick} onClose={handleImgPopupClose} 
          isEditProfilePopupOpen={isEditProfilePopupOpen} isAddPlacePopupOpen={isAddPlacePopupOpen} isEditAvatarPopupOpen={isEditAvatarPopupOpen} isImgEnlarge={isImgEnlarge} selectedCard={selectedCard} />
        <EditProfilePopup isOpen={isEditProfilePopupOpen} closeAllPopups={closeAllPopups} onUpdateUser={handleUpdateUser}></EditProfilePopup>
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
