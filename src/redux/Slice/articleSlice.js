import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { baseURL } from "../../apiUrl";
import axios from "axios";

const initialState = {
  articles: [],
};

export const getArticles = createAsyncThunk("article/getArticles", async () => {
  try {
    const res = await axios.get(`${baseURL}/articles`);
    // console.log("Success", res?.data);
    return res?.data;
  } catch (error) {
    console.error(error);
  }
});
export const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    clearQuiz: (state) => {
      state.articles = [];
    },
  },
  extraReducers: {
    [getArticles.fulfilled]: (state, { payload }) => {
      //   console.log("Payload", payload);
      state.articles = payload;
    },
  },
});

export const { clearQuiz } = articleSlice.actions;
export default articleSlice.reducer;
