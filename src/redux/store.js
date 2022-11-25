import { configureStore } from "@reduxjs/toolkit";
import loginSliceReducer from "./Slice/loginSlice";
import quizSlice from "./Slice/quizSlice";
import articleSlice from "./Slice/articleSlice";

import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";

const reducers = combineReducers({
  login: loginSliceReducer,
  quiz: quizSlice,
  article: articleSlice,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["login"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export default store;
