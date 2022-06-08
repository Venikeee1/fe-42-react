import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fruits: [],
};

const fruitsSlice = createSlice({
  name: 'fruits',
  initialState,
  reducers: {
    fruitsAdd(state, { payload }) {
      state.fruits = [...state.fruits, payload];
    },

    fruitsRemove(state, { payload }) {
      state.fruits = state.fruits.filter((fruit) => fruit !== payload);
    },

    fruitsReset(state) {
      state.fruits = [];
    },
  },
});

export default fruitsSlice.reducer;
export const { fruitsAdd, fruitsRemove, fruitsReset } = fruitsSlice.actions;
