import styled from 'styled-components';

const MainBox = styled.main`
  width: 100%;
  height: 63vh;
  padding-top: 20px;

  /* scrollbar */
  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

const Main = ({ children }) => {
  return <MainBox>{children}</MainBox>;
};

export default Main;
