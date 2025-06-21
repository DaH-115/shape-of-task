import Title from 'components/TitleComponent';
import { BsPinAngleFill } from 'react-icons/bs';
import { BsPinAngle } from 'react-icons/bs';
import { HiOutlineRefresh } from 'react-icons/hi';
import {
  ErrorMessage,
  IconsWrapper,
  PinIcon,
  QuoteAuthor,
  QuoteContainer,
  QuoteIcon,
  QuoteText,
  RefreshIcon,
  QutoeTitleHeader,
} from 'components/todaysQuote/TodaysQuote.styles';
import useTodaysQuote from 'hooks/useTodaysQuote';
import Loading from 'layout/Loading';

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
      <QutoeTitleHeader>
        <Title title='Todays Quote' desc='오늘의 명언' />
      </QutoeTitleHeader>
      {isLoading ? (
        <Loading />
      ) : !isLoading && isError ? (
        <ErrorMessage>
          문제가 생겼어요. 잠시 후 다시 시도해 주세요.
        </ErrorMessage>
      ) : displayedQuote ? (
        <>
          <QuoteText>{displayedQuote.quote}</QuoteText>
          <QuoteAuthor>- {displayedQuote.author}</QuoteAuthor>
        </>
      ) : null}
    </QuoteContainer>
  );
};

export default TodaysQuote;
