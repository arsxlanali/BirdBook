import { configureStore } from "@reduxjs/toolkit";
import loginSliceReducer from "./Slice/loginSlice";

export default configureStore({
  reducer: {
    login: loginSliceReducer,
  },
});
