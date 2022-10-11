import styled from 'styled-components';

const MessageBox = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.grey};
  font-weight: 400;
  font-size: 24px;
  letter-spacing: -0.02em;
  margin-top: 40px;
`;

const Message = ({ children }) => {
  return <MessageBox>{children}</MessageBox>;
};

export default Message;
