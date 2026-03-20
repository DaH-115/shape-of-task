import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { translateToKorean } from "@/services/translateApi";

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
}

// 개발 환경에서만 에러 로깅
const logError = (message: string, data?: unknown) => {
  if (import.meta.env.DEV) {
    console.error(`[API Error] ${message}`, data);
  }
};

/** API Ninjas에서 명언 조회 */
async function fetchQuoteFromApiNinjas(): Promise<QuoteData> {
  const apiKey = import.meta.env.VITE_APP_API_NINJAS_KEY;
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000);

  const response = await fetch("https://api.api-ninjas.com/v2/quoteoftheday", {
    signal: controller.signal,
    headers: apiKey ? { "X-Api-Key": apiKey } : {},
  });
  clearTimeout(timeoutId);

  if (!response.ok) {
    throw new Error("Unable to load quote data.");
  }

  const raw = (await response.json()) as
    | QuoteOfTheDayResponse
    | QuoteOfTheDayResponse[];
  const data = Array.isArray(raw) ? raw[0] : raw;

  if (!data?.quote || !data?.author) {
    logError("Invalid quote data:", raw);
    throw new Error("Unable to load quote data.");
  }

  return {
    quote: data.quote.trim(),
    author: data.author.trim(),
  };
}

export const apiSlice = createApi({
  reducerPath: "quotesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  // 오늘의 명언은 하루에 한 번만 바뀌므로 캐시 24시간
  keepUnusedDataFor: 86400,
  endpoints: (builder) => ({
    getQuote: builder.query<QuoteData, void>({
      async queryFn() {
        try {
          const rawQuote = await fetchQuoteFromApiNinjas();

          try {
            const [translatedQuote, translatedAuthor] =
              (await translateToKorean([rawQuote.quote, rawQuote.author])) as [
                string,
                string,
              ];

            return {
              data: {
                quote: translatedQuote || rawQuote.quote,
                author: translatedAuthor || rawQuote.author,
              },
            };
          } catch (translateErr) {
            logError("번역 실패, 원문 표시:", translateErr);
            return { data: rawQuote };
          }
        } catch (error) {
          logError("API 연결 실패:", error);
          return {
            error: {
              status: 500,
              data: {
                message:
                  "명언을 불러오는데 실패했습니다. 잠시 후에 다시 시도해주세요.",
              },
            },
          };
        }
      },
    }),
  }),
});

export const { useGetQuoteQuery } = apiSlice;
