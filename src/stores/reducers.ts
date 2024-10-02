import { combineReducers } from "redux";
import { cartReducer } from "./slices/Cart";
import { orderReducer } from "./slices/Orders";
import { userReducer } from "./slices/Users";
import { itemsApi } from "./slices/Items";

export const rootReducer = combineReducers({
    cart: cartReducer,
    order: orderReducer,
    user:userReducer,
    [itemsApi.reducerPath]: itemsApi.reducer,
  })