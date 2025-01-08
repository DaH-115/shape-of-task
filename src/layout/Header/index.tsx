import React, { memo, useCallback, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  HeaderWrapper,
  LogoWrapper,
  SideMenuBtn,
  SideMenuIcon,
  StyledLogo,
  Wrapper,
} from 'layout/Header/Header.styles';
import NavMenu from 'components/menus/NavMenu';

const Header = () => {
  const [isToggle, setIsToggle] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const onMoveToMainHandler = useCallback(() => {
    if (pathname === '/') {
      return;
    } else {
      navigate('/');
    }
  }, [navigate, pathname]);

  const SideMenuHandler = useCallback(() => {
    setIsToggle((prev) => !prev);
  }, []);

  return (
    <HeaderWrapper>
      <Wrapper>
        <LogoWrapper onClick={onMoveToMainHandler}>
          <StyledLogo />
        </LogoWrapper>
        <SideMenuBtn onClick={SideMenuHandler}>
          <SideMenuIcon />
        </SideMenuBtn>
      </Wrapper>
      <NavMenu isOpen={isToggle} sideMenuHandler={SideMenuHandler} />
    </HeaderWrapper>
  );
};

export default memo(Header);
