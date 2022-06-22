import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as authApi from '../../services/auth';

const initialState = {
  loading: false,
  error: null,
  token: '',
  status: 'idle',
  isAuth: false,
  user: {
    name: '',
    email: '',
  },
};

export const registerUser = createAsyncThunk('auth/user', async (userData) => {
  const { data } = await authApi.registerUser(userData);
  const { token, user } = data;

  return { token, user };
});

export const getCurrentUser = createAsyncThunk('auth/current', async () => {
  await authApi.getCurrentUser();
});

export const loginUser = createAsyncThunk('auth/login', async (userData) => {
  const { data } = await authApi.loginUser(userData);
  const { token, user } = data;

  return { user, token };
});

export const logoutUser = createAsyncThunk('auth/logout', async (userData) => {
  await authApi.logoutUser();
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, { payload }) {
      return { ...state, ...payload };
    },
    deleteUser() {
      return { ...initialState };
    },
  },
  extraReducers: {
    [registerUser.fulfilled]: (state, { payload }) => {
      const { token, user } = payload;
      state.error = null;
      state.loading = false;
      state.token = token;
      state.user = user;
      state.isAuth = true;
      state.status = 'success';
    },
    [registerUser.rejected]: (state, { error }) => {
      state.loading = false;
      state.error = error.message;
      state.status = 'error';
    },
    [registerUser.pending]: (state) => {
      state.loading = true;
      state.status = 'pending';
    },

    [loginUser.fulfilled]: (state, { payload }) => {
      const { token, user } = payload;
      state.error = null;
      state.loading = false;
      state.token = token;
      state.user = user;
      state.isAuth = true;
      state.status = 'success';
    },
    [loginUser.rejected]: (state, { error }) => {
      state.loading = false;
      state.error = error.message;
      state.status = 'unauthorized';
    },
    [loginUser.pending]: (state) => {
      state.loading = true;
      state.status = 'pending';
    },

    [getCurrentUser.fulfilled]: (state) => {
      state.status = 'success';
      state.loading = false;
      state.isAuth = true;
    },
    [getCurrentUser.rejected]: (state) => {
      state.status = 'unauthorized';
      state.loading = false;
    },
    [getCurrentUser.pending]: (state) => {
      state.status = 'pending';
      state.loading = true;
    },

    [logoutUser.fulfilled]: () => {
      return { ...initialState, status: 'unauthorized' };
    },
  },
});

export default userSlice.reducer;
export const { setUser, deleteUser } = userSlice.actions;
