import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  project: [],
};

export const projectSlice = createSlice({
  name: "project",
  initialState: initialState,
  reducers: {
    setProject: (state, action) => {
      state = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setProject } = projectSlice.actions;

export default projectSlice.reducer;
