import { memo } from 'react';
import styled from 'styled-components';
import { BtnProps } from './types';
import { BUTTON_STYLES, BUTTON_COLORS } from './styles/constants';

// 기본 버튼 컴포넌트 (개선된 버전)
const Btn = ({
  text,
  type,
  variant = 'filled',
  children,
  onClick,
  disabled = false,
}: BtnProps) => {
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

export default memo(Btn);

export const ButtonWrapper = styled.div<{
  $variant: 'filled' | 'outline';
  $disabled: boolean;
}>`
  width: 100%;
  height: 100%;
  background-color: ${({ theme, $variant, $disabled }) => {
    if ($disabled) return theme.commonColors.light_gray;
    return $variant === 'outline' ? '#fff' : theme.colors.important;
  }};
  border: ${({ theme, $variant, $disabled }) =>
    `${BUTTON_STYLES.border} ${
      $disabled
        ? theme.commonColors.light_gray
        : $variant === 'outline'
        ? theme.commonColors.light_gray
        : theme.colors.important
    }`};
  border-radius: ${BUTTON_STYLES.borderRadius};
  overflow: hidden;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 2.5rem;
    color: ${({ theme, $variant, $disabled }) => {
      if ($disabled) return theme.commonColors.gray;
      return $variant === 'outline' ? theme.commonColors.gray : '#fff';
    }};
    font-size: ${BUTTON_STYLES.fontSize};
    padding: ${BUTTON_STYLES.padding};
  }

  svg {
    color: ${({ theme, $variant, $disabled }) => {
      if ($disabled) return theme.commonColors.gray;
      return $variant === 'outline' ? theme.commonColors.gray : '#fff';
    }};
    margin-right: 0.3rem;
  }

  &:hover,
  &:active {
    background-color: ${({ theme, $variant, $disabled }) => {
      if ($disabled) return theme.commonColors.light_gray;
      return $variant === 'outline'
        ? theme.colors.important
        : BUTTON_COLORS.hover.background;
    }};
    transition: ${BUTTON_STYLES.transition};

    button {
      color: ${({ theme, $variant, $disabled }) => {
        if ($disabled) return theme.commonColors.gray;
        return $variant === 'outline' ? '#fff' : theme.commonColors.black;
      }};
      transition: ${BUTTON_STYLES.transition};
    }

    svg {
      color: ${({ theme, $variant, $disabled }) => {
        if ($disabled) return theme.commonColors.gray;
        return $variant === 'outline' ? '#fff' : theme.commonColors.black;
      }};
      transition: ${BUTTON_STYLES.transition};
    }
  }
`;
