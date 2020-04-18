import React from 'react';

import './Cart-item.style.scss';

const CartItem = ({ cartItem }) => {
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
            <button><span>remove item</span></button>
        </div>
    );
};

export default CartItem;