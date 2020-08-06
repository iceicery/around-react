import React from 'react';
import logo from './logo.svg';
import './index.css';

function App() {
  return (
    <body className="page">
      <div className="darken hidden"></div>
      <div className="darken-dark hidden"></div>
      <header className="header">
        <img src="./images/Vector.svg" alt="logo" className="header__logo"/>
    </header>
        <main className="container">
          <section className="profile">
            <div className="profile__img-container">
              <img src="images/explorer.jpg" alt="explorer" className="profile__img"/>
                <img src="images/pen.svg" alt="button" className="profile__img-edit"/>
            </div>
                <div className="profile__text-container">
                  <div className="profile__title-box">
                    <h1 className="profile__title">Jacques Cousteau</h1><button className="profile__button-sqr"></button>
                  </div>
                  <p className="profile__subtitle">Explorer</p>
                </div>
                <button className="profile__button-reg"></button>
        </section>
              <section className="elements">
                <ul className="elements__container">
                </ul>
              </section>
              <section className="edit hidden">
                <button className="edit__button-icon"></button>
                <form className="edit__form" novalidate>
                  <h2 className="edit__title">Edit profile</h2>
                  <input type="text" id="name" className="edit__input edit__input-name" name="name" value="Jacques Cousteau"
                    placeholder="Name" required minlength="2" maxlength="40"/>
                    <span className="edit__input-error" id="name-error"></span>
                    <input type="text" id="job" className="edit__input edit__input-job" name="link" value="Explorer"
                      placeholder="About" required minlength="2" maxlength="200"/>
                      <span className="edit__input-error" id="job-error"></span>
                      <button className="edit__button">Save</button>
            </form>
        </section>
                  <section className="add hidden">
                    <button className="add__button-icon"></button>
                    <form className="add__form" novalidate>
                      <h2 className="add__title">New Place</h2>
                      <input type="text" id="title" className="add__input add__input-title add__input-name" name="name"
                        placeholder="Title" value="" required minlength="1" maxlength="30"/>
                        <span className="add__title-error" id="title-error"></span>
                        <input type="url" id="link" className="add__input add__input-img add__input-link" name="link"
                          placeholder="Image link" value="" required minlength="1"/>
                          <span className="add__link-error" id="link-error"></span>
                          <button className="add__button">Create</button>
            </form>
        </section>
                      <section className="bigPic hidden">
                        <button className="bigPic__button-icon"></button>
                        <img src="./images/yosemite.jpg" alt="BigPicture" className="bigPic__img"/>
                          <p className="bigPic__title">Yosemite Valley</p>
        </section>
                        <section className="remove hidden">
                          <form>
                            <button className="remove__button-icon"></button>
                            <h2 className="remove__title">Are you sure?</h2>
                            <button className="remove__button">Yes</button>
                          </form>
                        </section>
                        <section className="avatar hidden">
                          <button className="avatar__button-icon"></button>
                          <form className="avatar__form" novalidate>
                            <h2 className="avatar__title">Change userpic</h2>
                            <input type="url" id="img" className="avatar__input avatar__input-img avatar__input-link" name="link"
                              placeholder="Image link" value="" required minlength="1"/>
                              <span className="avatar__link-error" id="img-error"></span>
                              <button className="avatar__button">Save</button>
            </form>
        </section>
    </main>
                        <footer className="footer">
                          <p className="footer__text">© 2020 Around The U.S.</p>
                        </footer>
                        <template id="img-template">
                          <li className="elements__item">
                            <img src="./images/lago_di_braies.jpg" alt="BeautifulPicture" className="elements__img"/>
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
</body>
  );
}

export default App;
