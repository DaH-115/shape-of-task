import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface QuoteTypes {
  _id: string;
  content: string;
  author: string;
  authorSlug: string;
  length: number;
  tags: string[];
}

// apiSlice.ts
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.quotable.io',
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<QuoteTypes, void>({
      query: () => '/quotes/random',
      transformResponse: (response: QuoteTypes[] | QuoteTypes) => {
        const quoteData = Array.isArray(response) ? response[0] : response;

        if (!quoteData || !quoteData.content || !quoteData.author) {
          console.error('Received invalid quote data:', quoteData);
          throw new Error('필수 데이터가 누락되었습니다');
        }

        return quoteData;
      },
      transformErrorResponse: (error: any) => {
        console.error('API Error:', error);
        return {
          status: error.status,
          message: '에러가 발생했습니다.',
        };
      },
    }),
  }),
});

export const { useGetPostsQuery } = apiSlice;
