# SHAPE OF TASK

![메인 이미지](public/images/og-card.png)

할 일의 중요도를 **도형**으로 시각화해 관리하는 React 기반 일정 관리 웹 앱입니다.
완료한 업무를 도형으로 모아 저장할 수 있고, 오늘의 명언을 번역해 보여주는 기능까지 포함합니다.

**웹사이트**: [shape-of-task.vercel.app](https://shape-of-task.vercel.app)

**GitHub**: [github.com/DaH-115/shape-of-task](https://github.com/DaH-115/shape-of-task)

---

## 1) 프로젝트 개요

Shape of Task는 다음 문제를 해결하기 위해 만들어졌습니다.

- 단순 체크리스트가 아니라 **중요도 체계(높음/보통/낮음)** 를 직관적으로 표현하고 싶다.
- 완료한 일의 성취감을 **시각적 결과물(도형 목록 + 이미지 저장)** 로 남기고 싶다.
- 매일 반복해서 접속하게 만드는 **가벼운 동기 요소(오늘의 명언)** 가 필요하다.

핵심 UX는 “입력 → 관리 → 완료 → 시각화/저장”의 흐름입니다.

---

## 2) 핵심 기능

### 일정(Task) 관리

- 할 일 추가 / 수정 / 삭제
- 완료 상태 토글
- 정렬(생성순/중요도) 및 필터링
- 완료 항목은 별도 순서(`completedTaskIdsInOrder`)로 관리
- localStorage 영속화로 새로고침 후에도 상태 유지

### 도형 기반 중요도 표현

- 중요도별 도형 매핑으로 목록 가독성 강화
- 완료 업무를 도형 리스트로 모아 확인
- 특정 영역을 캡처해 PNG로 저장

### 오늘의 명언

- API Ninjas `quoteoftheday` 조회
- DeepL 번역 API(`POST /api/translate`) 연동으로 한국어 표시
- 명언 고정(pin) 기능 및 저장 상태 localStorage 유지

### 테마/설정

- 다크 모드 지원
- 팔레트(테마 컬러) 변경
- 중요도 라벨 커스터마이징 및 저장

---

## 3) 사용자 흐름

1. 메인에서 오늘의 명언/전체 현황 확인
2. Task List에서 업무 입력 및 중요도 지정
3. 진행 중 업무 정렬·필터로 관리
4. 완료된 업무는 Shape List에서 도형으로 시각화
5. 필요 시 이미지 저장 및 공유

---

## 4) 아키텍처

### 전체 구조(런타임)

```text
[React UI]
  ├─ Pages / Components / Styled Components
  ├─ Hooks (useTodaysQuote, useBreakpoint, ...)
  └─ Router (mobile)
          │
          ▼
[Redux Toolkit Store]
  ├─ taskListSlice
  ├─ themeChangeSlice
  ├─ modalSlice
  ├─ priorityLabelsSlice
  └─ RTK Query apiSlice (quotesApi)
          │
          ├─ localStorage persist middleware
          ├─ External API: API Ninjas (quote)
          └─ Internal API: /api/translate (DeepL proxy)
```

### 화면 아키텍처

- **Desktop(>=768px):** 3열 동시 표시
  - MainPage / TaskListPage / ShapeListPage
- **Mobile(<768px):** 라우팅 기반 단일 화면 전환
  - `/`, `/task-list`, `/shape-list`

즉, 같은 기능 집합을 브레이크포인트에 따라 “동시 병렬 뷰” 또는 “페이지 전환 뷰”로 제공합니다.

### 상태 아키텍처

- 전역 상태는 Redux Toolkit Store로 통합
- `apiSlice`는 RTK Query 캐시를 통해 명언 API 요청을 관리
- `taskListPersistMiddleware`, `priorityLabelsPersistMiddleware`가 상태 변경을 localStorage와 동기화

### API 아키텍처

- 클라이언트는 `/api/translate`만 호출
- 서버리스 함수(`api/translate.ts`)가 `DEEPL_API_KEY`로 실제 DeepL API 호출
- 로컬 개발에서는 `vite-plugin-translate-api.ts`가 동일 엔드포인트를 에뮬레이션

---

## 5) 디렉터리 구조

```text
├── api/                         # 번역 서버리스 핸들러
├── public/                      # 정적 파일(파비콘, OG 이미지 등)
├── src/
│   ├── assets/                  # SVG 아이콘
│   ├── components/              # 재사용 UI (버튼, 모달, 도형, 메뉴, 명언)
│   ├── hooks/                   # 커스텀 훅
│   ├── layout/                  # Header/Footer/ResponsiveLayout
│   ├── pages/                   # MainPage, TaskListPage, ShapeListPage
│   ├── routes/                  # 모바일 라우트 정의
│   ├── services/                # API 호출 유틸 (translate)
│   ├── store/                   # Redux slices, RTK Query, persist middleware
│   ├── styles/                  # 글로벌 스타일, 테마 토큰
│   ├── types/                   # 전역 타입
│   └── utils/                   # localStorage, 캡처 등 공용 유틸
├── vite-plugin-translate-api.ts # 개발용 /api/translate 미들웨어
└── README.md
```

---

## 6) 기술 스택

- **Frontend**: React 19, TypeScript, styled-components
- **State**: Redux Toolkit, React-Redux, RTK Query
- **Routing**: React Router
- **Build Tooling**: Vite 6, SVGR
- **Data/Storage**: localStorage + persist middleware
- **Image Export**: html2canvas, file-saver
- **API Integration**: API Ninjas(명언), DeepL(번역)
- **Quality**: ESLint

---

## 7) 실행 방법

## 요구 사항

Node.js 24.x (`package.json` engines 기준)

- Yarn

## 설치

```bash
git clone https://github.com/DaH-115/shape-of-task.git
cd shape-of-task
yarn install
```

## 개발 서버

```bash
yarn dev
```

## 빌드 및 미리보기

```bash
yarn build
yarn serve
```

`yarn start`도 빌드 결과 미리보기(`vite preview`)와 동일하게 동작합니다.

---

## 8) 환경 변수

`.env.local` 예시:

```bash
# API Ninjas (클라이언트에서 사용)
VITE_APP_API_NINJAS_KEY=your_api_ninjas_key

# DeepL (서버리스/개발 플러그인에서 사용)
DEEPL_API_KEY=your_deepl_api_key
```

> `DEEPL_API_KEY`는 서버 측에서만 사용되며 브라우저 번들에 직접 노출되지 않습니다.

---

## 9) 배포

Vercel 기반 배포를 전제로 구성되어 있습니다.

---

## 10) 라이선스

개인 포트폴리오 및 학습 목적 프로젝트입니다.
