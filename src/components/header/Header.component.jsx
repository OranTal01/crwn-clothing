import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { ReactComponent as Logo } from '../../assets/Logo.svg';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/Cart-icon.component';
import CartDropdown from '../cart-dropdown/Cart-dropdown.component';
import { selectCurrentUser } from '../../redux/user/user-selectors';
import { selectCartHidden } from '../../redux/cart/cart-selectors';

import './Header.style.scss';

const Header = ({ currentUser, hidden }) => {
    return (
        <div className="header">
            <Link to="/">
                <div className="logo-container">
                    <Logo />
                    { currentUser ? <span>Welcome: { currentUser.displayName }</span> : null }
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
                    currentUser ?
                        <div className="option" onClick={ () => auth.signOut() }>
                            SIGN OUT
                        </div>
                        :
                        <Link className="option" to="/sign-in">
                            SIGN IN
                        </Link>
                }
                <CartIcon />
            </div>
            { hidden ? null : <CartDropdown /> }
        </div>
    );
};

const mapStateToProps = state => ({
    currentUser: selectCurrentUser(state),
    hidden: selectCartHidden(state)
});

export default connect(mapStateToProps)(Header);