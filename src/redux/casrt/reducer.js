import { TOGGLE_CART_HIDDEN, ADD_ITEM } from "./types";
import addItemUtil from "../../utils/addToCart";

const initialState = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case ADD_ITEM:
      return {
        ...state,
        cartItems: addItemUtil(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
