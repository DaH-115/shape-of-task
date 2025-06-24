import Title from 'components/TitleComponent';
import { BsPinAngleFill, BsPinAngle } from 'react-icons/bs';
import { HiOutlineRefresh } from 'react-icons/hi';
import {
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
import { Loading, ErrorMessage } from 'components/common';

const TodaysQuote = () => {
  const {
    displayedQuote,
    error,
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
        <Title title='Todays Quote' desc='Daily Inspiration' />
      </QutoeTitleHeader>
      {isLoading ? (
        <Loading />
      ) : error ? (
        <ErrorMessage message={error} />
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
