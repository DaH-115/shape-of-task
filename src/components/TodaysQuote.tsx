import React from 'react';
import { useGetPostsQuery } from 'store/api/apiSlice';
import styled from 'styled-components';
import { Title } from 'styles/Title';
import { BsChatQuote } from 'react-icons/bs';
import { BsPinAngleFill } from 'react-icons/bs';
import { BsPinAngle } from 'react-icons/bs';
import { HiOutlineRefresh } from 'react-icons/hi';

export const TodaysQuote = () => {
  const [isAuthor, setIsAuthor] = React.useState('');
  const [isContent, setIsContent] = React.useState('');
  const [isSkip, setIsSkip] = React.useState(false);
  const { data, isLoading, isError, refetch } = useGetPostsQuery('random', {
    skip: isSkip,
  });
  const { author, content } = data || {};

  const refetchHanlder = async () => {
    const newResult = await refetch();

    setIsAuthor(newResult.data.author);
    setIsContent(newResult.data.content);
  };

  const skipFetchHandler = () => {
    setIsSkip((prev) => !prev);
  };

  return (
    <QuoteContainer>
      <QuoteHeader>
        <Title title='Todats Quote' desc='오늘의 명언' />
      </QuoteHeader>
      <QuoteContent>
        {isError ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data && data ? (
          <QuoteWrapper>
            <IconsWrapper>
              <RefreshIcon onClick={refetchHanlder}>
                <HiOutlineRefresh />
              </RefreshIcon>
              <QuoteIcon />
              <PinIcon onClick={skipFetchHandler} isSkip={isSkip}>
                {isSkip ? <BsPinAngleFill /> : <BsPinAngle />}
              </PinIcon>
            </IconsWrapper>
            <QuoteText>{isContent ? isContent : content}</QuoteText>
            <QuoteAuthor>- {isAuthor ? isAuthor : author}</QuoteAuthor>
          </QuoteWrapper>
        ) : null}
      </QuoteContent>
    </QuoteContainer>
  );
};

const QuoteContainer = styled.main`
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

const QuoteContent = styled.div`
  width: 100%;
  margin-top: 0.5rem;

  ${({ theme }) => theme.device.tablet} {
  }
`;

const IconsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0.5rem;
`;

const RefreshIcon = styled.div`
  font-size: 1.2rem;
  cursor: pointer;
  background-color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 2.5rem;
  height: 2.5rem;

  &:active,
  &:hover {
    transform: rotate(180deg);
    transition: transform 0.5s ease-in-out;
  }
`;

const PinIcon = styled.div<{ isSkip: boolean }>`
  font-size: 1.2rem;
  cursor: pointer;
  border: 1px solid #fff;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  color: ${({ theme, isSkip }) =>
    isSkip ? theme.colors.important : theme.commonColors.black};

  &:active,
  &:hover {
  }
`;

const QuoteIcon = styled(BsChatQuote)`
  font-size: 1.2rem;
`;

const QuoteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  border: 0.1rem solid ${({ theme }) => theme.colors.important};
  border-radius: 1rem;
  padding: 0 1rem 1rem;
`;

const QuoteText = styled.p`
  text-align: center;
  font-size: 1.1rem;
  font-style: normal;
  margin-bottom: 1rem;
`;

const QuoteAuthor = styled.p`
  font-size: 0.9rem;
  text-align: right;
  font-style: italic;
`;
