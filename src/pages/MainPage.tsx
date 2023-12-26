import React from 'react';
import styled from 'styled-components';
import { BtnLink } from 'styles/Button/BtnLink';
import { BtnSetting } from 'styles/Button/BtnSetting';
import { TodaysQuote } from 'components/TodaysQuote';

export const MainPage = () => {
  return (
    <>
      <TodaysQuote />
      <BtnWrapper>
        <BtnLink text='할 일 추가' />
      </BtnWrapper>
      <BtnWrapper>
        <BtnLink text='할 일' isEmpty />
      </BtnWrapper>
      <BtnWrapper>
        <BtnLink text='완료된 일' isEmpty />
      </BtnWrapper>
      <BtnWrapper>
        <BtnSetting />
      </BtnWrapper>
    </>
  );
};

const BtnWrapper = styled.div`
  width: 100%;
  padding: 0.5rem 1rem;
`;
