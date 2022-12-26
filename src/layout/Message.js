import styled from 'styled-components';

const MessageBox = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.gray};
  font-weight: 400;
  font-size: 36px;
  margin-top: 40px;

  ${({ theme }) => theme.device.tablet} {
    font-size: 24px;
  }
`;

const Message = ({ children }) => {
  return <MessageBox>{children}</MessageBox>;
};

export default Message;
