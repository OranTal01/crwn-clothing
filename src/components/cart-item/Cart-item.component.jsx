import React from 'react';
import { connect } from 'react-redux';

import './Cart-item.style.scss';
import { subtractAndRemoveItem } from '../../redux/cart/cart-actions';

const CartItem = ({ cartItem, subtractAndRemoveItem }) => {
    const { imageUrl, price, name, quantity } = cartItem;
    return (
        <div className="cart-item">
            <img src={ imageUrl } alt="item" />
            <div className="item-details">
                <span>{ name }</span>
                <span>
                    { quantity } X { `$${price}` }

                </span>

            </div>
            <button className="remove-item" onClick={ () => subtractAndRemoveItem(cartItem) }><span>remove</span></button>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    subtractAndRemoveItem: (item) => dispatch(subtractAndRemoveItem(item))
});

export default connect(null, mapDispatchToProps)(CartItem);