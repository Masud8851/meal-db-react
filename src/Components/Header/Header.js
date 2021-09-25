import React from 'react';
import logo from '../../images/logo-small.png'
import '../Header/Header.css'
import mealIcon from '../../images/meal-icon.png'

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
            <div className="welcome-section">
                <div>
                    <img src={mealIcon} alt="" />
                </div>
                <div>
                    <h2>Welcome to TheMealDB</h2>
                    <p>Welcome to TheMealDB: An open, crowd-sourced database of Recipes from around the world.
                        We also offer a free JSON API for anyone wanting to use it.
                        If you like the site, please consider supporting us on Patreon by clicking the link below...
                    </p>
                </div>
                <div>
                    <img src={mealIcon} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Header;