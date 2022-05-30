import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  project: [],
};

export const projectSlice = createSlice({
  name: "project",
  initialState: initialState,
  reducers: {
    setProject: (state, action) => {
      state.project = action.payload.project;
    },
    clearProject: (state) => {
      state.project = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { setProject, clearProject } = projectSlice.actions;

export default projectSlice.reducer;
