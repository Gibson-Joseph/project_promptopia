import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
};

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: () => {
      return null;
    },
    logIn: (_, action) => {
      return { id: action.payload };
    },
  },
});

export const { logIn, logOut } = auth.actions;
export default auth.reducer;
