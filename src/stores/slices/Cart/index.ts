import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ItemType } from "../Items/type";
import { CartType } from "./type";


const initialState: CartType = {
  items: [],
};

function hasItem(state: ItemType[], item: ItemType) {
  const existingItem = state.findIndex((stateItem) => stateItem.id === item.id);

  return existingItem;
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, { payload }) {
      const item = payload;
      const existingItem = hasItem(state.items, item);

      if (existingItem > -1) {
        state.items[existingItem].quantity =
          item.quantity || state.items[existingItem].quantity + 1;
      } else {
        state.items.push({
          ...item,
          quantity: item.quantity || 1,
        });
      }
    },
    updateToCart(
      state,
      { payload }: PayloadAction<{ item: ItemType; quantity: number }>
    ) {
      const item = payload;
      const existingItem = hasItem(state.items, item.item);

      if (existingItem === -1) return;

      if (item.quantity >= 1) {
        state.items[existingItem].quantity = item.quantity;
      } else {
        const newState = state.items.filter(
          (stateItem) => stateItem.id !== item.item.id
        );
        state.items = newState;
      }
    },
    removeFromCart(state, { payload }) {
      const newState = state.items.filter(
        (stateItem) => stateItem.id !== payload.id
      );
      state.items = newState;
    },
  },
});

export const { addToCart, updateToCart, removeFromCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
