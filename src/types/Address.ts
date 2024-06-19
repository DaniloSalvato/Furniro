export interface Address {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}

export interface AddressState {
    address: Address;
    loading: boolean;
    error: string | null;
  }

export const FETCH_ADDRESS_REQUEST = 'FETCH_ADDRESS_REQUEST';
export const FETCH_ADDRESS_SUCCESS = 'FETCH_ADDRESS_SUCCESS';
export const FETCH_ADDRESS_FAILURE = 'FETCH_ADDRESS_FAILURE';

export interface GenericAction<T = string, P = undefined> {
  type: T;
  payload?: P extends undefined ? never : P;
}

export type FetchAddressRequestAction = GenericAction<typeof FETCH_ADDRESS_REQUEST>;

export type FetchAddressSuccessAction = GenericAction<
  typeof FETCH_ADDRESS_SUCCESS,
  Address
>;

export type FetchAddressFailureAction = GenericAction<
  typeof FETCH_ADDRESS_FAILURE,
  string
>;

export type AddressActionTypes =
  | FetchAddressRequestAction
  | FetchAddressSuccessAction
  | FetchAddressFailureAction;
