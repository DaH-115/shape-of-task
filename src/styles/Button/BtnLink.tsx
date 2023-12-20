import React from 'react';
import styled from 'styled-components';
import { FaArrowRight } from 'react-icons/fa';
import { BtnProps } from './Btn';

export const BtnLink = ({ text, isEmpty = false }: BtnProps) => {
  return (
    <ButtonWrapper isEmpty={isEmpty}>
      <button>{text}</button>
      <FaArrowRight fontSize={'1.2rem'} />
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.div<{ isEmpty: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 100%;
  background-color: ${({ theme, isEmpty }) =>
    isEmpty ? '#fff' : theme.colors.important};
  border: 0.1rem solid ${({ theme }) => theme.colors.important};
  border-radius: 2rem;
  padding: 1rem 1.5rem;

  button {
    color: ${({ theme, isEmpty }) =>
      isEmpty ? theme.commonColors.black : '#fff'};
    font-size: 1.2rem;
  }

  svg {
    color: ${({ theme, isEmpty }) =>
      isEmpty ? theme.colors.important : '#fff'};
  }

  &:hover,
  :active {
    background-color: ${({ theme, isEmpty }) =>
      isEmpty ? theme.colors.important : '#fff'};
    transition: background-color 0.2s ease-in-out;

    button {
      color: ${({ theme, isEmpty }) =>
        isEmpty ? '#fff' : theme.commonColors.black};
      transition: color 0.2s ease-in-out;
    }

    svg {
      color: ${({ theme, isEmpty }) =>
        isEmpty ? '#fff' : theme.colors.important};
      transition: color 0.2s ease-in-out;
    }
  }
`;
