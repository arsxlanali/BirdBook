import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { baseURL } from "../../apiUrl";
import axios from "axios";

const initialState = {
  qustions: [],
};

export const addQuiz = createAsyncThunk(
  "addQuiz",
  async ({ data, setSubmitting }) => {
    // const token = localStorage.getItem("Token");
    console.log("token", data);
    try {
      const res = await axios.post(`${baseURL}/questions`, data);
      setSubmitting(false);
      // console.log("Success", res?.data);
      toast.success("Sucessfully Added Quiz!");
      return res?.data;
    } catch (error) {
      setSubmitting(false);
    }
  }
);
export const getQuiz = createAsyncThunk("getQuiz", async (data) => {
  // const token = localStorage.getItem("Token");
  // console.log("token", data);
  try {
    const res = await axios.post(`${baseURL}/questions/getAll`, data);
    // setSubmitting(false);
    // console.log("Success", res?.data);
    // toast.success("Sucessfully Added Quiz!");
    return res?.data;
  } catch (error) {
    console.error(error);
  }
});
export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    clearQuiz: (state) => {
      state.qustions = [];
    },
  },
  extraReducers: {
    [getQuiz.fulfilled]: (state, { payload }) => {
      state.qustions = payload;
    },
  },
});

export const { clearQuiz } = quizSlice.actions;
export default quizSlice.reducer;
