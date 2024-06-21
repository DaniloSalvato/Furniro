import {
  AddressActionTypes,
  AddressState,
  FETCH_ADDRESS_FAILURE,
  FETCH_ADDRESS_REQUEST,
  FETCH_ADDRESS_SUCCESS,
} from "../../types/Address";

const initialState: AddressState = {
  address: {
    cep: "",
    logradouro: "",
    complemento: "",
    bairro: "",
    localidade: "",
    uf: "",
    ibge: "",
    gia: "",
    ddd: "",
    siafi: "",
  },
  loading: false,
  error: null,
};
const addressReducer = (
  state = initialState,
  action: AddressActionTypes
): AddressState => {
  switch (action.type) {
    case FETCH_ADDRESS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_ADDRESS_SUCCESS:
      return { ...state, loading: false, address: action.payload! };
    case FETCH_ADDRESS_FAILURE:
      return { ...state, loading: false, error: action.payload! };
    default:
      return state;
  }
};
export default addressReducer;
