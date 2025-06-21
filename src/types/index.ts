// Task 관련 타입들
export type { ShapeName, TaskTypes, TaskListState } from './task';

// styled-components 테마 타입 확장은 자동으로 적용됨
// custom.d.ts의 모듈 선언도 자동으로 적용됨

// 추가 공통 타입들 (필요시 확장)
export interface ApiResponse<T = any> {
  data: T;
  message?: string;
  status: 'success' | 'error';
}

export interface PaginationParams {
  page: number;
  limit: number;
}

export interface LoadingState {
  isLoading: boolean;
  error: string | null;
}
