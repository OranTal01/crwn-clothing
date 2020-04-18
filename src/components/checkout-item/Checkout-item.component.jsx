import React from 'react';
import { connect } from 'react-redux';

import { addItem, subtractAndRemoveItem, removeItem } from '../../redux/cart/cart-actions';

import './Checkout-item.style.scss';

const CheckoutItem = ({ cartItem, subtractAndRemoveItem, addItem, removeItem }) => {
    const { imageUrl, price, name, quantity } = cartItem;

    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={ imageUrl } alt="item" />
            </div>
            <span className="name">
                { name }
            </span>
            <span className="quantity">
                <div className="left-arrow" onClick={ () => subtractAndRemoveItem(cartItem) }>&#10094;</div>
                <span>{ quantity }</span>
                <div className="right-arrow" onClick={ () => addItem(cartItem) }>&#10095;</div>
            </span>
            <span className="price">
                { price }
            </span>
            <button className="remove-button" onClick={ () => removeItem(cartItem) }>
                X
            </button>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)),
    subtractAndRemoveItem: item => dispatch(subtractAndRemoveItem(item)),
    removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);