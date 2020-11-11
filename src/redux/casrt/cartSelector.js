import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems,
);

export const selectHidden = createSelector([selectCart], (cart) => cart.hidden);

export const selectCartItemCount = createSelector([selectCartItems], (items) =>
  items.reduce((current, item) => current + item.quantity, 0),
);

export const selctCartTotal = createSelector([selectCartItems], (items) =>
  items.reduce((current, item) => current + item.quantity * item.price, 0),
);
