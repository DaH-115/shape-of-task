import styled from "styled-components";

interface EmptyStateProps {
  message: string;
}

const EmptyState = ({ message }: EmptyStateProps) => {
  return (
    <EmptyStateWrapper>
      <EmptyStateText>{message}</EmptyStateText>
    </EmptyStateWrapper>
  );
};

export default EmptyState;

const EmptyStateWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const EmptyStateText = styled.p`
  color: ${({ theme }) => theme.commonColors.medium_gray};
  margin: 2rem 0;
  text-align: center;
`;
