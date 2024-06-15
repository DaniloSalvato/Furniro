import { RootState } from "../../types";
import { ItemActionTypes, ItemState, REMOVE_ITEM, SET_ITEM } from "../../types/Item";

const initialState: ItemState = {
  items: []
};

export const selectItems = (state: RootState) => state.items

const itemReducer = (state = initialState, action: ItemActionTypes): ItemState => {
  switch (action.type) {
    case SET_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    case REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id)
      };
    default:
      return state;
  }
};

export default itemReducer;
