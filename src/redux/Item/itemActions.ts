import { Item, REMOVE_ITEM, SET_ITEM } from '../../types/Item';
import { ThunkAction } from 'redux-thunk';
import { ItemActionTypes } from '../../types/Item';
import axios from 'axios';
import { API_URL } from '../../service/url';
import { RootState } from '../../types';

export const setItems  = (items: Item): ItemActionTypes => ({
  type: SET_ITEM,
  payload: items
});

export const removeItem = (itemId: number): ItemActionTypes => ({
  type: REMOVE_ITEM,
  payload: { id: itemId }
});


export const fetchItems = (): ThunkAction<void, RootState, null, ItemActionTypes> => async dispatch => {
  try {
    const response = await axios.get(API_URL);
    const items: Item[] = response.data;
    items.forEach(item => {
      dispatch(setItems(item));
    });
  } catch (error) {
    console.log(error);
  }
};
