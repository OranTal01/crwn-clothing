export const addItems = (cartItems, addNewItemToCart) => {
    const isItemExist = cartItems.find(item => item.id === addNewItemToCart.id);

    if (isItemExist) {
        return cartItems.map((item) =>
            item.id === addNewItemToCart.id ? { ...item, quantity: item.quantity + 1 } : item
        );
    }

    return [...cartItems, { ...addNewItemToCart, quantity: 1 }];
};

export const subtractAndRemoveItems = (cartItems, subtractAndRemoveItemFromCart) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === subtractAndRemoveItemFromCart.id);

    if (existingCartItem.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem.id !== subtractAndRemoveItemFromCart.id);
    }

    return cartItems.map((cartItem) =>
        cartItem.id === subtractAndRemoveItemFromCart.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem);
};

export const removeItem = (cartItems, removeItem) => {
    return cartItems.filter((cartItem) => cartItem.id !== removeItem.id);
};