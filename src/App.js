import React from 'react';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import logo from './logo.svg';
import './index.css';


function App() {
  return (
    <body className="page">
      <div className="darken hidden"></div>
      <div className="darken-dark hidden"></div>
      <Header />
      <Main />
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
    </body>
  );
}

export default App;
