import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import useGetwindowWidth from '../hooks/useGetwindowWidth';
import useArrCheck from '../hooks/useArrCheck';

import StyledLogo from '../assets/Logo';
import StyledButton from '../styles/StyledButton';
import { captureIsOpen } from '../store/modalSlice';

const HeaderBox = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-width: ${({ theme }) => theme.size.mobile};
  box-sizing: border-box;
  padding: 15px 20px 15px 20px;
  box-shadow: 0px 5px 40px rgba(177, 177, 177, 0.2);
  background-color: #fff;

  .goToTodo {
    margin-right: 6px;
  }
`;

const Div = styled.div`
  display: flex;
  margin-left: 20px;
`;

const Header = () => {
  const dispatch = useDispatch();
  const { windowWidth, desktopSize } = useGetwindowWidth();
  const location = useLocation();
  const arrCheck = useArrCheck();
  const pathname = location.pathname;

  const modalOpenHandle = () => {
    dispatch(captureIsOpen(true));
  };

  return (
    <HeaderBox>
      <StyledLogo />
      <Div>
        {windowWidth >= desktopSize || (
          <Link to='/' className='goToTodo'>
            <StyledButton>할 일</StyledButton>
          </Link>
        )}
        {pathname === '/figure-list' || windowWidth >= desktopSize ? (
          <StyledButton onClick={modalOpenHandle} disabled={!arrCheck}>
            이미지
          </StyledButton>
        ) : (
          <Link to='/figure-list'>
            <StyledButton>도형</StyledButton>
          </Link>
        )}
      </Div>
    </HeaderBox>
  );
};

export default Header;
