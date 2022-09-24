import styled from 'styled-components';

const FlexDiv = styled.div`
  display: flex;
  width: 100%;
  min-width: 300px;
`;

const FlexWrapper = ({ children }) => {
  return <FlexDiv>{children}</FlexDiv>;
};

export default FlexWrapper;
