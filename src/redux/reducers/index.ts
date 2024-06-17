import { combineReducers } from "redux";
import itemReducers from "./item";
import cartReducers from "./cart";


export const rootReducer = combineReducers({
  items: itemReducers,
  cart: cartReducers,
});

export type RootState = ReturnType<typeof rootReducer>;
