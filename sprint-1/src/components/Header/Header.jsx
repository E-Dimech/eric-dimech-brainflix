import React from 'react';
import Logo from '../../assets/Logo/Logo-brainflix.svg';
import Magnifyer from '../../assets/Icons/SVG/Icon-search.svg';
import Upload from '../../assets/Icons/SVG/Icon-upload.svg';
import Mohan from '../../assets/Images/Mohan-muruge.jpg';

const Header = () => {
    return (
        <div className="header">
            <a className="header__logo" href="./Header.jsx">
                <img className="header__logo-img" src={Logo} alt="Brainflix logo" />
            </a>
            <form className="header__search-container">
                <img className="header__search-container-magnify" src={Magnifyer} alt="Magnifying glass" />
                <input className="header__search-container-input" placeholder="Search" />
            </form>
            <div className="header__nav">
                <button className="header__nav-upload">
                    <img className="header__nav-upload-img" src={Upload} alt="Upload button" />
                    UPLOAD
                </button>
                <img className="header__nav-user-icon" src={Mohan} alt="User Mohan badge" />

            </div>
        </div>
    )
};



export default Header;