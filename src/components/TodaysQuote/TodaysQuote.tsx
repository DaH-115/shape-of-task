import React, { useCallback, useState } from 'react';
import { useGetPostsQuery } from 'store/api/apiSlice';
import Title from 'components/TitleComponent';
import { BsPinAngleFill } from 'react-icons/bs';
import { BsPinAngle } from 'react-icons/bs';
import { HiOutlineRefresh } from 'react-icons/hi';
import {
  ErrorMessage,
  IconsWrapper,
  LoadingMessage,
  PinIcon,
  QuoteAuthor,
  QuoteContainer,
  QuoteContent,
  QuoteHeader,
  QuoteIcon,
  QuoteText,
  QuoteWrapper,
  RefreshIcon,
} from 'components/TodaysQuote/TodaysQuote.styles';

const TodaysQuote = () => {
  const [isPinned, setIsPinned] = useState(false);
  const { data: quoteData, isLoading, isError, refetch } = useGetPostsQuery();

  const refetchHandler = useCallback(() => {
    if (!isPinned) refetch();
  }, [isPinned, refetch]);

  const togglePinHandler = useCallback(() => {
    setIsPinned((prev) => !prev);
  }, []);

  return (
    <QuoteContainer>
      <QuoteHeader>
        <Title title='Todays Quote' desc='오늘의 명언' />
      </QuoteHeader>
      <QuoteContent>
        {isError ? (
          <ErrorMessage>
            문제가 생겼어요. 잠시 후 다시 시도해 주세요
          </ErrorMessage>
        ) : isLoading ? (
          <LoadingMessage>Loading...</LoadingMessage>
        ) : !isLoading && quoteData ? (
          <QuoteWrapper>
            <IconsWrapper>
              <RefreshIcon
                title='새로고침 하기'
                aria-label='명언을 새로고침 하기'
                onClick={refetchHandler}
                disabled={isPinned}
              >
                <HiOutlineRefresh aria-hidden />
              </RefreshIcon>
              <QuoteIcon aria-hidden />
              <PinIcon
                title='게시글 고정하기'
                aria-label='현재 명언을 고정하기'
                onClick={togglePinHandler}
                $isPinned={isPinned}
              >
                {isPinned ? (
                  <BsPinAngleFill aria-hidden />
                ) : (
                  <BsPinAngle aria-hidden />
                )}
              </PinIcon>
            </IconsWrapper>
            <QuoteText>{quoteData.content}</QuoteText>
            <QuoteAuthor>- {quoteData.author}</QuoteAuthor>
          </QuoteWrapper>
        ) : null}
      </QuoteContent>
    </QuoteContainer>
  );
};

export default TodaysQuote;
