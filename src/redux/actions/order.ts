import { CREATE_ORDER, CreateOrderAction, Order } from "../../types/Order";


export const createOrder = (order: Order): CreateOrderAction => ({
    type: CREATE_ORDER,
    payload: order,
  });
  