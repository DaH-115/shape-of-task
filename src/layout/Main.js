import styled from 'styled-components';

const MainBox = styled.main`
  width: 80%;
  height: 100%;
  padding-top: 20px;
`;

const Main = ({ children }) => {
  return <MainBox>{children}</MainBox>;
};

export default Main;
