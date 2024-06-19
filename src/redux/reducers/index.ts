import { combineReducers } from "redux";
import itemReducers from "./item";
import cartReducers from "./cart";
import addressReducers from "./address"


export const rootReducer = combineReducers({
  items: itemReducers,
  cart: cartReducers,
  address: addressReducers,
});

export type RootState = ReturnType<typeof rootReducer>;
