import styled from 'styled-components';

const FlexDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-width: ${({ theme }) => theme.size.mobile};
`;

const FlexWrapper = ({ children }) => {
  return <FlexDiv>{children}</FlexDiv>;
};

export default FlexWrapper;
