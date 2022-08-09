import styled from 'styled-components';

const MainBox = styled.main`
  height: 60vh;
  padding-top: 20px;
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
