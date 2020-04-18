import React from 'react';
import { connect } from 'react-redux';

import { selectTotalPrice, selectCartItems } from '../../redux/cart/cart-selectors';

import './Checkout.style.scss';

const CheckoutPage = ({ total }) => {
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            <div className="total">{ `TOTAL: $${total}` }</div>
        </div>
    );
};

const mapStateToProps = state => ({
    cartItems: selectCartItems(state),
    total: selectTotalPrice(state)
});

export default connect(mapStateToProps)(CheckoutPage);