import React from 'react';
import Logo from '../../assets/Logo/Logo-brainflix.svg';

const Header = () => {
    return (
        <div className="header">
            <a className="header__logo" href="">
                <img className="header__logo-img" src={Logo} alt="Brainflix logo" />
            </a>
        </div>
    )
}



export default Header;