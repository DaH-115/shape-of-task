import styled from 'styled-components';

const MessageBox = ({ messgae }) => {
  return <Message>{messgae}</Message>;
};

export default MessageBox;

const Message = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.commonColors.gray};
  font-weight: 400;
  font-size: 32px;
  margin-top: 40px;
`;
