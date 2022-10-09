import styled from 'styled-components';

const WrapperDiv = styled.div`
  width: 100%;
  height: auto;
`;

const Wrapper = ({ children }) => {
  return <WrapperDiv>{children}</WrapperDiv>;
};

export default Wrapper;
