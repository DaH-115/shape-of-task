/**
 * DeepL 번역 API 클라이언트
 * - /api/translate (Vercel Serverless + deepl-node)를 통해 DeepL 호출
 * - API 키는 서버에만 존재하여 브라우저에 노출되지 않음
 */

const TRANSLATE_API_URL = "/api/translate";

export interface TranslateResponse {
  translation?: string;
  translations?: string[];
}

/**
 * 단일 또는 여러 텍스트를 영어→한국어로 번역
 * @param text - 번역할 텍스트 (문자열 또는 문자열 배열)
 * @returns 번역된 텍스트 (단일 입력 시 문자열, 배열 입력 시 문자열 배열)
 */
export async function translateToKorean(
  text: string | string[]
): Promise<string | string[]> {
  const response = await fetch(TRANSLATE_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      text,
      target_lang: "KO",
    }),
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(
      (err as { error?: string }).error ?? `Translation failed: ${response.status}`
    );
  }

  const data = (await response.json()) as TranslateResponse;

  if (Array.isArray(text)) {
    return data.translations ?? [];
  }
  return data.translation ?? "";
}
