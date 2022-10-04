import styled, { css } from 'styled-components';

const MainBox = styled.main`
  width: 100%;
  height: 64vh;

  /* scrollbar */
  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }

  ${({ theme }) => {
    return css`
      ${theme.device.modile} {
        min-width: ${theme.size.modile};
      }
    `;
  }}
`;

const Main = ({ children }) => {
  return <MainBox>{children}</MainBox>;
};

export default Main;
