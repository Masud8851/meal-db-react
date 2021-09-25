import React from 'react';
import logo from '../images/logo-small.png'
import '../Header/Header.css'

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="" />
            <div></div>
        </div>
    );
};

export default Header;