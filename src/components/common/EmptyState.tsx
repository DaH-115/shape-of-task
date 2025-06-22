import { memo } from 'react';
import styled from 'styled-components';

interface EmptyStateProps {
  message: string;
  className?: string;
}

const EmptyState = ({ message, className }: EmptyStateProps) => {
  return (
    <MessageWrapper className={className}>
      <BlankMessage>{message}</BlankMessage>
    </MessageWrapper>
  );
};

export default memo(EmptyState);

const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const BlankMessage = styled.p`
  color: ${({ theme }) => theme.commonColors.medium_gray};
  font-size: 1.2rem;
  margin-top: 2rem;
  text-align: center;
`;
