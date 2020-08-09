import React from 'react';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import './pages/index.css';

function App() {
  const [isEditProfilePopupOpen, setIsEditOpen]=React.useState(false);
  const [isAddPlacePopupOpen, setIsAddOpen]=React.useState(false);
  const [isEditAvatarPopupOpen, setIsAvatarOpen]=React.useState(false);

  function handleEditProfileClick() {
    setIsEditOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddOpen(true);
  }

  function handleEditAvatarClick() {
    setIsAvatarOpen(true);
  }

  function closeAllPopups(){
    setIsEditOpen(false);
    setIsAvatarOpen(false);
    setIsAddOpen(false);
  }
  return (
    <div className="page">
      <div className="darken hidden"></div>
      <div className="darken-dark hidden"></div>
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} closeAllPopups={closeAllPopups}
            isEditProfilePopupOpen={isEditProfilePopupOpen} isAddPlacePopupOpen={isAddPlacePopupOpen} isEditAvatarPopupOpen={isEditAvatarPopupOpen}/>
      <Footer />
      <template id="img-template">
        <li className="elements__item">
          <img src="./images/lago_di_braies.jpg" alt="BeautifulPicture" className="elements__img" />
          <button className="elements__trash hidden"></button>
          <div className="elements__title-box">
            <h2 className="elements__title">Lago di Braies</h2>
            <div className="elements__like-box">
              <button className="elements__heart"></button>
              <p className="elements__like-count">0</p>
            </div>
          </div>
        </li>
      </template>
    </div>
  );
}

export default App;
