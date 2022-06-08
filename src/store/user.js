import { createSlice } from '@reduxjs/toolkit';

const initialUserState = {
  name: 'Tom',
  salary: 0,
  location: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    setName(state, { payload }) {
      state.name = payload;
    },

    changeUserLocation(state, { payload }) {
      state.location = payload;
    },
  },
});

export default userSlice.reducer;
export const { setName, changeUserLocation } = userSlice.actions;
