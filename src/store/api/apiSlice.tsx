import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// 명언 데이터 타입
interface QuoteData {
  quote: string;
  author: string;
  category: string;
}

// 개발 환경에서만 에러 로깅
const logError = (message: string, data?: unknown) => {
  if (import.meta.env.DEV) {
    console.error(`[API Error] ${message}`, data);
  }
};

export const apiSlice = createApi({
  reducerPath: 'ninjasApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.api-ninjas.com/v1',
    prepareHeaders: (headers) => {
      const apiKey = import.meta.env.VITE_APP_API_NINJAS_KEY;
      if (apiKey) {
        headers.set('X-Api-Key', apiKey);
      }
      return headers;
    },
    timeout: 10000,
  }),
  // 캐시 5분
  keepUnusedDataFor: 300,
  endpoints: (builder) => ({
    getQuote: builder.query<QuoteData, string | void>({
      query: (category) => ({
        url: '/quotes',
        params: category ? { category } : undefined,
      }),
      transformResponse: (response: QuoteData[]): QuoteData => {
        const quoteData = response[0];

        // 기본 검증만
        if (!quoteData?.quote || !quoteData?.author) {
          logError('Invalid quote data:', quoteData);
          throw new Error('명언 데이터를 불러올 수 없습니다.');
        }

        return {
          quote: quoteData.quote.trim(),
          author: quoteData.author.trim(),
          category: quoteData.category || 'general',
        };
      },
      transformErrorResponse: (error) => {
        logError('API request failed:', error);
        return {
          status: error.status || 500,
          message: '명언을 불러오는데 실패했습니다.',
        };
      },
      // 재시도 1번만
      extraOptions: {
        maxRetries: 1,
      },
    }),
  }),
});

export const { useGetQuoteQuery } = apiSlice;
