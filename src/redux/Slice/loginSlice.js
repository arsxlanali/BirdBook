import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { baseURL } from "../../apiUrl";

const initialState = {
  loginRes: null,
  signupRes: null,
  isOpen: false,
};

export const login = createAsyncThunk(
  "users/login",
  async ({ values, setSubmitting }) => {
    console.log("values", values);
    axios
      .post(`${baseURL}/auth`, values)
      .then((response) => {
        console.log("this is ", response);
        setSubmitting(false);
        localStorage.setItem("Token", response.data.accessToken);
        localStorage.setItem("Name", response.data.name);
        localStorage.setItem("Email", response.data.email);
        localStorage.setItem("Id", response.data._id);
        toast.success("Successfull loged in");
        // navigate("/");
        return response?.data;
      })
      .catch((error) => {
        setSubmitting(false);
        console.log("this is error", error);
        // setErrors({ email: "Invalid credentials" });
      });
  }
);
export const signup = createAsyncThunk(
  "signup",
  async ({ values, setSubmitting }) => {
    // console.log("This is pass", values);
    try {
      const res = await axios.post(`${baseURL}/register`, values);
      toast.success("Sucessfully Signed up");
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
    clearLogin: (state) => {
      state.entities = [];
    },
    // isOpen: (state) => {
    //   state.isOpen = true;
    // },
  },
  extraReducers: {
    [login.fulfilled]: (state, { payload }) => {
      state.loginRes = payload;
    },
    [signup.fulfilled]: (state, { payload }) => {
      state.signupRes = payload;
      state.isOpen = true;
    },
  },
});

export const { clearLogin } = loginSlice.actions;
export default loginSlice.reducer;
