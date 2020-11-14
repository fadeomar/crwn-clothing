import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./user-reducer";
import cartReducer from "./casrt/reducer";

const persistConfig = {
  key: "root",
  storage,
  // here to config the name of reducer want to persist
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

export default persistReducer(persistConfig, rootReducer);
