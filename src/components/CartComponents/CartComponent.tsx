// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { AppState } from '../reducers';
// import { addToCart } from '../actions/cartActions';
// import { Product } from '../actions/cartActions';

// const CartComponent: React.FC = () => {
//   const dispatch = useDispatch();
//   const cartItems = useSelector((state: AppState) => state.cart.cartItems);
//   const loading = useSelector((state: AppState) => state.cart.loading);
//   const error = useSelector((state: AppState) => state.cart.error);

//   useEffect(() => {
//     dispatch(addToCart(1));
//   }, [dispatch]);

//   return (
//     <div>
//       <h2>Shopping Cart</h2>
//       {loading && <p>Loading...</p>}
//       {error && <p>Error: {error}</p>}
//       {cartItems && (
//         <ul>
//           {cartItems.map((item: Product) => (
//             <li key={item.id}>{item.name} - ${item.price}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default CartComponent;
