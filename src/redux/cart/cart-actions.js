import { CART_ACTION_TYPES } from './cart-constants';

export const toggleCartDropdown = () => ({
    type: CART_ACTION_TYPES.TOGGLE_CART_DROPDOWN
});

export const addItemToCart = item => ({
    type: CART_ACTION_TYPES.ADD_ITEM,
    payload: item
});

export const removeItem = item => ({
    type: CART_ACTION_TYPES.REMOVE_ITEM,
    payload: item
});