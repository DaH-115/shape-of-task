import styled from 'styled-components';

const WrapperDiv = styled.div`
  width: 100%;
  height: 100%;
`;

const Wrapper = ({ children }) => {
  return <WrapperDiv>{children}</WrapperDiv>;
};

export default Wrapper;
