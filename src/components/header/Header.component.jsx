import React from 'react';
import './Header.style.scss';
import { ReactComponent as Logo } from '../../assets/Logo.svg';
import { Link } from 'react-router-dom';

const Header = _ => {
    return (
        <div className="header">
            <Link to="/">
                <div className="logo-container">
                    <Logo />
                </div>
            </Link>
            <div className="options">
                <div className="option">
                    <Link to="/shop">
                        SHOP
            </Link>
                </div>
                <div className="option">
                    <Link to="/contact">
                        CONTACT
            </Link></div>
                <div className="option">
                    <Link to="/sign-in">
                        SIGN IN
            </Link></div>
            </div>

        </div>
    );
};

export default Header;