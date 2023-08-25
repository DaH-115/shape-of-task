import styled from 'styled-components';

const Main = styled.main`
  width: 100%;
  height: 65vh;

  /* scrollbar */
  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }

  ${({ theme }) => theme.device.modile} {
    min-width: ${({ theme }) => theme.size.modile};
  }
`;

export default Main;
