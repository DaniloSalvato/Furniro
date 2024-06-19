import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AddressActionTypes } from "../../types/Address";
import { RootState } from "../reducers";
import { fetchAddressFailure, fetchAddressRequest, fetchAddressSuccess } from "../actions/address";

export const fetchAddress = (cep: string): ThunkAction<void, RootState, unknown, AddressActionTypes> => {
    return async (dispatch: ThunkDispatch<RootState, unknown, AddressActionTypes>) => {
      dispatch(fetchAddressRequest());
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        if (data.erro) {
          throw new Error('CEP não encontrado');
        }
        dispatch(fetchAddressSuccess(data));
      } catch (error) {
        const err = error as Error;
        dispatch(fetchAddressFailure(err.message));
      }
    };
  };