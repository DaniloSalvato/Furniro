// import { PayloadAction, createSlice } from "@reduxjs/toolkit";
// import { Product } from "../../types/Product";
// import { toast } from "react-toastify";

// interface CartItem extends Product {
//   quantity: number;
// }

// interface CartState {
//   cart: CartItem[];
// }

// const initialState: CartState = {
//   cart: [],
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addProduct: (state, action: PayloadAction<Product>) => {
//       const existingProduct = state.cart.find(
//         (item) => item.id === action.payload.id
//      )
//       if (existingProduct) {
//         existingProduct.quantity += 1;
//         toast.success("Product quantity updated successfully!");
//       } else {
//         state.cart.push({ ...action.payload, quantity: 1 });
//         toast.success("Product added to cart successfully!");
//       }
//     },
//     removeProduct: (state, action: PayloadAction<number>) => {
//       state.cart = state.cart.filter((item) => item.id !== action.payload);
//       toast.success("Product removed from cart successfully!");
//     },
//     updateQuantity: (
//       state,
//       action: PayloadAction<{ id: number; quantity: number }>
//     ) => {
//       const product = state.cart.find((item) => item.id === action.payload.id);
//       if (product) {
//         console.log(product.quantity);
//         product.quantity += action.payload.quantity;
        
//         if (product.quantity <= 0) {
//           state.cart = state.cart.filter(
//             (item) => item.id !== action.payload.id
//           );
//           toast.success("Product removed from cart successfully!");
//         } else {
//           toast.success("Product quantity updated successfully!");
//         }
//       }
//     },
//     clearCart: (state) => {
//       state.cart = [];
//       toast.success("Cart cleared successfully!");
//     },
//   },
// });

// export const { addProduct, removeProduct, updateQuantity, clearCart } = cartSlice.actions;

// export default cartSlice.reducer;



