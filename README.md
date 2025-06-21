# SHAPE OF TASK

> 할 일의 중요도를 도형으로 시각화하여 관리하는 일정 관리 애플리케이션

## 🔗 링크

- [Website](https://shape-of-task.vercel.app/)
- [GitHub](https://github.com/DaH-115/shape-of-task)

## 👨‍💻 개발 정보

- 개발 기간: 2022 - 2025
- 개발 형태: 단독 개발
- 배포 환경: Vercel 호스팅

### 버전 기록

#### Version 2.0.0 (2025.06.22)

- **모던 빌드 시스템 도입**
  - Vite 6.x로 마이그레이션하여 개발 서버 성능 대폭 향상
  - 번들 크기 최적화 및 빌드 속도 개선
- **코드 품질 향상**
  - 모든 import 경로 대소문자 일관성 확보
  - 타입 안전성 강화 및 에러 해결
  - ESLint 설정 업데이트

#### Version 1.5.0 (2025.01.10)

- 전반적인 UI/UX 개선 및 성능 최적화

#### Version 1.2.0 (2023.12.05)

- 프로젝트명 'SHAPE OF TASK'로 리브랜딩
- 브랜드 아이덴티티 강화를 위한 디자인 시스템 개선

#### Version 1.1.0 (2023.08.25)

- TypeScript 마이그레이션 완료
- 정적 타입 시스템 도입으로 코드 안정성 강화
- 컴포넌트 및 상태 관리 타입 정의 구현

#### Version 1.0.1 (2023.08.22)

- React 18 버전으로 업그레이드

#### Version 1.0.0 (2023.12.24)

- 서비스 첫 출시 및 Vercel 배포
- 기본 기능 구현:
  - 도형 기반 Task 시각화 시스템
  - Random Quotes API 연동
  - Redux Toolkit 기반 상태 관리
  - html2canvas를 활용한 도형 이미지 생성 및 다운로드 기능
  - 커스텀 테마 컬러 시스템 도입
  - 디바이스별 반응형 디자인 적용 강화
  - localStorage를 활용한 데이터 저장

## 🚀 빠른 시작

### 요구사항

- Node.js 18+
- Yarn 또는 npm

### 설치 및 실행

```bash
# 저장소 클론
git clone https://github.com/DaH-115/shape-of-task.git

# 의존성 설치
yarn install

# 개발 서버 실행
yarn dev

# 프로덕션 빌드
yarn build

# 빌드 결과 미리보기
yarn preview
```

## 📌 프로젝트 개요

Shape of Task는 사용자의 할 일 상태를 도형으로 시각화하여 직관적인 task 관리를 제공하는 웹 애플리케이션입니다.

**핵심 특징:**

- 🔺🔲⭕ **도형 기반 시각화**: 할 일의 중요도를 직관적인 도형으로 표현
- ⚡ **빠른 성능**: Vite 기반 모던 빌드 시스템으로 최적화된 사용자 경험
- 💾 **오프라인 지원**: localStorage를 활용한 데이터 지속성
- 🎨 **커스터마이징**: 다양한 테마 컬러 시스템
- 📱 **반응형 디자인**: 모든 디바이스에서 최적화된 UI/UX

## 🛠 기술 스택

### 🏗 빌드 도구

- **Vite 6.x**
  - ⚡ 번개같이 빠른 개발 서버 (HMR 지원)
  - 📦 최적화된 프로덕션 빌드 (Rollup 기반)
  - 🔧 제로 설정으로 TypeScript 지원

### 🎯 Frontend 핵심

- **React 18**
  - 컴포넌트 기반 아키텍처
  - Concurrent Features 활용
- **TypeScript 5.x**
  - 정적 타입 시스템으로 런타임 에러 방지
  - 개발 도구 지원 강화
  - 코드 자동완성 및 리팩토링 지원

### 🗂 상태 관리

- **Redux Toolkit**
  - 중앙 집중식 상태 관리
  - RTK Query로 API 상태 관리
  - DevTools 지원으로 디버깅 편의성

### 🎨 스타일링

- **Styled-components**
  - CSS-in-JS로 스타일 충돌 방지
  - 동적 테마 시스템 구현
  - 컴포넌트 기반 스타일 관리

### 📦 주요 라이브러리

- **React Router**: SPA 라우팅
- **React Icons**: 아이콘 시스템
- **html2canvas**: 이미지 캡처 및 다운로드
- **React Helmet Async**: SEO 최적화

## 🎯 주요 기능

### 1. 📋 스마트 Task 관리

- 도형 기반 중요도 선택 (삼각형: 높음, 사각형: 보통, 원형: 낮음)
- 실시간 진행률 추적
- 우선순위별 정렬 및 필터링

### 2. 🎨 시각화 시스템

- 완료된 할 일을 도형 패턴으로 변환
- 커스텀 테마 컬러 적용
- PNG 이미지 다운로드 지원

### 3. 💡 동기부여 시스템

- Random Quotes API 연동
- 실시간 명언 업데이트
- 사용자 인터랙션 기반 새로고침

### 4. 📱 사용자 경험

- 반응형 디자인 (모바일/태블릿/데스크톱)
- 오프라인 데이터 저장

## 🏗 프로젝트 구조

```
src/
├── components/          # 재사용 가능한 UI 컴포넌트
│   ├── buttons/        # 버튼 컴포넌트들
│   ├── menu/           # 메뉴 관련 컴포넌트
│   ├── modals/         # 모달 컴포넌트들
│   ├── shapes/         # 도형 렌더링 컴포넌트
│   └── ...
├── pages/              # 페이지 레벨 컴포넌트
├── store/              # Redux 상태 관리
├── hooks/              # 커스텀 훅
├── utils/              # 유틸리티 함수
├── types/              # TypeScript 타입 정의
├── styles/             # 글로벌 스타일 및 테마
└── assets/             # 정적 자원 (SVG, 이미지)
```

## 🔧 개발 스크립트

```bash
# 개발 서버 실행 (localhost:5173)
yarn dev

# TypeScript 타입 체크 + 프로덕션 빌드
yarn build

# 빌드 결과 미리보기
yarn preview

# ESLint 코드 검사
yarn lint
```

## 🚀 배포

이 프로젝트는 Vercel에 자동 배포됩니다:

- **main** 브랜치 푸시 시 자동 배포
- PR 생성 시 프리뷰 배포
- 환경별 최적화된 빌드 설정

## 🔍 핵심 기술적 성과

### ⚡ 성능 최적화

- Vite의 ES 모듈 기반 개발 서버로 즉시 시작
- 코드 스플리팅으로 초기 로딩 시간 단축
- Tree-shaking으로 불필요한 코드 제거

### 🛡 타입 안전성

- 100% TypeScript 적용으로 런타임 에러 최소화
- Redux 상태의 완전한 타입 추론
- 컴포넌트 props 타입 안전성 보장

### 🎨 모듈화된 디자인 시스템

- 재사용 가능한 styled-components 라이브러리
- 일관된 테마 시스템 적용
- 반응형 디자인 패턴 구현

### 💾 효율적인 데이터 관리

- localStorage 기반 오프라인 지원
- Redux Toolkit으로 예측 가능한 상태 변화
- RTK Query로 API 캐싱 및 동기화

## 📄 라이선스

이 프로젝트는 개인 포트폴리오 목적으로 제작되었습니다.

---

**Shape of Task** - 할 일 관리의 새로운 시각적 경험을 제공합니다 ✨
