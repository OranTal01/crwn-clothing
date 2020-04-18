export const addItems = (cartItems, addNewItemToCart) => {
    const isItemExist = cartItems.find(item => item.id === addNewItemToCart.id);

    if (isItemExist) {
        return cartItems.map((item) =>
            item.id === addNewItemToCart.id ? { ...item, quantity: item.quantity + 1 } : item
        );
    }

    return [...cartItems, { ...addNewItemToCart, quantity: 1 }];
}