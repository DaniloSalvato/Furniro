import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { CartActionTypes, CartItem } from "../../types/Cart";
import { RootState } from "../reducers";
import { addToCart, removeFromCart, updateCart } from "../actions/cart";

export const addItemToCart = (
  item: CartItem
): ThunkAction<void, RootState, unknown, CartActionTypes> => {
  return (dispatch: ThunkDispatch<RootState, unknown, CartActionTypes>) => {
    dispatch(addToCart(item));
  };
};

export const updateItemCart = (
  id: number,
  quantity: number
): ThunkAction<void, RootState, unknown, CartActionTypes> => {
  return (dispatch: ThunkDispatch<RootState, unknown, CartActionTypes>) => {
    dispatch(updateCart(id, quantity));
  };
};

export const removeItemFromCart = (
  id: number
): ThunkAction<void, RootState, unknown, CartActionTypes> => {
  return (dispatch: ThunkDispatch<RootState, unknown, CartActionTypes>) => {
    dispatch(removeFromCart(id));
  };
};

