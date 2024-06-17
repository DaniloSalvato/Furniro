import { ThunkAction, ThunkDispatch } from "redux-thunk";

import axios from "axios";
import { RootState } from "../reducers";
import { Item, ItemActionTypes } from "../../types/Item";
import {
  fetchDataFailure,
  fetchDataRequest,
  fetchDataSuccess,
} from "../actions/item";
import { API_URL } from "../../service/url";

export const fetchData = (): ThunkAction<
  void,
  RootState,
  unknown,
  ItemActionTypes
> => {
  return async (
    dispatch: ThunkDispatch<RootState, unknown, ItemActionTypes>
  ) => {
    dispatch(fetchDataRequest());
    try {
      const response = await axios.get<Item[]>(API_URL);
      dispatch(fetchDataSuccess(response.data));
    } catch (error) {
      const err = error as Error;
      dispatch(fetchDataFailure(err.message));
    }
  };
};