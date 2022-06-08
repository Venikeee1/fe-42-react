import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const markersSlice = createSlice({
  name: 'markers',
  initialState,
  reducers: {
    addMarker(state, { payload }) {
      return [...state, payload];
    },
  },
});

export default markersSlice.reducer;
export const { addMarker } = markersSlice.actions;
