import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { toast } from "react-toastify";
import axios from "axios";
import history from "src/hisotry";
import { baseURL } from "../../src/apiUrl";

const initialState = {
  entities: [],
  isLoading: false,
};

export const login = createAsyncThunk(
  "users/login",
  async ({ values, setSubmitting, setErrors }) => {
    axios
      .post(`${baseURL}/auth`, values)
      .then((response) => {
        setSubmitting(false);
        localStorage.setItem("Token", response.data.accessToken);
        // localStorage.setItem("Role", response.data.data.role);
        // toast.success(response?.data?.message);
        return response?.data;
      })
      .catch((error) => {
        setSubmitting(false);
        // console.log("this is error", error)
        setErrors({ email: "Invalid credentials" });
      });
  }
);
export const PasswordRest = createAsyncThunk(
  "PasswordRest",
  async ({ values, setSubmitting, setErrors }) => {
    const id = values["id"];
    delete values["id"];
    // delete values["accept2"];
    const isDefault = localStorage.getItem("isDefualt");
    if (isDefault) {
      values["oldPassword"] = "tdc@1234";
    }
    console.log("This is pass", values);
    try {
      const res = await axios.post(
        `${baseURL}/users/resetPassword/${id}`,
        values
      );
      localStorage.setItem("isDefualt", false);
      setSubmitting(false);
      setTimeout(() => {
        history.push("/viewsheet");
      }, 3000);
      toast.success(res.data.message);
      return res?.data;
    } catch (error) {
      setSubmitting(false);
    }
  }
);
export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  reducers: {
    clearLogin: (state) => {
      state.entities = [];
    },
  },
  extraReducers: {
    [login.pending]: (state) => {
      state.isLoading = true;
    },
    [login.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.entities = payload;
    },
    [PasswordRest.rejected]: (state) => {
      state.isLoading = false;
    },
    [PasswordRest.pending]: (state) => {
      state.isLoading = true;
    },
    [PasswordRest.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.entities = payload;
    },
    [PasswordRest.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { clearLogin } = loginSlice.actions;
export default loginSlice.reducer;
