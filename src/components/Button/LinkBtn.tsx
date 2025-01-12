import React, { memo } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface LinkBtnProps {
  linkTo: string;
  text: string;
}

const LinkBtn = ({ linkTo, text }: LinkBtnProps) => {
  return (
    <Wrapper>
      <StyledLink to={linkTo}>
        {text}
        <ArrowIcon />
      </StyledLink>
    </Wrapper>
  );
};

export default memo(LinkBtn);

const Wrapper = styled.div`
  font-size: 1.2rem;
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0.6rem;

  &:hover,
  &:active {
    color: ${({ theme }) => theme.colors.important};
    text-decoration: underline;
    transition: color 0.2s ease-in-out;
  }
`;

const ArrowIcon = styled(FaArrowRight)`
  font-size: 0.9rem;
  margin-left: 1rem;

  &:hover,
  &:active {
    color: ${({ theme }) => theme.colors.important};
    transition: color 0.2s ease-in-out;
  }
`;
