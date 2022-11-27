import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { baseURL } from "../../apiUrl";
import axios from "axios";

const initialState = {
  advertisements: [],
};

export const getAdvertisement = createAsyncThunk(
  "getAdvertisement",
  async () => {
    try {
      const res = await axios.get(`${baseURL}/advertisement`);

      return res?.data;
    } catch (error) {
      console.error(error);
    }
  }
);
export const createAdvertisement = createAsyncThunk(
  "createAdvertisement",
  async ({ values, setSubmitting, navigate }) => {
    try {
      const res = await axios.post(`${baseURL}/advertisement`, values);
      toast.success("Sucessfully Created Advertisement!");
      setSubmitting(false);
      setTimeout(() => {
        navigate(-1);
      }, 2000);
      // console.log("Success", res?.data);
      return res?.data;
    } catch (error) {
      setSubmitting(false);

      console.error(error);
    }
  }
);
export const advertisementSlice = createSlice({
  name: "advertisement",
  initialState,
  reducers: {
    clearAdvertisement: (state) => {
      state.advertisements = [];
    },
  },
  extraReducers: {
    [getAdvertisement.fulfilled]: (state, { payload }) => {
      //   console.log("Payload", payload);
      state.advertisements = payload;
    },
  },
});

export const { clearAdvertisement } = advertisementSlice.actions;
export default advertisementSlice.reducer;
