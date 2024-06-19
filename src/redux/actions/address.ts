import { Address, FETCH_ADDRESS_FAILURE, FETCH_ADDRESS_REQUEST, FETCH_ADDRESS_SUCCESS, FetchAddressFailureAction, FetchAddressRequestAction, FetchAddressSuccessAction } from "../../types/Address";

export const fetchAddressRequest = (): FetchAddressRequestAction => ({ type: FETCH_ADDRESS_REQUEST });

export const fetchAddressSuccess = (address: Address) :FetchAddressSuccessAction => ({
  type: FETCH_ADDRESS_SUCCESS,
  payload: address,
});

export const fetchAddressFailure = (error: string): FetchAddressFailureAction => ({
  type: FETCH_ADDRESS_FAILURE,
  payload: error,
});