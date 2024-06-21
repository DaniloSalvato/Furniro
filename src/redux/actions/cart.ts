import {
  ADD_TO_CART,
  AddToCartAction,
  CartItem,
  REMOVE_FROM_CART,
  RemoveFromCartAction,
  UPDATE_CART,
  UpdateCartAction,
} from "../../types/Cart";

export const addToCart = (item: CartItem): AddToCartAction => ({
  type: ADD_TO_CART,
  payload: item,
});

export const updateCart = (id: number, quantity: number): UpdateCartAction => ({
  type: UPDATE_CART,
  payload: { id, quantity },
});

export const removeFromCart = (id: number): RemoveFromCartAction => ({
  type: REMOVE_FROM_CART,
  payload: { id },
});
