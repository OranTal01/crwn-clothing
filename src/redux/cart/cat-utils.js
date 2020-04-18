export const addItems = (cartItems, addNewItemToCart) => {
    const isItemExist = cartItems.find(item => item.id === addNewItemToCart.id);

    if (isItemExist) {
        return cartItems.map((item) =>
            item.id === addNewItemToCart.id ? { ...item, quantity: item.quantity + 1 } : item
        );
    }

    return [...cartItems, { ...addNewItemToCart, quantity: 1 }];
};

export const removeItems = (cartItems, removeItemFromCart) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === removeItemFromCart.id);

    if (existingCartItem.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem.id !== removeItemFromCart.id);
    }

    return cartItems.map((cartItem) =>
        cartItem.id === removeItemFromCart.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem);
};