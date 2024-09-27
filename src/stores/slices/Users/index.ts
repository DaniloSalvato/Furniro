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
      state.user = payload;
    },
    logoutUser(state) {
      state.user = {
        uid: "",
        displayName: "",
        email: "",
        photoURL: "",
        accessToken: "",
      };
    },
  },
});

export const { setUser, logoutUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
