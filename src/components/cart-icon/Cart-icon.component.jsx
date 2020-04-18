import React from 'react';
import { connect } from 'react-redux';

import './Cart-icon.style.scss';

import { ReactComponent as IconCart } from '../../assets/original.svg';
import { toggleCartDropdown } from '../../redux/cart/cart-actions';
import { selectCartItemsCount } from '../../redux/cart/cart-selectors';

const CartIcon = ({ toggleCartDropdown, itemCount }) => {
    return (
        <div onClick={ toggleCartDropdown } className="cart-icon">
            <IconCart className="shopping-icon" />
            <span className="item-count">{ itemCount }</span>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    toggleCartDropdown: () => dispatch(toggleCartDropdown())
});

const mapStateToProps = state => ({
    itemCount: selectCartItemsCount(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);