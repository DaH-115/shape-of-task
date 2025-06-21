import { BsChatQuote } from 'react-icons/bs';
import styled, { css, keyframes } from 'styled-components';

export const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors.important};
  text-align: center;
  padding: 1rem 0;
`;

export const QuoteContainer = styled.div`
  width: 100%;
`;

export const QutoeTitleHeader = styled.div`
  width: 100%;
  margin-bottom: 1rem;
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

  &:active,
  &:hover {
    animation: ${({ disabled }) =>
      !disabled &&
      css`
        ${rotateAnimation} 0.5s ease-in-out
      `};
  }
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
    $isPinned ? theme.colors.important : theme.commonColors.black};
`;

export const QuoteText = styled.strong`
  display: block;
  width: 100%;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.4;
  color: ${({ theme }) => theme.commonColors.black};
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  letter-spacing: -0.02em;

  ${({ theme }) => theme.device.md} {
    font-size: 1.4rem;
    line-height: 1.6;
  }
`;

export const QuoteAuthor = styled.p`
  font-size: 0.8rem;
  font-style: italic;
  text-align: right;
  width: 100%;

  ${({ theme }) => theme.device.md} {
    font-size: 0.9rem;
  }
`;
