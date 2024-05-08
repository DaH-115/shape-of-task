import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Btn, BtnProps } from 'styles/Button/Btn';

interface BtnLinkProps extends BtnProps {
  linkTo: string;
}

export const BtnLink = ({ type, text, linkTo, children }: BtnLinkProps) => {
  return (
    <Wrapper>
      <Link to={linkTo}>
        <Btn type={type} text={text} />
        {children}
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-bottom: 0.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;
