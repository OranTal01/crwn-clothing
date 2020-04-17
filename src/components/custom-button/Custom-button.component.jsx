import React from 'react';
import './Custom-button.style.scss';

const CustomButton = ({ children, isGoogleSignIn, cartItem, ...otherProps }) => (
    <button
        className={ `${isGoogleSignIn ? 'google-sign-in' : ''} custom-button ${cartItem ? 'cart-item-button' : ''}` }
        { ...otherProps }
    >
        { children }
    </button>
);

export default CustomButton;