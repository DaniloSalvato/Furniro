import { CartItem, UPDATE_TO_CART } from "../../types/Cart";
import {
  CartActionTypes,
  ADD_TO_CART,
  REMOVE_FROM_CART,
} from "../../types/Cart";

export const addToCart = (item: CartItem): CartActionTypes => ({
  type: ADD_TO_CART,
  payload: item,
});

export const updateToCart = (itemId: number, itemQuantity:number): CartActionTypes => ({
  type: UPDATE_TO_CART,
  payload: {id: itemId, quantity: itemQuantity},
});

export const removeFromCart = (itemId: number): CartActionTypes => ({
  type: REMOVE_FROM_CART,
  payload: { id: itemId },
});
