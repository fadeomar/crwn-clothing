const addItemToCart = (cartItems, item) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === item.id,
  );

  return existingCartItem
    ? cartItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem,
      )
    : [...cartItems, { ...item, quantity: 1 }];
};

export default addItemToCart;
