import {
  FETCH_DATA_FAILURE,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FetchDataFailureAction,
  FetchDataRequestAction,
  FetchDataSuccessAction,
  Item,
} from "../../types/Item";

export const fetchDataRequest = (): FetchDataRequestAction => ({
  type: FETCH_DATA_REQUEST,
});

export const fetchDataSuccess = (items: Item[]): FetchDataSuccessAction => ({
  type: FETCH_DATA_SUCCESS,
  payload: items,
});

export const fetchDataFailure = (error: string): FetchDataFailureAction => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});