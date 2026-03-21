# Shape of Task

할 일의 중요도를 도형(삼각형·사각형·원)으로 표현하고, 완료한 일정을 한 화면에서 모아 보는 일정 관리 웹 앱입니다.

## 링크

- [배포 사이트](https://shape-of-task.vercel.app/)
- [GitHub](https://github.com/DaH-115/shape-of-task)

## 빠른 시작

### 요구 사항

- Node.js 18 이상 권장
- Yarn (패키지 매니저)

### 설치 및 실행

```bash
git clone https://github.com/DaH-115/shape-of-task.git
cd shape-of-task
yarn install
yarn dev
```

개발 서버는 기본적으로 `http://localhost:3000`에서 열립니다.

### 스크립트

| 명령                          | 설명                                             |
| ----------------------------- | ------------------------------------------------ |
| `yarn dev`                    | 개발 서버 (HMR)                                  |
| `yarn build`                  | TypeScript 검사(`tsc --noEmit`) 후 프로덕션 빌드 |
| `yarn preview` / `yarn serve` | 빌드 결과 미리보기                               |
| `yarn lint`                   | ESLint (`src` 대상)                              |

## 주요 기능

### 페이지 구성

| 경로          | 설명                                                        |
| ------------- | ----------------------------------------------------------- |
| `/`           | 메인 — 오늘의 명언, 모양별 미완료 일정 수, 일정 추가로 이동 |
| `/task-list`  | 일정 목록 — 추가·수정·삭제·완료 토글, 정렬·필터, 진행률     |
| `/shape-list` | 오늘의 모양 — 완료된 일정만 모아 도형 나열, PNG 저장        |

### 일정(Task)

- 중요도를 도형으로 선택(높음·보통·낮음에 대응).
- 생성일 기준 정렬 또는 중요도 정렬, 중요도·완료 숨김 필터.
- 완료한 항목은 목록에서 아래쪽으로 정렬되어 표시.
- 데이터는 **localStorage**에 저장되며, Redux 미들웨어로 동기화합니다.

### 오늘의 명언

- **API Ninjas** `quoteoftheday` 연동([RTK Query](https://redux-toolkit.js.org/rtk-query/overview)로 캐싱·재요청 제어).
- 필요 시 **한국어 번역**(클라이언트는 `/api/translate` 호출 — 배포 환경에서는 Vercel Serverless 등에서 DeepL 키로 처리).
- 명언 **고정(pin)** 시 선택한 문구를 유지하고, 상태는 localStorage에 저장합니다.

### 설정·테마

- 사이드 메뉴에서 **테마 팔레트** 변경.
- 메인 화면에서 **모양 라벨**(중요도 설명 문구) 편집·초기화.

### 기타

- 반응형 레이아웃(헤더·사이드 메뉴·본문).
- 알림·확인·입력 모달, 에러 알림.
- `html2canvas` + `file-saver`로 완료 도형 영역 캡처 저장.

## 기술 스택

| 구분   | 사용 기술                                                     |
| ------ | ------------------------------------------------------------- |
| UI     | React 19, TypeScript, styled-components 6, react-icons        |
| 빌드   | Vite 6, `@vitejs/plugin-react`, vite-plugin-svgr              |
| 상태   | Redux Toolkit, React-Redux, **RTK Query**(명언 API)           |
| 라우팅 | React Router 7                                                |
| 저장소 | 브라우저 localStorage + RTK slice / 미들웨어 영속화           |
| 품질   | ESLint 9(flat config), Vitest·Testing Library·Playwright(dev) |

번역 개발 편의를 위해 Vite 플러그인(`vite-plugin-translate-api.ts`)이 로컬에서 `/api/translate`를 흉내 냅니다. 프로덕션에서는 별도 서버리스 엔드포인트와 `deepl-node` 등이 사용됩니다.

## 프로젝트 구조(요약)

```
src/
├── assets/           # SVG 아이콘 등
├── components/       # 공통 UI (버튼, 모달, 도형, 명언, 메뉴 …)
├── hooks/            # useBreakpoint, useTodaysQuote 등
├── layout/           # Header, Footer, ResponsiveLayout
├── pages/            # MainPage, TaskListPage, ShapeListPage
├── routes/           # React Router 정의
├── store/            # slices, RTK Query(apiSlice), persist 미들웨어
├── services/         # translateApi 등 외부 연동 클라이언트
├── styles/           # 글로벌 스타일, 테마
├── types/, utils/
api/                  # Vercel 등에서 쓰는 translate 핸들러(Web Request/Response)
```

## 배포

- Vercel

## 라이선스·기록

개인 포트폴리오·학습 목적의 프로젝트입니다.
