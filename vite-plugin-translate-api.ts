/**
 * Vite 로컬 개발 시 /api/translate 요청을 처리하는 플러그인
 *
 * - Vite는 원래 API 서버가 없음 → 이 플러그인이 대신 처리
 * - api/translate.ts의 번역 로직을 그대로 재사용
 */

import type { Plugin } from "vite";
import { loadEnv } from "vite";
import { OPTIONS, POST } from "./api/translate";
import type { Connect } from "vite";

const API_PATH = "/api/translate";

/** 요청 URL이 /api/translate 인지 확인 */
function isTranslateApi(url: string | undefined): boolean {
  if (!url) return false;
  const path = url.split("?")[0];
  return path === API_PATH;
}

/**
 * Web Response → Node.js res 로 변환해서 브라우저에 전달
 *
 * api/translate.ts는 Web 표준 Request/Response를 쓰고,
 * Vite 미들웨어는 Node.js req/res를 씀.
 * 형식이 달라서 이렇게 연결해 줌.
 */
function pipeResponseToNode(res: import("http").ServerResponse, response: Response): void {
  res.statusCode = response.status;
  response.headers.forEach((value, key) => {
    res.setHeader(key, value);
  });
  response.text().then((body) => {
    res.end(body);
  });
}

/** .env.local 값을 api/translate.ts에서 읽을 수 있도록 process.env에 반영 */
function loadApiEnv(mode: string, envDir: string): void {
  const env = loadEnv(mode, envDir, "");
  Object.assign(process.env, env);
}

/** dev/preview 서버에서 /api/translate 요청을 처리하는 공통 미들웨어 등록 */
function registerTranslateApiMiddleware(middlewares: Connect.Server): void {
  middlewares.use((req, res, next) => {
    // /api/translate 가 아니면 그냥 넘김 (다른 처리에게 맡김)
    if (!isTranslateApi(req.url)) {
      next();
      return;
    }

    // CORS: 브라우저가 실제 POST 전에 OPTIONS 로 "허용해?" 물어봄
    if (req.method === "OPTIONS") {
      OPTIONS().then((response) => pipeResponseToNode(res, response));
      return;
    }

    // 번역 요청: body 읽고 → api/translate.ts 실행 → 결과 전달
    if (req.method === "POST") {
      let body = "";
      req.on("data", (chunk) => (body += chunk));
      req.on("end", async () => {
        try {
          // Node req → Web Request 로 변환해서 api/translate.ts 에 넘김
          const request = new Request(`http://localhost${API_PATH}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: body || undefined,
          });
          const response = await POST(request);
          pipeResponseToNode(res, response);
        } catch (err) {
          // 에러 발생 시 500 + 에러 메시지 반환
          res.statusCode = 500;
          res.setHeader("Content-Type", "application/json");
          res.end(
            JSON.stringify({
              error: err instanceof Error ? err.message : "Unknown error",
            })
          );
        }
      });
      return;
    }

    // POST/OPTIONS 외 다른 메서드면 넘김
    next();
  });
}

export function translateApiPlugin(): Plugin {
  return {
    name: "vite-plugin-translate-api",
    configureServer(server) {
      // .env.local 의 DEEPL_API_KEY 를 process.env 에 넣어줌 (api/translate.ts 가 사용)
      const { mode } = server.config;
      const envDir = server.config.envDir || process.cwd();
      loadApiEnv(mode, envDir);

      registerTranslateApiMiddleware(server.middlewares);
    },
    configurePreviewServer(server) {
      // vite preview에서도 빌드 결과와 로컬 API를 함께 확인할 수 있게 함
      const { mode } = server.config;
      const envDir = server.config.envDir || process.cwd();
      loadApiEnv(mode, envDir);

      registerTranslateApiMiddleware(server.middlewares);
    },
  };
}
