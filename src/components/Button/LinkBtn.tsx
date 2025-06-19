import React, { memo } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { LinkBtnProps } from './types';
import { BUTTON_STYLES } from './styles/constants';

// 링크 버튼 컴포넌트
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

// 링크 스타일 (개선된 버전)
const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0.6rem;

  &:hover,
  &:active {
    color: ${({ theme }) => theme.colors.important};
    text-decoration: underline;
    transition: ${BUTTON_STYLES.transition};
  }
`;

// 화살표 아이콘 스타일
const ArrowIcon = styled(FaArrowRight)`
  font-size: 0.9rem;
  margin-left: 1rem;

  &:hover,
  &:active {
    color: ${({ theme }) => theme.colors.important};
    transition: ${BUTTON_STYLES.transition};
  }
`;
