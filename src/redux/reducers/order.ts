import { CREATE_ORDER, CreateOrderActionType, OrderState } from "../../types/Order";

const initialState: OrderState = {
  order: {
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
  },
};

const orderReducer = (
  state = initialState,
  action: CreateOrderActionType
): OrderState => {
  switch (action.type) {
    case CREATE_ORDER:
      return {
        ...state,
        order: action.payload,
      };
    default:
      return state;
  }
};

export default orderReducer;
