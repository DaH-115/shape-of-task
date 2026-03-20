import styled from "styled-components";
import { ButtonProps } from "@/components/buttons/types";

const Button = ({
  text,
  type,
  variant = "filled",
  children,
  onClick,
  disabled = false,
}: ButtonProps) => {
  return (
    <ButtonWrapper
      onClick={disabled ? undefined : onClick}
      $variant={variant}
      $disabled={disabled}
    >
      <button type={type} aria-label={text} disabled={disabled}>
        {children}
        {text}
      </button>
    </ButtonWrapper>
  );
};

export default Button;

export const ButtonWrapper = styled.div<{
  $variant: "filled" | "outline";
  $disabled: boolean;
}>`
  width: 100%;
  border-radius: 2rem;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    border-radius: 2rem;
    border: 1px solid transparent;
    padding: 0.6rem 1rem;
    font-size: 1rem;

    color: ${({ theme, $variant, $disabled }) => {
      if ($disabled) return theme.commonColors.gray;
      return $variant === "outline" ? theme.commonColors.black : "#fff";
    }};
    background-color: ${({ theme, $variant, $disabled }) => {
      if ($disabled) return theme.commonColors.light_gray;
      return $variant === "outline" ? "#fff" : theme.colors.priority1;
    }};
    cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
    transition: all 0.2s ease-in-out;

    &:hover,
    &:active {
      border: 1px solid
        ${({ theme, $variant, $disabled }) => {
          if ($disabled) return theme.commonColors.light_gray;
          return $variant === "outline" ? "#fff" : theme.colors.priority1;
        }};
      color: ${({ theme, $variant, $disabled }) => {
        if ($disabled) return theme.commonColors.gray;
        return $variant === "outline" ? "#fff" : theme.commonColors.black;
      }};
      background-color: ${({ theme, $variant, $disabled }) => {
        if ($disabled) return theme.commonColors.light_gray;
        return $variant === "outline" ? theme.colors.priority1 : "#fff";
      }};
      transition: all 0.2s ease-in-out;

      svg {
        color: ${({ theme, $variant, $disabled }) => {
          if ($disabled) return theme.commonColors.gray;
          return $variant === "outline" ? "#fff" : theme.commonColors.black;
        }};
        transition: all 0.2s ease-in-out;
      }
    }
  }
`;
