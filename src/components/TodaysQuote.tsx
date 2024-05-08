import React from 'react';
import styled from 'styled-components';
import { Title } from 'styles/Title';

export const TodaysQuote = () => {
  return (
    <QuoteWrapper>
      <QuoteHeader>
        <Title title='Todats Quote' desc='오늘의 명언' />
      </QuoteHeader>
      {/* TODO: Quote API 적용 */}
      <QuoteText>
        {
          '“We cannot solve problems with the kind of thinking we employed when we came up with them.” — Albert Einstein'
        }
      </QuoteText>
    </QuoteWrapper>
  );
};

const QuoteWrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  margin-bottom: 3rem;

  ${({ theme }) => theme.device.tablet} {
    padding: 1rem;
    margin-bottom: 0;
  }
`;

const QuoteHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 0 1rem;
`;

const QuoteText = styled.div`
  width: 80%;
  font-style: italic;
  font-size: 1.2rem;
  margin-top: 2rem;

  ${({ theme }) => theme.device.tablet} {
    font-size: 1rem;
    margin-top: 1rem;
  }
`;
