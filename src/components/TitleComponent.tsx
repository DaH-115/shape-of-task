import React from 'react';
import styled from 'styled-components';

interface TitleProps {
  title: string;
  desc: string;
}

const Title = ({ title, desc }: TitleProps) => {
  return (
    <TitleWrapper>
      <ContentsTitle>{title}</ContentsTitle>
      <ContentsTitleDesc>{desc}</ContentsTitleDesc>
    </TitleWrapper>
  );
};

export default React.memo(Title);

const TitleWrapper = styled.div`
  width: 100%;
`;

const ContentsTitle = styled.h1`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.4rem;
`;

const ContentsTitleDesc = styled.p`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.commonColors.black};
`;
