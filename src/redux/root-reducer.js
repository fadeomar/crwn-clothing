import { combineReducers } from "redux";

import userReducer from "./user-reducer";
import cartReducer from "./casrt/reducer";

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
});
