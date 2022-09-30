import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../assets/Logo.svg';

const HeaderBox = styled.header`
  width: 100%;
  padding: 15px 0 15px 0;
  box-shadow: 0px 5px 40px rgba(177, 177, 177, 0.25);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 999;

  .logo {
    margin-left: 20px;
  }

  .btn {
    margin-right: 20px;
  }

  ${({ theme }) => {
    return css`
      ${theme.device.desktop} {
        pointer-events: none;
      } ;
    `;
  }}
`;

const MoveToFL = styled.button`
  width: 100%;
  border: 1px solid #a6c6c4;
  border-radius: 20px;
  padding: 10px;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: -0.02em;

  &:active {
    color: #fff;
    background-color: #ee5a24;
  }

  ${({ theme }) => {
    return css`
      ${theme.device.desktop} {
        display: none;
      } ;
    `;
  }}
`;

const Header = () => {
  return (
    <HeaderBox>
      <Link className='logo' to='/'>
        <Logo />
      </Link>
      <Link className='btn' to='/figure-list'>
        <MoveToFL>도형 보기</MoveToFL>
      </Link>
    </HeaderBox>
  );
};

export default Header;
