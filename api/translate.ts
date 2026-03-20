/**
 * DeepL 번역 API 프록시
 *
 * - deepl-node 공식 클라이언트 사용
 * - Vercel Serverless Function에서 실행 (Node.js 런타임)
 * @see https://github.com/DeepLcom/deepl-node
 */

import * as deepl from "deepl-node";

/** POST /api/translate 요청 바디 타입 */
interface TranslateRequest {
  /** 번역할 텍스트 (단일 문자열 또는 문자열 배열) */
  text: string | string[];
  /** 대상 언어 코드 (예: KO, EN, JA). 기본값 KO */
  target_lang?: string;
  /** 소스 언어 코드. null이면 자동 감지 */
  source_lang?: string;
}

/**
 * CORS preflight 요청 처리
 * - 브라우저가 실제 POST 전에 OPTIONS로 허용 여부 확인
 */
export async function OPTIONS(): Promise<Response> {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Max-Age": "86400",
    },
  });
}

/**
 * 번역 요청 처리
 * - DEEPL_API_KEY 환경 변수 필수 (Vercel 대시보드 또는 .env.local)
 * - 성공 시: { translation: string } 또는 { translations: string[] }
 * - 실패 시: { error: string }
 */
export async function POST(request: Request): Promise<Response> {
  // Vercel/로컬 환경 변수에서 DeepL API 키 로드
  const apiKey = process.env.DEEPL_API_KEY;
  if (!apiKey) {
    return new Response(
      JSON.stringify({ error: "DEEPL_API_KEY is not configured" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      },
    );
  }

  try {
    const body = (await request.json()) as TranslateRequest;
    const { text, target_lang = "KO", source_lang } = body;

    if (!text) {
      return new Response(JSON.stringify({ error: "text is required" }), {
        status: 400,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
    }

    // 단일 문자열이어도 deepl-node는 배열로 통일하여 처리
    const texts = Array.isArray(text) ? text : [text];
    const deeplClient = new deepl.DeepLClient(apiKey);

    // translateText(texts, sourceLang, targetLang)
    // sourceLang: null이면 자동 감지 (영어→한국어 등)
    const result = await deeplClient.translateText(
      texts,
      (source_lang as deepl.SourceLanguageCode) ?? null,
      target_lang as deepl.TargetLanguageCode,
    );

    // 단일 입력 시 TextResult, 배열 입력 시 TextResult[] 반환
    const results = Array.isArray(result)
      ? result.map((r) => r.text)
      : [(result as deepl.TextResult).text];

    // 요청과 동일한 형태로 응답 (단일/배열)
    return new Response(
      JSON.stringify(
        Array.isArray(text)
          ? { translations: results }
          : { translation: results[0] },
      ),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      },
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  }
}
