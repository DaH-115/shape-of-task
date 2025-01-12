import { memo, ReactNode } from 'react';
import styled from 'styled-components';

export interface BtnProps {
  text: string;
  type: 'button' | 'submit' | 'reset';
  isEmpty?: boolean;
  children?: ReactNode;
  onClickFn?: () => void;
}

const Btn = ({
  text,
  type,
  isEmpty = false,
  children,
  onClickFn,
}: BtnProps) => {
  return (
    <ButtonWrapper onClick={onClickFn} $isEmpty={isEmpty}>
      <button type={type} aria-label={text}>
        {children}
        {text}
      </button>
    </ButtonWrapper>
  );
};

export default memo(Btn);

export const ButtonWrapper = styled.div<{ $isEmpty: boolean }>`
  width: 100%;
  height: 100%;
  background-color: ${({ theme, $isEmpty }) =>
    $isEmpty ? '#fff' : theme.colors.important};
  border: 0.08rem solid
    ${({ theme, $isEmpty }) =>
      $isEmpty ? theme.commonColors.light_gray : theme.colors.important};
  border-radius: 2rem;
  overflow: hidden;

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    color: ${({ theme, $isEmpty }) =>
      $isEmpty ? theme.commonColors.gray : '#fff'};
    font-size: 0.8rem;
    padding: 0.4rem;
  }

  svg {
    color: ${({ theme, $isEmpty }) =>
      $isEmpty ? theme.commonColors.gray : '#fff'};
    margin-right: 0.3rem;
  }

  &:hover,
  :active {
    background-color: ${({ theme, $isEmpty }) =>
      $isEmpty ? theme.colors.important : '#fff'};
    transition: background-color 0.2s ease-in-out;

    button {
      color: ${({ theme, $isEmpty }) =>
        $isEmpty ? '#fff' : theme.commonColors.black};
      transition: color 0.2s ease-in-out;
    }

    svg {
      color: ${({ theme, $isEmpty }) =>
        $isEmpty ? '#fff' : theme.commonColors.black};
      transition: color 0.2s ease-in-out;
    }
  }
`;
