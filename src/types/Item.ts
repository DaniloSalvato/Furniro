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
  quantity: number;
}

export interface ItemState {
  items: Item[];
  isLoading: boolean;
  error: string | null;
}

export const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";
export const UPDATE_ITEM = "UPDATE_ITEM";

export interface FetchDataRequestAction {
  type: typeof FETCH_DATA_REQUEST;
}

export interface FetchDataSuccessAction {
  type: typeof FETCH_DATA_SUCCESS;
  payload: Item[];
}

export interface FetchDataFailureAction {
  type: typeof FETCH_DATA_FAILURE;
  payload: string;
}

export interface UpdateItemAction {
  type: typeof UPDATE_ITEM;
  payload: { id: number; quantity: number };
}

export type ItemActionTypes =
  | FetchDataRequestAction
  | FetchDataSuccessAction
  | FetchDataFailureAction
  | UpdateItemAction;
