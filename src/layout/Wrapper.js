import styled from 'styled-components';

const WrapperBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = ({ children }) => {
  return <WrapperBox>{children}</WrapperBox>;
};

export default Wrapper;
