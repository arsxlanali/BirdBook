import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { baseURL } from "../../apiUrl";
import axios from "axios";

const initialState = {
  podcasts: [],
};

export const getpodcasts = createAsyncThunk("article/getpodcasts", async () => {
  try {
    const res = await axios.get(`${baseURL}/podcasts`);
    return res?.data;
  } catch (error) {
    console.error(error);
  }
});
export const podcastSlice = createSlice({
  name: "podcast",
  initialState,
  reducers: {
    clearQuiz: (state) => {
      state.articles = [];
    },
  },
  extraReducers: {
    [getpodcasts.fulfilled]: (state, { payload }) => {
      //   console.log("Payload", payload);
      state.podcasts = payload;
    },
  },
});

export const { clearQuiz } = podcastSlice.actions;
export default podcastSlice.reducer;
