import { configureStore } from "@reduxjs/toolkit";
import loginSliceReducer from "./Slice/loginSlice";
import quizSlice from "./Slice/quizSlice";

export default configureStore({
  reducer: {
    login: loginSliceReducer,
    quiz: quizSlice,
  },
});
