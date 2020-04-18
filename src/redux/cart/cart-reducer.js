import { CART_ACTION_TYPES } from './cart-constants';
import { addItems, subtractAndRemoveItems, removeItem } from './cat-utils';


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
        case CART_ACTION_TYPES.SUBTRACT_AND_REMOVE_ITEM:
            return {
                ...state,
                cartItems: subtractAndRemoveItems(state.cartItems, action.payload)
            };
        case CART_ACTION_TYPES.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItem(state.cartItems, action.payload)
            };
        default:
            return state;
    }
};

export default cartReducer;
