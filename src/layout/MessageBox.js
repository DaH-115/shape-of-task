import styled from 'styled-components';

const MessageBox = ({ messgae }) => {
  return <Message>{messgae}</Message>;
};

export default MessageBox;

const Message = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.gray};
  font-weight: 400;
  font-size: 36px;
  margin-top: 40px;

  ${({ theme }) => theme.device.tablet} {
    font-size: 24px;
  }
`;
