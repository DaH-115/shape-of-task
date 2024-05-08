import React from 'react';
import styled from 'styled-components';

export type BtnProps = {
  text: string;
  type: 'button' | 'submit' | 'reset';
  isEmpty?: boolean;
  children?: React.ReactNode;
};

export const Btn = ({ text, type, isEmpty = false, children }: BtnProps) => {
  return (
    <ButtonWrapper $isEmpty={isEmpty}>
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
    $isEmpty ? '#fff' : theme.colors.important};
  border: 0.1rem solid ${({ theme }) => theme.colors.important};
  border-radius: 2rem;
  padding: 0.8rem 1.2rem;
  cursor: pointer;

  button {
    color: ${({ theme, $isEmpty }) =>
      $isEmpty ? theme.commonColors.black : '#fff'};
    font-size: 1.2rem;
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

  ${({ theme }) => theme.device.tablet} {
    width: 100%;
    padding: 0.6rem 1rem;

    button {
      font-size: 0.9rem;
    }
  }
`;
