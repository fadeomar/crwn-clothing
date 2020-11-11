import {
  TOGGLE_CART_HIDDEN,
  ADD_ITEM,
  REMOVE_ITEM,
  DECREASE_ITEM,
} from "./types";

export const toggleCartHidden = () => ({ type: TOGGLE_CART_HIDDEN });

export const addItemAction = (item) => ({ type: ADD_ITEM, payload: item });

export const removeItemAction = (item) => ({
  type: REMOVE_ITEM,
  payload: item,
});

export const decreaseItemAction = (item) => ({
  type: DECREASE_ITEM,
  payload: item,
});
