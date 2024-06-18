import {
  FETCH_DATA_FAILURE,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  ItemActionTypes,
  ItemState,
} from "../../types/Item";

const initialState: ItemState = {
  items: [],
  isLoading: false,
  error: null,
};

// const valid = <T>(state: T) => <A>(action: A) =>{
//   if(!action) return {...state}
//   return action
// }

const itemReducer = (
  state = initialState,
  action: ItemActionTypes
): ItemState => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        items: action.payload!,
        isLoading: false,
      };
    case FETCH_DATA_FAILURE:
      
      return {
        ...state,
        isLoading: false,
         error: action.payload!,
      };
    default:
      return state;
  }
};

export default itemReducer;
