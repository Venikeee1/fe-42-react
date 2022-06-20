import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  token: '',
  user: {
    name: '',
    email: '',
  },
};

export const fetchArticles = createAsyncThunk(
  'auth/user',
  async ({ query, page }) => {}
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, { payload }) {
      return payload;
    },
    deleteUser(state) {
      return { ...initialState };
    },
  },
});

export default userSlice.reducer;
export const { setUser, deleteUser } = userSlice.actions;
