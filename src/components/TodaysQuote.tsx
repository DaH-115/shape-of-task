import React from 'react';
import styled from 'styled-components';
import { Title } from 'styles/Title';

export const TodaysQuote = () => {
  return (
    <QuoteWrapper>
      <Title title='Todats Quote' desc='오늘의 명언' />
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
  padding: 1rem;
  margin: 1rem 0 4rem;
`;

const QuoteText = styled.div`
  width: 80%;
  font-style: italic;
`;
