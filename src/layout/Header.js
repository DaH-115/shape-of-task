import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../assets/Logo.svg';

const HeaderBox = styled.header`
  width: 100%;
  padding: 15px 0 15px 0;
  box-shadow: 0px 5px 40px rgba(177, 177, 177, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;

  ${({ theme }) => {
    return css`
      ${theme.device.desktop} {
        pointer-events: none;
      } ;
    `;
  }}
`;

const Header = () => {
  return (
    <HeaderBox>
      <Link to='/figure-list'>
        <Logo />
      </Link>
    </HeaderBox>
  );
};

export default Header;
