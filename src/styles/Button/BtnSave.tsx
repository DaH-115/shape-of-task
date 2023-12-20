import React from 'react';
import styled from 'styled-components';
import { GiSaveArrow } from 'react-icons/gi';

export const BtnSave = () => {
  return (
    <ButtonWrapper>
      <button>{'이미지 저장'}</button>
      <GiSaveArrow fontSize='1.4rem' />
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.important};
  border: 0.1rem solid ${({ theme }) => theme.colors.important};
  border-radius: 2rem;
  padding: 1rem 1.5rem;

  button {
    color: #fff;
    font-size: 1.2rem;
  }

  svg {
    color: #fff;
  }

  &:hover,
  :active {
    background-color: #fff;
    transition: background-color 0.2s ease-in-out;

    button {
      color: ${({ theme }) => theme.commonColors.black};
      transition: color 0.2s ease-in-out;
    }

    svg {
      color: ${({ theme }) => theme.colors.important};
      transition: color 0.2s ease-in-out;
    }
  }
`;
