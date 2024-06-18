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

export interface GenericAction<T = string, P = undefined> {
  type: T;
  payload?: P extends undefined ? never : P;
}

export type FetchDataRequestAction = GenericAction<typeof FETCH_DATA_REQUEST>;
export type FetchDataSuccessAction = GenericAction<typeof FETCH_DATA_SUCCESS,Item[]>;
export type FetchDataFailureAction = GenericAction<typeof FETCH_DATA_FAILURE,string>;

// export interface FetchDataRequestAction {
//   type: typeof FETCH_DATA_REQUEST;
// }

// export interface FetchDataSuccessAction {
//   type: typeof FETCH_DATA_SUCCESS;
//   payload: Item[];
// }

// export interface FetchDataFailureAction {
//   type: typeof FETCH_DATA_FAILURE;
//   payload: string;
// }

export type ItemActionTypes =
  | FetchDataRequestAction
  | FetchDataSuccessAction
  | FetchDataFailureAction;
