// features/api/apiSlice.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface NinjasQuote {
  quote: string;
  author: string;
  category: string;
}

export const apiSlice = createApi({
  reducerPath: 'ninjasApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.api-ninjas.com/v1',
    prepareHeaders: (headers) => {
      headers.set('X-Api-Key', process.env.REACT_APP_API_NINJAS_KEY!);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getQuote: builder.query<NinjasQuote, string | void>({
      query: (category) => ({
        url: '/quotes',
        params: category ? { category } : undefined,
      }),
      transformResponse: (response: NinjasQuote[]) => {
        const quoteData = response[0];

        if (!quoteData || !quoteData.quote || !quoteData.author) {
          console.error('Invalid quote data received:', quoteData);
          throw new Error('필수 데이터가 누락되었습니다');
        }

        return quoteData;
      },
      transformErrorResponse: (error: any) => {
        console.error('API Error:', error);
        return {
          status: error.status,
          message: 'API 호출 중 에러가 발생했습니다.',
        };
      },
    }),
  }),
});

export const { useGetQuoteQuery } = apiSlice;
