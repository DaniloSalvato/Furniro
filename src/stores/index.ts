import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./slices/Cart";
import { orderReducer } from "./slices/Orders";
import { itemsApi } from "./slices/Items";
import { setupListeners } from "@reduxjs/toolkit/query";
import { useDispatch, useSelector } from "react-redux";
import { userReducer } from "./slices/Users";


export const store = configureStore({
  reducer: {
    cart: cartReducer,
    order: orderReducer,
    user:userReducer,
    [itemsApi.reducerPath]: itemsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(itemsApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
