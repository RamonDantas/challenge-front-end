import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import projectReducer from "./project";

export default configureStore({
  reducer: {
    auth: authReducer,
    project: projectReducer,
  },
});
