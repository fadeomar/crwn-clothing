const decreaseItem = (cartItems, item) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === item.id,
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((elm) => elm.id !== existingCartItem.id);
  }

  return cartItems.map((elm) =>
    elm.id === existingCartItem.id
      ? { ...elm, quantity: elm.quantity - 1 }
      : elm,
  );
};

export default decreaseItem;
