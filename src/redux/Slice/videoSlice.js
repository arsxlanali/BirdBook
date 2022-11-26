import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { baseURL } from "../../apiUrl";
import axios from "axios";

const initialState = {
  videos: [],
};

export const getVideos = createAsyncThunk("article/getVideos", async () => {
  try {
    const res = await axios.get(`${baseURL}/videos`);
    return res?.data;
  } catch (error) {
    console.error(error);
  }
});
export const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    clearQuiz: (state) => {
      state.articles = [];
    },
  },
  extraReducers: {
    [getVideos.fulfilled]: (state, { payload }) => {
      //   console.log("Payload", payload);
      state.videos = payload;
    },
  },
});

export const { clearQuiz } = videoSlice.actions;
export default videoSlice.reducer;
