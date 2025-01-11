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
import useTodaysQuote from 'hooks/useTodaysQuote';

const TodaysQuote = () => {
  const {
    displayedQuote,
    isError,
    isLoading,
    pinSaveHandler,
    refetchHandler,
    isPinned,
  } = useTodaysQuote();

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
        ) : isLoading && !isPinned ? (
          <LoadingMessage>Loading...</LoadingMessage>
        ) : displayedQuote ? (
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
                onClick={pinSaveHandler}
                $isPinned={isPinned}
              >
                {isPinned ? (
                  <BsPinAngleFill aria-hidden />
                ) : (
                  <BsPinAngle aria-hidden />
                )}
              </PinIcon>
            </IconsWrapper>
            <QuoteText>{displayedQuote.content}</QuoteText>
            <QuoteAuthor>- {displayedQuote.author}</QuoteAuthor>
          </QuoteWrapper>
        ) : null}
      </QuoteContent>
    </QuoteContainer>
  );
};

export default TodaysQuote;
