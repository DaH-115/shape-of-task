import styled from 'styled-components';

const MainBox = styled.div`
  width: 100%;
  height: 70vh;
  background-color: pink;
`;

const Main = ({ children }) => {
  return <MainBox>{children}</MainBox>;
};

export default Main;
