import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    name: "",
    email: "",
  },
  token: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setAuth: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logoff: (state) => {
      state.user = initialState.user;
      state.token = initialState.token;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAuth, logoff } = authSlice.actions;

export default authSlice.reducer;
