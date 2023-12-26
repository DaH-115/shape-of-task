import React from 'react';
import styled from 'styled-components';

export type BtnProps = {
  text: string;
  isEmpty?: boolean;
};

export const Btn = ({ text, isEmpty = false }: BtnProps) => {
  return (
    <ButtonWrapper $isEmpty={isEmpty}>
      <button type='button'>{text}</button>
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
  padding: 1rem 1.5rem;

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
  }
`;
