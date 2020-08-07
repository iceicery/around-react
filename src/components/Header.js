import React from 'react';
import logoIcon from '../images/Vector.svg';
function Header() {
    return (
        <header className="header">
            <img src={logoIcon} alt="logo" className="header__logo" />
        </header>
    );
}

export default Header;