import { createSlice } from "@reduxjs/toolkit";
import { createParcel, fetchMyParcels, trackParcelById } from "./parcelThunk";

const initialState = {
  parcels: [],
  currentParcel: null,
  loading: false,
  error: null,
  success: false, // ✅ ADDED
};

const parcelSlice = createSlice({
  name: "parcel",
  initialState,
  reducers: {
    cleanCurrentParcel: (state) => {
      state.currentParcel = null;
    },
    resetParcelState: (state) => {
      state.loading = false;
      state.error = null;
      state.success = false; // ✅ RESET success
    },
  },
  extraReducers: (builder) => {
    builder
      // createParcel
      .addCase(createParcel.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(createParcel.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.parcels.push(action.payload);
      })
      .addCase(createParcel.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      })

      // fetchMyParcels
      .addCase(fetchMyParcels.fulfilled, (state, action) => {
        state.parcels = action.payload;
      })

      // trackParcelById
      .addCase(trackParcelById.fulfilled, (state, action) => {
        state.currentParcel = action.payload;
      });
  },
});

export const { cleanCurrentParcel, resetParcelState } = parcelSlice.actions;
export default parcelSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";
// import { createParcel, fetchMyParcels, trackParcelById } from "./parcelThunk";

// const initialState = {
//   parcels: [],
//   currentParcel: null,
//   loading: false,
//   error: null,
// };

// const parcelSlice = createSlice({
//   name: "parcel",
//   initialState,
//   reducers: {
//     cleanCurrentParcel: (state) => {
//       state.currentParcel = null;
//     },
//     resetParcelState: (state) => {
//       state.loading = false;
//       state.error = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       // createParcel
//       .addCase(createParcel.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(createParcel.fulfilled, (state, action) => {
//         state.loading = false;
//         state.parcels.push(action.payload);
//       })
//       .addCase(createParcel.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })
//       // fetchMyParcels
//       .addCase(fetchMyParcels.fulfilled, (state, action) => {
//         state.parcels = action.payload;
//       })
//       // trackParcelById
//       .addCase(trackParcelById.fulfilled, (state, action) => {
//         state.currentParcel = action.payload;
//       });
//   },
// });

// export const { cleanCurrentParcel, resetParcelState } = parcelSlice.actions;

// export default parcelSlice.reducer;
