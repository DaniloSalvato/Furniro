import { CartState } from "./Cart";
import { ItemState } from "./Item";
import { UserState } from "./User";

export interface RootState {
    items: ItemState;
    users: UserState;
    cart: CartState;
  }