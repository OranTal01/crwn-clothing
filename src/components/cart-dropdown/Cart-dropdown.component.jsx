import React from 'react';
import './Cart-dropdown.style.scss';

import CustomButton from '../custom-button/Custom-button.component';

const CartDropdown = () => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                <CustomButton>GO TO CHECKOUT</CustomButton>
            </div>
        </div>
    );
};

export default CartDropdown;