import { ReactNode } from 'react';

// 기본 버튼 props 타입 (확장된 버전)
export interface BtnProps {
  text: string;
  type: HTMLButtonElement['type'];
  variant?: 'filled' | 'outline';
  size?: 'small' | 'medium' | 'large';
  children?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
}

// 저장 버튼 props 타입
export interface SaveBtnProps {
  taskListRef: React.RefObject<HTMLUListElement | null>;
  isDisabled: boolean;
}

// 링크 버튼 props 타입
export interface LinkBtnProps {
  linkTo: string;
  text: string;
}
