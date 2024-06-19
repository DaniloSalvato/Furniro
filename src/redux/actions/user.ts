import { User, UserActionTypes, ADD_USER, REMOVE_USER } from "../../types/User";

export const addUser = (user: User): UserActionTypes => ({
  type: ADD_USER,
  payload: user,
});

export const removeUser = (user: User): UserActionTypes => ({
  type: REMOVE_USER,
  payload: user,
});
