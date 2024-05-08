import React from 'react';
import styled from 'styled-components';

interface TitleProps {
  title: string;
  desc: string;
}

export const Title = ({ title, desc }: TitleProps) => {
  return (
    <TitleWrapper>
      <ContentsTitle>{title}</ContentsTitle>
      <ContentsTitleDesc>{desc}</ContentsTitleDesc>
    </TitleWrapper>
  );
};

const TitleWrapper = styled.div`
  width: 100%;
  padding: 1rem 0;
`;

const ContentsTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 0.4rem;

  ${({ theme }) => theme.device.tablet} {
    font-size: 1.4rem;
  }
`;

const ContentsTitleDesc = styled.h2`
  font-size: 1rem;

  ${({ theme }) => theme.device.tablet} {
    font-size: 0.9rem;
  }
`;
