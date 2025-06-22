import { memo } from 'react';
import styled from 'styled-components';

interface ErrorMessageProps {
  message: string;
  className?: string;
}

const ErrorMessage = ({ message, className }: ErrorMessageProps) => {
  return (
    <ErrorMessageWrapper className={className}>{message}</ErrorMessageWrapper>
  );
};

export default memo(ErrorMessage);

const ErrorMessageWrapper = styled.div`
  color: ${({ theme }) => theme.colors.important};
  text-align: center;
  padding: 1rem 0;
  font-size: 0.9rem;
`;
