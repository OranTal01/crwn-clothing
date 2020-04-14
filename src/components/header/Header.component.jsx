import React from 'react';
import './Header.style.scss';
import { ReactComponent as Logo } from '../../assets/Logo.svg';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';

const Header = ({ user }) => {
    return (
        <div className="header">
            <Link to="/">
                <div className="logo-container">
                    <Logo />
                    { user ? <span>{ user.displayName }</span> : null }
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
                {
                    user ?
                        <div className="option" onClick={ () => auth.signOut() }>
                            SIGN OUT
                        </div>
                        :
                        <Link className="option" to="/sign-in">
                            SIGN IN
                        </Link>
                }
            </div>

        </div>
    );
};

export default Header;