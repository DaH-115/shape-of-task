import React from 'react';
import styled from 'styled-components';

export type BtnProps = {
  text: string;
  type: 'button' | 'submit' | 'reset';
  isEmpty?: boolean;
  children?: React.ReactNode;
  onClickFn?: () => void;
};

export const Btn = ({
  text,
  type,
  isEmpty = false,
  children,
  onClickFn,
}: BtnProps) => {
  return (
    <ButtonWrapper onClick={onClickFn} $isEmpty={isEmpty}>
      <button type={type}>{text}</button>
      {children}
    </ButtonWrapper>
  );
};

export const ButtonWrapper = styled.div<{ $isEmpty: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  background-color: ${({ theme, $isEmpty }) =>
    $isEmpty ? '#fff' : theme.colors.remember};
  border: 0.1rem solid ${({ theme }) => theme.colors.remember};
  border-radius: 2rem;
  padding: 0.6rem 1rem;
  cursor: pointer;

  button {
    color: ${({ theme, $isEmpty }) =>
      $isEmpty ? theme.commonColors.black : '#fff'};
    font-size: 1rem;
  }

  &:hover,
  :active {
    background-color: ${({ theme, $isEmpty }) =>
      $isEmpty ? theme.colors.remember : '#fff'};
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

  ${({ theme }) => theme.device.tablet} {
    width: 100%;

    button {
      font-size: 0.8rem;
    }
  }
`;
