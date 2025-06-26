import { memo } from 'react';
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

export default memo(Title);

const TitleWrapper = styled.div`
  width: 100%;
`;

const ContentsTitle = styled.h1`
  font-size: 1.4rem;
  font-weight: bold;

  ${({ theme }) => theme.device.md} {
    font-size: 1rem;
  }
`;

const ContentsTitleDesc = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.commonColors.medium_gray};

  ${({ theme }) => theme.device.md} {
    font-size: 0.9rem;
  }
`;
