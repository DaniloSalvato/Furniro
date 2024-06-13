// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { RootState, AppDispatch } from './path/to/store';
// import { addProduct, removeProduct, updateQuantity, clearCart } from './path/to/Cart/cartSlice';
// import { Product } from './path/to/types/Product';

// const CartComponent = () => {
//   const dispatch: AppDispatch = useDispatch();
//   const cart = useSelector((state: RootState) => state.cart.cart);

//   const handleAddProduct = (product: Product) => {
//     dispatch(addProduct(product));
//   };

//   const handleRemoveProduct = (id: number) => {
//     dispatch(removeProduct(id));
//   };

//   const handleUpdateQuantity = (id: number, quantity: number) => {
//     dispatch(updateQuantity({ id, quantity }));
//   };

//   const handleClearCart = () => {
//     dispatch(clearCart());
//   };

//   return (
//     <div>
//       <h1>Cart</h1>
//       {cart.map((item) => (
//         <div key={item.id}>
//           <p>{item.name}</p>
//           <p>Quantity: {item.quantity}</p>
//           <button onClick={() => handleRemoveProduct(item.id)}>Remove</button>
//         </div>
//       ))}
//       <button onClick={handleClearCart}>Clear Cart</button>
//     </div>
//   );
// };

// export default CartComponent;
