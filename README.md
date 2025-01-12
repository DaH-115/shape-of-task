# SHAP OF TASK

> 할 일의 중요도를 도형으로 시각화하여 관리하는 일정 관리 애플리케이션

## 🔗 링크

- [Website](https://shape-of-task.vercel.app/)
- [GitHub](https://github.com/DaH-115/shape-of-task)

## 👨‍💻 개발 정보

- 개발 기간: 2022 - 2025
- 개발 형태: 단독 개발
- 배포 환경: Vercel 호스팅

### 버전 기록

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

## 📌 프로젝트 개요

Shape of Task는 사용자의 할 일 상태를 도형으로 시각화하여 직관적인 task 관리를 제공하는 웹 애플리케이션입니다. Redux Toolkit과 localStorage를 활용한 안정적인 상태 관리를 구현했으며, TypeScript와 Styled Components를 통해 유지보수가 용이한 모듈화된 컴포넌트를 구축했습니다. 또한 메인 화면에서는 Random Quotes API를 활용하여 사용자에게 동기부여가 되는 명언을 제공합니다.

## 🛠 기술 스택 및 선택 이유

### Frontend

- **React**

  - 컴포넌트 기반 아키텍처로 재사용성과 유지보수성 향상
  - 풍부한 생태계와 커뮤니티 지원

- **TypeScript**

  - 정적 타입 시스템을 통한 코드 안정성 확보
  - 개발 시 타입 추론을 통한 생산성 향상

- **Redux Toolkit**

  - 중앙 집중식 상태 관리로 효율적 처리
  - Task 상태와 도형 시각화의 실시간 동기화 구현
  - RTK Query를 활용한 API 상태 관리
    - baseQuery와 endpoints 설정으로 API 요청 구조화
    - API 요청 상태 효율적 관리

- **Styled-components**
  - 컴포넌트 기반의 스타일링 시스템 구축
  - 동적 테마 적용을 위한 ThemeProvider 활용
  - CSS-in-JS로 스타일 충돌 방지 및 유지보수성 향상

### Storage

- **localStorage**
  - 브라우저 저장소를 활용한 오프라인 데이터 지속성 확보
  - 페이지 새로고침 시에도 데이터 유지
  - 서버 없이 클라이언트 사이드 데이터 관리 구현

## 🎯 주요 기능 및 구현 화면

### 1. 메인 페이지 및 동기부여 시스템

- Random Quotes API를 활용한 실시간 동기부여 명언 제공
- 핀 아이콘으로 명언 새로고침 동작 제어
- 진행중/완료된 할 일의 실시간 카운터 표시

### 2. 직관적인 Task 관리 시스템

- 도형 기반의 시각적 중요도 선택 인터페이스
- Redux Toolkit을 활용한 실시간 상태 관리
- 사용자 친화적인 알림 시스템 구현
  - 작업 완료 시 애니메이션 효과
  - 알림을 통한 즉각적인 피드백

### 3. Task 시각화 및 공유 시스템

- 완료된 Task의 도형 패턴 생성
- html2canvas를 활용한 도형 이미지 생성
- 이미지 다운로드
  - PNG 형식 지원
- 커스텀 테마 컬러 적용 가능

### 4. 데이터 관리 및 백업 시스템

- localStorage를 활용한 자동 데이터 저장
- 브라우저 새로고침 시에도 데이터 유지

## 🔍 핵심 기술적 성과

- Redux Toolkit과 RTK Query를 활용한 효율적인 상태 관리

  - Task와 도형 시각화 상태의 실시간 동기화 구현
  - Random Quotes API 로딩/에러 상태 처리로 UX 개선

- TypeScript와의 통합으로 타입 안정성 확보

  - 상태 관련 타입 추론 및 에러 방지

- styled-components를 활용한 모듈화된 디자인 시스템 구축

  - 재사용 가능한 스타일 컴포넌트 설계
  - ThemeProvider를 통한 일관된 디자인 적용
  - 각 디바이스별 화면 적용

- 사용자 인터랙션 최적화

  - 즉각적인 시각적 피드백 제공

- localStorage를 활용한 효율적인 데이터 관리

  - 오프라인 지원으로 사용자 경험 향상

- SVG 기반 도형 렌더링 최적화

  - 도형 상태에 따른 동적 렌더링
  - 커스텀 테마 적용을 위한 동적 스타일링

- html2canvas를 활용한 이미지 변환 시스템
  - 도형 캡처 및 다운로드 기능 구현
