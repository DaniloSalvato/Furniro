import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { CreateOrderAction, Order } from "../../types/Order";
import { RootState } from "../reducers";
import { createOrder } from "../actions/order";

export const CreateNewOrder = (order: Order): ThunkAction<void, RootState, unknown, CreateOrderAction> => {
  return (dispatch: ThunkDispatch<RootState, unknown, CreateOrderAction>) => {
    dispatch(createOrder(order));
  };
};
