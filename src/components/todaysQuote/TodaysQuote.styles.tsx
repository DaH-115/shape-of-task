import { BsChatQuote } from "react-icons/bs";
import styled from "styled-components";

export const QuoteContainer = styled.div`
  width: 100%;
`;

export const QutoeTitleHeader = styled.div`
  width: 100%;
  margin-bottom: 1rem;
`;

export const IconsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
`;

export const QuoteIcon = styled(BsChatQuote)`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.commonColors.medium_gray};
  margin-bottom: 0.5rem;
`;

export const PinIcon = styled.div<{ $isPinned: boolean }>`
  font-size: 1.2rem;
  cursor: pointer;
  color: ${({ theme, $isPinned }) =>
    $isPinned ? theme.colors.priority1 : theme.commonColors.black};
`;

export const QuoteText = styled.p`
  display: block;
  width: 100%;
  margin-bottom: 2rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.commonColors.black};
`;

export const QuoteAuthor = styled.p`
  font-size: 0.8rem;
  font-style: italic;
  text-align: right;
  width: 100%;
`;
