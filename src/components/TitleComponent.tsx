import { memo } from "react";
import styled from "styled-components";

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
  font-weight: ${({ theme }) => (theme.isDarkMode ? 400 : 700)};
  margin-bottom: 0.2rem;
  color: ${({ theme }) => theme.commonColors.black};
`;

const ContentsTitleDesc = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.commonColors.medium_gray};
`;
