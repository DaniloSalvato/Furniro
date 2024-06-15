export interface Item {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  about: string;
  image: string;
  star: number;
  value: number;
  inSale: boolean;
  percentage: number;
  isNew: boolean;
  sku: string;
  category: string;
  tags: string[];
  quantity:number;
}

export interface ItemState {
  items: Item[];
}

export const SET_ITEM = "SET_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";

interface AddItemAction {
  type: typeof SET_ITEM;
  payload: Item;
}
interface RemoveItemAction {
  type: typeof REMOVE_ITEM;
  payload:  {id: number}
}

export type ItemActionTypes = AddItemAction | RemoveItemAction
