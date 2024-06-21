import {
  ADD_TO_CART,
  CartActionTypes,
  CartState,
  REMOVE_FROM_CART,
  UPDATE_CART,
} from "../../types/Cart";

const initialState: CartState = {
  cartItems: [],
  loading: false,
  error: null,
};

const cartReducer = (
  state = initialState,
  action: CartActionTypes
): CartState => {
  switch (action.type) {
    case ADD_TO_CART: {
      const item = action.payload;
      const existingItem = state.cartItems.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem > -1) {
        state.cartItems[existingItem].quantity = item.quantity;
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...item, quantity: item.quantity || 1 }],
        };
      }
      return {...state};
    }
    case UPDATE_CART: {
      const item = action.payload;
      const existingItem = state.cartItems.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem === -1) return {...state};

      if (item.quantity >= 1) {
        state.cartItems[existingItem].quantity = item.quantity;
      } else {
        const newState = state.cartItems.filter(
          (items) => items.id !== item.id
        );
        return { ...state, cartItems: newState };
      }
      return {...state};
    }
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;
