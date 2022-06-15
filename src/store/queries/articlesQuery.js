import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://hn.algolia.com/api/v1';

export const articlesApi = createApi({
  reducerPath: 'articlesApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getArticles: builder.query({
      query: ({ query, page }) => `search?query=${query}&page=${page}`,
      transformResponse: (response) => ({
        pageLimit: response.nPages,
        articles: response.hits,
      }),
    }),
  }),
});

export const { useGetArticlesQuery } = articlesApi;
