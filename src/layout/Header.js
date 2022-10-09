import styled, { css } from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import useResize from '../hook/useResize';

import { ReactComponent as Logo } from '../assets/Logo.svg';
import Button from '../components/Button';

const HeaderBox = styled.header`
  width: 100%;
  min-width: 300px;
  padding: 15px 0 15px 0;
  box-shadow: 0px 5px 40px rgba(177, 177, 177, 0.25);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 999;

  .logo {
    margin-left: 20px;
    ${({ theme }) => {
      return css`
        ${theme.device.desktop} {
          pointer-events: none;
        } ;
      `;
    }}
  }

  .btn {
    margin-right: 20px;
  }
`;

const Header = ({ onCapture }) => {
  const location = useLocation();
  const pathname = location.pathname;
  const windowWidth = useResize();

  const onCaptureHandler = () => {
    onCapture(true);
  };

  return (
    <HeaderBox>
      <Link className='logo' to='/'>
        <Logo />
      </Link>
      {pathname === '/figure-list' || windowWidth >= 1024 ? (
        <Button onClick={onCaptureHandler}>이미지로 보기</Button>
      ) : (
        <Link className='btn' to='/figure-list'>
          <Button>도형 보기</Button>
        </Link>
      )}
    </HeaderBox>
  );
};

export default Header;
