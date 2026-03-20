import Title from "@/components/TitleComponent";
import { BsPinAngleFill, BsPinAngle } from "react-icons/bs";
import {
  IconsWrapper,
  PinIcon,
  QuoteAuthor,
  QuoteContainer,
  QuoteIcon,
  QuoteText,
  QutoeTitleHeader,
} from "@/components/todaysQuote/TodaysQuote.styles";
import useTodaysQuote from "@/hooks/useTodaysQuote";
import { Loading, ErrorMessage } from "@/components/common";

const TodaysQuote = () => {
  const {
    displayedQuote,
    error,
    isLoading,
    pinSaveHandler,
    isPinned,
  } = useTodaysQuote();

  return (
    <QuoteContainer>
      <IconsWrapper>
        <PinIcon
          title="게시글 고정하기"
          aria-label="현재 명언을 고정하기"
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
        <QuoteIcon aria-hidden />
        <Title title="Todays Quote" desc="Daily Inspiration" />
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
