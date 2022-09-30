import styled, { css } from 'styled-components';

const MainBox = styled.main`
  ${(props) => {
    return css`
      display: ${props.display === 'desktop' ? 'none' : 'block'};
    `;
  }}

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

      ${theme.device.desktop} {
        display: block;
      } ;
    `;
  }}
`;

const Main = ({ children, display }) => {
  return <MainBox display={display}>{children}</MainBox>;
};

export default Main;
