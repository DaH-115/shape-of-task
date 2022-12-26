import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import useGetwindowWidth from '../hooks/useGetwindowWidth';
import useArrCheck from '../hooks/useArrCheck';

import StyledLogo from '../assets/Logo';
import StyledBtn from '../styles/StyledBtn';
import { captureIsOpen } from '../store/modalSlice';

const Header = () => {
  const dispatch = useDispatch();
  const { windowWidth, desktopSize } = useGetwindowWidth();
  const location = useLocation();
  const arrCheck = useArrCheck();
  const pathname = location.pathname;

  const modalOpenHandle = useCallback(() => {
    dispatch(captureIsOpen(true));
  }, [dispatch]);

  return (
    <HeaderWrapper>
      <StyledLogo />
      <MenueWrapper>
        {windowWidth >= desktopSize || (
          <Link to='/' className='goToTodo'>
            <StyledBtn>할 일</StyledBtn>
          </Link>
        )}
        {pathname === '/figure-list' || windowWidth >= desktopSize ? (
          <StyledBtn onClick={modalOpenHandle} disabled={!arrCheck}>
            이미지
          </StyledBtn>
        ) : (
          <Link to='/figure-list'>
            <StyledBtn>도형</StyledBtn>
          </Link>
        )}
      </MenueWrapper>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  min-width: ${({ theme }) => theme.size.mobile};
  padding: 15px 20px 15px 20px;
  box-shadow: 0px 5px 40px rgba(177, 177, 177, 0.2);
  background-color: #fff;

  .goToTodo {
    margin-right: 6px;
  }
`;

const MenueWrapper = styled.div`
  display: flex;
  margin-left: 20px;
`;
