import React from 'react';
import styled from 'styled-components';
import { FaArrowRight } from 'react-icons/fa';
import { BtnProps, ButtonWrapper } from 'styles/Button/Btn';

export const BtnLink = ({ text, isEmpty = false }: BtnProps) => {
  return (
    <BtnLinkWrapper $isEmpty={isEmpty}>
      <button>{text}</button>
      <FaArrowRight fontSize={'1.2rem'} />
    </BtnLinkWrapper>
  );
};

const BtnLinkWrapper = styled(ButtonWrapper)<{ $isEmpty: boolean }>`
  justify-content: space-between;

  svg {
    color: ${({ theme, $isEmpty }) =>
      $isEmpty ? theme.colors.important : '#fff'};
  }

  &:hover,
  :active {
    svg {
      color: ${({ theme, $isEmpty }) =>
        $isEmpty ? '#fff' : theme.colors.important};
      transition: color 0.2s ease-in-out;
    }
  }
`;
