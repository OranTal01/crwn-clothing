import React from 'react';
import { connect } from 'react-redux';

import './Cart-item.style.scss';
import { removeItem } from '../../redux/cart/cart-actions';

const CartItem = ({ cartItem, removeItem }) => {
    const { imageUrl, price, name, quantity } = cartItem;
    return (
        <div className="cart-item">
            <img src={ imageUrl } alt="item" />
            <div className="item-details">
                <span>{ name }</span>
                <span>
                    { quantity } X { price }
                </span>

            </div>
            <button className="remove-item" onClick={ () => removeItem(cartItem) }><span>remove</span></button>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    removeItem: (item) => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CartItem);