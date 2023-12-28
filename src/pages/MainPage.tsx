import React from 'react';
import styled from 'styled-components';
import { BtnLink } from 'styles/Button/BtnLink';
import { BtnSetting } from 'styles/Button/BtnSetting';
import { TodaysQuote } from 'components/TodaysQuote';
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <>
      <TodaysQuote />
      <Link to='/task-list'>
        <BtnWrapper>
          <BtnLink type='button' text='일정 추가' />
        </BtnWrapper>
      </Link>
      <Link to='/task-list'>
        <BtnWrapper>
          <BtnLink type='button' text='일정' isEmpty />
        </BtnWrapper>
      </Link>
      <Link to='/shape-list'>
        <BtnWrapper>
          <BtnLink type='button' text='완료된 일' isEmpty />
        </BtnWrapper>
      </Link>
      <BtnWrapper>
        <BtnSetting />
      </BtnWrapper>
    </>
  );
};

export default React.memo(MainPage);

const BtnWrapper = styled.div`
  width: 100%;
  padding: 0.5rem 1rem;
`;
