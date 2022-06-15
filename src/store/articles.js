import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as articlesApi from '../services/articles';

const initialState = {
  items: [],
  query: '',
  page: 1,
  loading: false,
  totalPage: 0,
  error: null,
};

export const fetchArticles = createAsyncThunk(
  'articles/fetchArticles',
  async ({ query, page }) => {
    const response = await articlesApi.fetchArticles(query, page);
    return response.data;
  }
);

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    nextPage(state, { payload }) {
      state.page += 1;
    },
    prevPage(state) {
      if (state.page === 1) return;

      state.page -= 1;
    },
    changePage(state, { payload }) {
      state.page = +payload;
    },
    setQuery(state, { payload }) {
      state.query = payload;
    },
    setLoading(state) {
      state.loading = true;
    },
  },
  extraReducers: {
    [fetchArticles.fulfilled]: (state, { payload }) => {
      state.loading = false;
      const { hits, nbHits } = payload;
      state.items = hits;
      state.totalPage = nbHits;
    },
    [fetchArticles.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [fetchArticles.rejected]: (state, { error }) => {
      state.error = error;
      state.loading = false;
    },
  },
});

export default articlesSlice.reducer;
export const { nextPage, prevPage, changePage, setQuery } =
  articlesSlice.actions;
