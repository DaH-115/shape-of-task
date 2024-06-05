import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.quotable.io' }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: (query) => `/${query}`,
    }),
  }),
});

export const { useGetPostsQuery } = apiSlice;
