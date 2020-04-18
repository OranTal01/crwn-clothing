import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/Custom-button.component';
import CartItem from '../cart-item/Cart-item.component';
import { selectCartItems, selectCartHidden } from '../../redux/cart/cart-selectors';
import { toggleCartDropdown } from '../../redux/cart/cart-actions';

import './Cart-dropdown.style.scss';

const CartDropdown = ({ cartItems, history, toggleCartDropdown }) => {
    return (
        <div className="cart-dropdown" onMouseLeave={ () => toggleCartDropdown() }>

            <div className="cart-items">
                {
                    cartItems.length ?
                        cartItems.map(cartItem => (
                            <CartItem key={ cartItem.id } cartItem={ cartItem } />
                        )) :
                        <span className="empty-message">Your cart is empty</span>
                }
            </div>
            <CustomButton disabled={ cartItems.length === 0 } onClick={ () => history.push('/checkout') }>GO TO CHECKOUT</CustomButton>

        </div>
    );
};

const mapStateToProps = state => ({
    cartItems: selectCartItems(state),
    hidden: selectCartHidden(state)
});

const mapDispatchToProps = dispatch => ({
    toggleCartDropdown: () => dispatch(toggleCartDropdown())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));