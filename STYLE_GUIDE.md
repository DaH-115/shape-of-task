# 📋 Shape of Task 스타일 가이드

## 🎯 개요

이 문서는 Shape of Task 프로젝트의 코딩 규칙, 파일 구조, import 패턴 등을 정의합니다.

## 📁 파일 및 폴더 구조 규칙

### 1. 절대 경로 사용

```typescript
// ✅ 좋은 예
import { ErrorAlert, Modal } from '@/components';
import { useBreakpoint } from '@/hooks';
import { TaskTypes } from '@/types';

// ❌ 나쁜 예
import ErrorAlert from '../../../components/modals/ErrorAlert';
```

### 2. 스타일 파일 규칙

- 컴포넌트명 + `.styles.tsx`: `TaskListCount.styles.tsx`
- 컴포넌트와 같은 레벨에 위치

### 3. index.ts 파일 활용

각 폴더에 index.ts를 생성하여 통합 export

```typescript
// components/modals/index.ts
export { default as Modal } from './Modal';
export { default as ErrorAlert } from './ErrorAlert';
```

## 📦 개선된 Import 패턴

### Before (개선 전)

```typescript
import ErrorAlert from 'components/modals/ErrorAlert';
import { useBreakpoint } from 'hooks/useBreakpoint';
import Circle from 'assets/Circle.svg';
```

### After (개선 후)

```typescript
import { ErrorAlert } from '@/components/modals';
import { useBreakpoint } from '@/hooks';
import { Circle } from '@/assets';
```

## 🚀 개발 워크플로우

### 새 컴포넌트 추가 시

1. 적절한 폴더에 컴포넌트 생성
2. 해당 폴더의 `index.ts`에 export 추가
3. 필요시 상위 `index.ts`에도 re-export 추가

이 가이드를 따라 일관성 있고 유지보수하기 쉬운 코드를 작성해주세요! 🎉
