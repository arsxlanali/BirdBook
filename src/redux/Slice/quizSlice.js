import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { toast } from "react-toastify";
import { baseURL } from "../../apiUrl";
import axios from "axios";

const initialState = {
  entities: [],
};

export const addQuiz = createAsyncThunk(
  "addQuiz",
  async ({ data, setSubmitting }) => {
    const token = localStorage.getItem("Token");
    console.log("token", data);
    try {
      const res = await axios.post(`${baseURL}/questions`, data);
      setSubmitting(false);
      console.log("Success", res?.data);
      //   setTimeout(() => {
      //     history.push("/viewsheet");
      //   }, 3000);
      //   toast.success(res.data.message);
      return res?.data;
    } catch (error) {
      setSubmitting(false);
    }
  }
);
export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    clearQuiz: (state) => {
      state.entities = [];
    },
  },
  extraReducers: {
    [addQuiz.fulfilled]: (state, { payload }) => {
      state.entities = payload;
    },
  },
});

export const { clearQuiz } = quizSlice.actions;
export default quizSlice.reducer;
