import { ItemType } from "../Items/type";

export interface OrderType  {
    add: string;
    additionalInfo?: string;
    city: string;
    company?: string;
    country: string;
    email: string;
    firstName: string;
    items: ItemType[];
    lastName: string;
    paymentMethod: string;
    province: string;
    street: string;
    totalAmount: number;
    zip: string;
  }