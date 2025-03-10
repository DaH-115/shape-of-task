import { BsChatQuote } from 'react-icons/bs';
import styled, { css, keyframes } from 'styled-components';

export const QuoteIcon = styled(BsChatQuote)`
  color: ${({ theme }) => theme.commonColors.gray};
  margin-bottom: 0.1rem;
`;

export const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors.important};
  text-align: center;
  padding: 1rem 0;
`;

export const LoadingMessage = styled.div`
  color: ${({ theme }) => theme.commonColors.gray};
  text-align: center;
`;

export const QuoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  margin-bottom: 1rem;

  ${({ theme }) => theme.device.tablet} {
    padding: 1rem;
    margin-bottom: 0;
  }
`;

export const QuoteHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  margin-bottom: 1rem;
`;

export const QuoteContent = styled.div`
  width: 100%;
`;

export const IconsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
`;

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(180deg);
  }
`;

export const RefreshIcon = styled.div<{ disabled: boolean }>`
  font-size: 1.2rem;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  color: ${({ theme, disabled }) =>
    disabled ? theme.commonColors.gray : theme.commonColors.black};

  display: flex;
  justify-content: center;
  align-items: center;

  width: 2rem;
  height: 2rem;

  &:active,
  &:hover {
    animation: ${({ disabled }) =>
      !disabled &&
      css`
        ${rotateAnimation} 0.5s ease-in-out
      `};
  }
`;

export const PinIcon = styled.div<{ $isPinned: boolean }>`
  font-size: 1.2rem;
  cursor: pointer;
  border: 1px solid #fff;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  color: ${({ theme, $isPinned }) =>
    $isPinned ? theme.colors.important : theme.commonColors.black};
`;

export const QuoteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 6rem;
  border-radius: 1rem;

  overflow: scroll;
  ${({ theme }) => theme.mixins.hideScrollbar}
`;

export const QuoteText = styled.strong`
  width: 100%;
  text-align: center;
  padding: 0 1rem;
  margin-bottom: 0.5rem;

  ${({ theme }) => theme.device.tablet} {
    font-size: 0.9rem;
  }
`;

export const QuoteAuthor = styled.p`
  font-size: 0.9rem;
  font-style: italic;
`;
