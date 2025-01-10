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
import NavMenu from 'components/menu/SideMenu/NavMenu';

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

  const sideMenuHandler = useCallback(() => {
    setIsToggle((prev) => !prev);
  }, []);

  return (
    <HeaderWrapper>
      <Wrapper>
        <LogoWrapper onClick={onMoveToMainHandler}>
          <StyledLogo />
        </LogoWrapper>
        <SideMenuBtn
          onClick={sideMenuHandler}
          aria-label='사이드 메뉴'
          aria-expanded={isToggle}
        >
          <SideMenuIcon aria-hidden />
        </SideMenuBtn>
      </Wrapper>
      <NavMenu isOpen={isToggle} sideMenuHandler={sideMenuHandler} />
    </HeaderWrapper>
  );
};

export default memo(Header);
