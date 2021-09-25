import React from 'react';
import logo from '../../images/logo-small.png'
import '../Header/Header.css'

const Header = () => {
    return (
        <div>
            <div className="header">
                <img src={logo} alt="" />
                <div className="href-input">
                    <a href="/home">Home</a>
                    <a href="/api">API</a>
                    <a href="/forum">Forum</a>
                    <input type="text" placeholder="Search"/>
                </div>
            </div>
        </div>
    );
};

export default Header;