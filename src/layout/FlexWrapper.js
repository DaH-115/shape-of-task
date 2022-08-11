import styled from 'styled-components';

const FlexDiv = styled.div`
  display: flex;
`;

const FlexWrapper = ({ children }) => {
  return <FlexDiv>{children}</FlexDiv>;
};

export default FlexWrapper;
