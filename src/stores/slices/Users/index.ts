import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserProps, UserType } from "./type";

const initialState: UserType = {
  user: { uid: "", displayName: "", email: "", photoURL: "", accessToken: "" },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, { payload }: PayloadAction<UserProps>) {
      console.log(payload);
      state.user = payload
    },
  },
});

export const { setUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
