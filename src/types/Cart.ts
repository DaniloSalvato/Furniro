export interface CartItem {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  about: string;
  image: string;
  star: number;
  value: number;
  inSale: boolean;
  percentage: number;
  isNew: boolean;
  sku: string;
  category: string;
  tags: string[];
  quantity: number;
}

export interface CartState {
  cartItems: CartItem[];
  loading: boolean;
  error: string | null;
}

export const ADD_TO_CART = "ADD_TO_CART";
export const UPDATE_CART = "UPDATE_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export interface AddToCartAction {
  type: typeof ADD_TO_CART;
  payload: CartItem;
}

export interface UpdateCartAction {
  type: typeof UPDATE_CART;
  payload: { id: number; quantity: number };
}

export interface RemoveFromCartAction {
  type: typeof REMOVE_FROM_CART;
  payload: { id: number };
}

export type CartActionTypes =
  | AddToCartAction
  | UpdateCartAction
  | RemoveFromCartAction;
