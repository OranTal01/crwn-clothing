import { CART_ACTION_TYPES } from './cart-constants';

export const toggleCartDropdown = () => ({
    type: CART_ACTION_TYPES.TOGGLE_CART_DROPDOWN
});

export const addItem = item => ({
    type: CART_ACTION_TYPES.ADD_ITEM,
    payload: item
});

export const subtractAndRemoveItem = item => ({
    type: CART_ACTION_TYPES.SUBTRACT_AND_REMOVE_ITEM,
    payload: item
});

export const removeItem = item => ({
    type: CART_ACTION_TYPES.REMOVE_ITEM,
    payload: item
});