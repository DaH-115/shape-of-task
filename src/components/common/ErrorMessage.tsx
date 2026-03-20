import styled from "styled-components";

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <ErrorMessageWrapper>
      <ErrorMessageText>{message}</ErrorMessageText>
    </ErrorMessageWrapper>
  );
};

export default ErrorMessage;

const ErrorMessageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const ErrorMessageText = styled.p`
  color: ${({ theme }) => theme.commonColors.dark_gray};
  text-align: center;
  margin: 2rem 0;
`;
