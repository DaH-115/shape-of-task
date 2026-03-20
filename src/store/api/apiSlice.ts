import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

/** API Ninjas v2 quoteoftheday 응답 구조 */
interface QuoteOfTheDayResponse {
  quote: string;
  author: string;
  work?: string;
  categories?: string[];
}

export interface QuoteData {
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
  reducerPath: "quotesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.api-ninjas.com/v2",
    prepareHeaders: (headers) => {
      const apiKey = import.meta.env.VITE_APP_API_NINJAS_KEY;
      if (apiKey) {
        headers.set("X-Api-Key", apiKey);
      }
      return headers;
    },
    timeout: 10000,
  }),
  // 오늘의 명언은 하루에 한 번만 바뀌므로 캐시 24시간
  keepUnusedDataFor: 86400,
  endpoints: (builder) => ({
    getQuote: builder.query<QuoteData, void>({
      query: () => ({ url: "/quoteoftheday" }),
      transformResponse: (
        response: QuoteOfTheDayResponse | QuoteOfTheDayResponse[]
      ): QuoteData => {
        // API v2는 배열 [{quote, author, ...}] 형태로 반환
        const data = Array.isArray(response) ? response[0] : response;

        if (!data?.quote || !data?.author) {
          logError("Invalid quote data:", response);
          throw new Error("Unable to load quote data.");
        }

        const category =
          data.categories?.[0] ?? data.work ?? "general";

        return {
          quote: data.quote.trim(),
          author: data.author.trim(),
          category,
        };
      },
      transformErrorResponse: (error) => {
        logError("API 연결 실패:", error);
        return {
          status: error.status || 500,
          data: {
            message:
              "명언을 불러오는데 실패했습니다. 잠시 후에 다시 시도해주세요.",
          },
        };
      },
    }),
  }),
});

export const { useGetQuoteQuery } = apiSlice;
