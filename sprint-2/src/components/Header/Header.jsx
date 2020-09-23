import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/Logo/Logo-brainflix.svg';
import Magnifyer from '../../assets/Icons/SVG/Icon-search.svg';
import Upload from '../../assets/Icons/SVG/Icon-upload.svg';
import Mohan from '../../assets/Images/Mohan-muruge.jpg';

import './Header.scss';

const Header = () => {
    return (
        <div className="header">
            <Link to="/" className="header__logo">
                <img className="header__logo-img" src={Logo} alt="Brainflix logo" />
            </Link>
            <form className="header__search-container">
                <img className="header__search-container-magnify" src={Magnifyer} alt="Magnifying glass" />
                <input className="header__search-container-input" placeholder="Search" />
            </form>
            <div className="header__nav">
                <Link to="/upload">
                    <button className="header__nav-upload">
                        <img className="header__nav-upload-img" src={Upload} alt="Upload button" />
                        UPLOAD
                    </button>
                </Link>
                <img className="header__nav-user-icon" src={Mohan} alt="User Mohan badge" />

            </div>
        </div>
    )
};



export default Header;