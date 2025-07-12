import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../utils/axiosInstance";

export const createParcel = createAsyncThunk(
  "parcel/create",
  async (parcelData, { rejectWithValue }) => {
    try {
      const res = await axios.post("/parcels", parcelData);
      return res.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Parcel create failed"
      );
    }
  }
);

export const fetchMyParcels = createAsyncThunk(
  "parcel/my",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get("/parcels/my");
      return res.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Failed to fetch parcels"
      );
    }
  }
);

export const trackParcelById = createAsyncThunk(
  "parcel/track",
  async (id, { rejectWithValue }) => {
    try {
      const res = await axios.get(`/parcels/${id}`);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || "Tracking failed");
    }
  }
);

// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "../../../utils/axiosInstance";

// export const createParcel = createAsyncThunk(
//   "parcel/create",
//   async (parcelData, { rejectWithValue }) => {
//     try {
//       const res = await axios.post("/parcels", parcelData);
//       return res.data;
//     } catch (err) {
//       return rejectWithValue(
//         err.response.data.message || "Parcel crate failed"
//       );
//     }
//   }
// );

// export const fetchMyParcels = createAsyncThunk(
//   "parcel/my",
//   async (_, { rejectWithValue }) => {
//     try {
//       const res = await axios.get("/parcels/my");
//       return res.data;
//     } catch (err) {
//       return rejectWithValue(err.response.data.message || "Failed to fetch");
//     }
//   }
// );

// export const trackParcelById = createAsyncThunk(
//   "parcel/track",
//   async (id, { rejectWithValue }) => {
//     try {
//       const res = await axios.get(`/parcels/${id}`);
//       return res.data;
//     } catch (err) {
//       return rejectWithValue(err.response.data.message || "Tracking failed");
//     }
//   }
// );
