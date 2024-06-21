import { CartItem } from "./Cart";

export interface Order {
  add: string;
  additionalInfo?: string;
  city: string;
  company?: string;
  country: string;
  email: string;
  firstName: string;
  items: CartItem[];
  lastName: string;
  paymentMethod: string;
  province: string;
  street: string;
  totalAmount: number;
  zip: string;
}

export interface OrderState {
  order: Order;
}

export const CREATE_ORDER = "CREATE_ORDER";

export interface GenericAction<T = string, P = unknown> {
  type: T;
  payload: P;
}

export type CreateOrderAction = GenericAction<typeof CREATE_ORDER, Order>;

export type CreateOrderActionType =  CreateOrderAction

