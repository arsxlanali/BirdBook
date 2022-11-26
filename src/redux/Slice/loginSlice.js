import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../../apiUrl";

const initialState = {
  user: null,
  logedIn: false,
};

export const loginAction = createAsyncThunk(
  "users/login",
  async ({ values, setSubmitting, navigate }) => {
    try {
      const res = await axios.post(`${baseURL}/auth`, values);
      setSubmitting(false);
      localStorage.setItem("Token", res.data.accessToken);
      localStorage.setItem("Name", res.data.name);
      localStorage.setItem("Email", res.data.email);
      localStorage.setItem("Id", res.data._id);
      toast.success("Successfull loged in");
      if (res.data.User == 5150) navigate("/admin");
      return res?.data;
    } catch (error) {
      console.error(error);
    }
  }
);
export const signup = createAsyncThunk(
  "signup",
  async ({ values, setSubmitting }) => {
    // console.log("This is pass", values);
    try {
      const res = await axios.post(`${baseURL}/register`, values);
      setSubmitting(false);
      toast.success("Sucessfully Signed up!");
      return res?.data;
    } catch (error) {
      setSubmitting(false);
    }
  }
);
export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logOut: (state) => {
      state.logedIn = false;
    },
    adminLogout: (state) => {
      state.user = 2001;
    },
  },
  extraReducers: {
    [loginAction.fulfilled]: (state, { payload }) => {
      state.user = payload.User;
      state.logedIn = true;
    },
  },
});

export const { logOut, adminLogout } = loginSlice.actions;
export default loginSlice.reducer;
