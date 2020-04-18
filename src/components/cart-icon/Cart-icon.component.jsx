import React from 'react';

import './Cart-icon.style.scss';

import { ReactComponent as IconCart } from '../../assets/original.svg';
import { toggleCartDropdown } from '../../redux/cart/cart-actions';
import { connect } from 'react-redux';

const CartIcon = ({ toggleCartDropdown, cartItems }) => {
    return (
        <div onClick={ toggleCartDropdown } className="cart-icon">
            <IconCart className="shopping-icon" />
            <span className="item-count">{ cartItems.length }</span>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    toggleCartDropdown: () => dispatch(toggleCartDropdown())
});

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);