import { CART_ACTION_TYPES } from './cart-constants';

const INITIAL_STATE = {
    hidden: true,
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CART_ACTION_TYPES.TOGGLE_CART_DROPDOWN:
            return {
                ...state,
                hidden: !state.hidden
            };

        default:
            return state;
    }
};

export default cartReducer;
