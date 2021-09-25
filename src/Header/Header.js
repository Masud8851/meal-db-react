import React from 'react';
import logo from '../images/logo-small.png'
import '../Header/Header.css'

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="" />
            <div>
                <a href="/home">Home</a>
                <a href="/api">API</a>
                <a href="/forum">Forum</a>
                <input type="text" placeholder="Search"/>
            </div>
        </div>
    );
};

export default Header;