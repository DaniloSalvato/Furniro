export interface User {
    id: number;
    name: string;
  }
  
  export interface UserState {
    user: User | null;
  }
  
  export const ADD_USER = 'ADD_USER';
  export const REMOVE_USER = 'REMOVE_USER';
  
  interface AddUserAction {
    type: typeof ADD_USER;
    payload: User;
  }
  
  interface RemoveUserAction {
    type: typeof REMOVE_USER;
    payload: { id: number };
  }
  
  export type UserActionTypes = AddUserAction | RemoveUserAction;