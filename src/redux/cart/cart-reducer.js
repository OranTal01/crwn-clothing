import { CART_ACTION_TYPES } from './cart-constants';
import { addItems } from './cat-utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CART_ACTION_TYPES.TOGGLE_CART_DROPDOWN:
            return {
                ...state,
                hidden: !state.hidden
            };
        case CART_ACTION_TYPES.ADD_ITEM:
            return {
                ...state,
                cartItems: addItems(state.cartItems, action.payload)
            };

        default:
            return state;
    }
};

export default cartReducer;
