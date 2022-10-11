import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import useResize from '../hook/useResize';

import { ReactComponent as Logo } from '../assets/Logo.svg';
import { StyledButton } from '../components/StyledButton';

const HeaderBox = styled.header`
  width: auto;
  min-width: ${({ theme }) => theme.size.mobile};
  padding: 15px 20px 15px 20px;
  box-shadow: 0px 5px 40px rgba(177, 177, 177, 0.25);
  display: flex;
  justify-content: space-between;
  align-items: center;

  .goToTodo {
    margin-right: 6px;
  }
`;

const Header = ({ onCapture }) => {
  const location = useLocation();
  const pathname = location.pathname;
  const windowWidth = useResize();

  const onCaptureHandler = () => {
    onCapture((prev) => !prev);
  };

  return (
    <HeaderBox>
      <Logo />
      <div>
        {windowWidth >= 1024 || (
          <Link to='/' className='goToTodo'>
            <StyledButton>할 일 보기</StyledButton>
          </Link>
        )}

        {pathname === '/figure-list' || windowWidth >= 1024 ? (
          <StyledButton onClick={onCaptureHandler}>이미지로 보기</StyledButton>
        ) : (
          <Link to='/figure-list'>
            <StyledButton>도형 보기</StyledButton>
          </Link>
        )}
      </div>
    </HeaderBox>
  );
};

export default Header;
