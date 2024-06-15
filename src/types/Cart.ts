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
  quantity:number;
}

export interface CartState {
  cartItems: CartItem[];
}

export const ADD_TO_CART = "ADD_TO_CART";
export const UPDATE_TO_CART = "UPDATE_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

interface AddToCartAction {
  type: typeof ADD_TO_CART;
  payload: CartItem;
}

interface UpdateToCartAction {
  type: typeof UPDATE_TO_CART;
  payload: {id: number, quantity: number}
}

interface RemoveFromCartAction {
  type: typeof REMOVE_FROM_CART;
  payload: { id: number };
}

export type CartActionTypes = AddToCartAction | UpdateToCartAction | RemoveFromCartAction;
