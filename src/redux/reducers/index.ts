import { combineReducers } from "redux";
import itemReducers from "./item";
import cartReducers from "./cart";
import addressReducers from "./address"
import orderReducers from "./order";


export const rootReducer = combineReducers({
  items: itemReducers,
  cart: cartReducers,
  address: addressReducers,
  order: orderReducers
});

export type RootState = ReturnType<typeof rootReducer>;
