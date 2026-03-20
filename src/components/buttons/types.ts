import { ReactNode } from "react";

// 기본 버튼 props 타입
export interface ButtonProps {
  text: string;
  type: HTMLButtonElement["type"];
  variant?: "filled" | "outline";
  size?: "small" | "medium" | "large";
  children?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
}

// 저장 버튼 props 타입
export interface SaveButtonProps {
  taskListRef: React.RefObject<HTMLUListElement | null>;
  isDisabled: boolean;
}

// 링크 버튼 props 타입
export interface LinkButtonProps {
  linkTo: string;
  text: string;
}
