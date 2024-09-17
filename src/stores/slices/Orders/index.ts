import { createSlice } from "@reduxjs/toolkit";
import { OrderType } from "./type";


const initialState: OrderType = {
    add: "",
    additionalInfo: "",
    city: "",
    company: "",
    country: "",
    email: "",
    firstName: "",
    items: [],
    lastName: "",
    paymentMethod: "",
    province: "",
    street: "",
    totalAmount: 0,
    zip: "",
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    createOrder(state, { payload }) {
      state = payload;
    },
  },
});

export const { createOrder } = orderSlice.actions;
export const orderReducer = orderSlice.reducer;
