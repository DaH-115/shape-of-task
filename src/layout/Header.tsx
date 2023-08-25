import React, { useState, useCallback } from 'react';
// import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
// import { captureIsOpen } from 'store/modalSlice';
// import { useAppDispatch } from 'store/hooks';
// import useGetwindowWidth from 'hooks/useGetwindowWidth';
// import useArrCheck from 'hooks/useArrCheck';

import StyledBtn from 'styles/StyledBtn';
import StyledLogo from 'components/StyledLogo';
import SlideMenu from 'components/SlideMenu';

const Header = () => {
  // const dispatch = useAppDispatch();
  // const { windowWidth, desktopSize } = useGetwindowWidth();
  // const arrCheck = useArrCheck();
  // const location = useLocation();
  // const pathname = location.pathname;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const slideMenuOpenHandler = useCallback(() => {
    setIsOpen((prev) => !prev);

    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  // const modalOpenHandle = useCallback(() => {
  //   dispatch(captureIsOpen(true));
  // }, [dispatch]);

  return (
    <HeaderWrapper>
      <StyledLogo />
      <MenueWrapper>
        {/* {windowWidth >= desktopSize || (
          <Link to='/'>
            <StyledBtn>{'할 일'}</StyledBtn>
          </Link>
        )}
        {pathname === '/figure-list' || windowWidth >= desktopSize ? (
          <StyledBtn onClick={modalOpenHandle} disabled={!arrCheck}>
            {'이미지'}
          </StyledBtn>
        ) : (
          <Link to='/figure-list'>
            <StyledBtn>{'도형'}</StyledBtn>
          </Link>
        )} */}
        <StyledBtn onClick={slideMenuOpenHandler}>{'설정'}</StyledBtn>
      </MenueWrapper>
      <SlideMenu isOpen={isOpen} slideMenuHandler={slideMenuOpenHandler} />
    </HeaderWrapper>
  );
};

export default React.memo(Header);

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  min-width: ${({ theme }) => theme.size.mobile};
  padding: 0.5rem 1rem;
  padding-top: 1rem;
  background-color: #fff;

  ${({ theme }) => theme.device.tablet} {
    padding: 0.5rem 2rem;
  }
`;

const MenueWrapper = styled.div`
  display: flex;
`;
