import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems,
);

export const selectCartItemCount = createSelector([selectCartItems], (items) =>
  items.reduce((current, item) => current + item.quantity, 0),
);
