import styled from 'styled-components';

const InfoMessage = ({ message }: { message: string }) => {
  return <MessageText>{message}</MessageText>;
};

export default InfoMessage;

const MessageText = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.commonColors.gray};
  font-size: 1.2rem;
`;
