import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import useResize from '../hook/useResize';

import { ReactComponent as Logo } from '../assets/Logo.svg';
import Button from '../components/Button';

const HeaderBox = styled.header`
  width: auto;
  min-width: 300px;
  padding: 15px 20px 15px 20px;
  box-shadow: 0px 5px 40px rgba(177, 177, 177, 0.25);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 999;

  .goToTodo {
    margin-right: 6px;
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
      <Logo />
      <div>
        {windowWidth >= 1024 || (
          <Link to='/' className='goToTodo'>
            <Button onClick={onCaptureHandler}>할 일 보기</Button>
          </Link>
        )}

        {pathname === '/figure-list' || windowWidth >= 1024 ? (
          <Button onClick={onCaptureHandler}>이미지로 보기</Button>
        ) : (
          <Link to='/figure-list'>
            <Button>도형 보기</Button>
          </Link>
        )}
      </div>
    </HeaderBox>
  );
};

export default Header;
