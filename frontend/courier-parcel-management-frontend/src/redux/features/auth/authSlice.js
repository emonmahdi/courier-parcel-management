// src/redux/features/auth/authSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authService } from "./authService";

// Get saved user and token from localStorage (if any)
const storedAuth = JSON.parse(localStorage.getItem("auth"));
console.log(storedAuth);

const initialState = {
  user: storedAuth?.user || null,
  token: storedAuth?.token || null,
  loading: false,
  error: null,
};

// Async Thunks
export const login = createAsyncThunk("/auth/login", async (data, thunkAPI) => {
  try {
    const res = await authService.login(data);

    // Save to localStorage
    localStorage.setItem(
      "auth",
      JSON.stringify({
        user: res.user,
        token: res.token,
      })
    );

    return res;
  } catch (err) {
    return thunkAPI.rejectWithValue(
      err.response?.data?.message || "Login failed"
    );
  }
});

export const register = createAsyncThunk(
  "/auth/register",
  async (data, thunkAPI) => {
    try {
      const res = await authService.register(data);

      // Save to localStorage
      localStorage.setItem(
        "auth",
        JSON.stringify({
          user: res.user,
          token: res.token,
        })
      );

      return res;
    } catch (err) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || "Register failed"
      );
    }
  }
);

export const logout = createAsyncThunk("/auth/logout", async () => {
  authService.logout(); // (optional: backend logout API call)
  localStorage.removeItem("auth");
});

// Slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("auth");
    },
    setCredentials: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
  },
  extraReducers: (builder) => {
    builder
      // Login
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Register
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Logout
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.token = null;
        state.loading = false;
      });
  },
});

// Export
// export const { logOut } = authSlice.actions;
export const { logOut, setCredentials } = authSlice.actions;
export const authReducer = authSlice.reducer;
