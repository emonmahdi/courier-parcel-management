import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authService } from "./authService";


const initialState = {
  user: null,
  loading: false,
  error: null,
};

export const login = createAsyncThunk("/auth/login", async (data, thunkAPI) => {
  try {
    return await authService.login(data);
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data.message);
  }
});

export const register = createAsyncThunk(
  "/auth/register",
  async (data, thunkAPI) => {
    try {
      return await authService.register(data);
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);

export const logout = createAsyncThunk("/auth/logout", async () => {
  authService.logout();
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // login
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // register
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
      });
  },
});

// ✅ Named export
export const authReducer = authSlice.reducer;
