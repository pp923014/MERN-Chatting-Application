import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API = 'http://localhost:5001/api/auth';

// Async Thunks
export const signupUser = createAsyncThunk('auth/signup', async (formData, thunkAPI) => {
  try {
    const { data } = await axios.post(`${API}/signup`, formData, { withCredentials: true });
    return data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data.message);
  }
});

export const loginUser = createAsyncThunk('auth/login', async (formData, thunkAPI) => {
  try {
    const { data } = await axios.post(`${API}/login`, formData, { withCredentials: true });
    return data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data.message);
  }
});

export const logoutUser = createAsyncThunk('auth/logout', async () => {
  await axios.get(`${API}/logout`, { withCredentials: true });
});

export const fetchCurrentUser = createAsyncThunk('auth/check', async (_, thunkAPI) => {
  try {
    const { data } = await axios.get(`${API}/check`, { withCredentials: true });
    return data;
  } catch {
    return thunkAPI.rejectWithValue('No user logged in');
  }
});

// Slice
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Signup
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Login
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Logout
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.isAuthenticated = false;
      })

      // Check current user
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(fetchCurrentUser.rejected, (state) => {
        state.user = null;
        state.isAuthenticated = false;
      });
  },
});

export default authSlice.reducer;
