import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://hn.algolia.com/api/v1';

export const articlesApi = createApi({
  reducerPath: 'articlesApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['Articles'],
  endpoints: (builder) => ({
    getArticles: builder.query({
      providesTags: 'Articles',
      query: ({ query, page }) => `search?query=${query}&page=${page}`,
      transformResponse: (response) => ({
        pageLimit: response.nPages,
        articles: response.hits,
      }),
    }),
    updateArticle: builder.mutation({
      query: () => `articles/update`,
      invalidatesTags: ['Articles'],
    }),
  }),
});

export const { useGetArticlesQuery, useUpdateArticleMutation } = articlesApi;
